// sw.js - Service Worker for Third-Party Caching

const CACHE_NAME = 'third-party-cache-v1';

// Install event
self.addEventListener('install', event => {
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Intercept fetch requests
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Cache Facebook and UTMify scripts
    if (url.hostname.includes('facebook.net') ||
        url.hostname.includes('utmify.com') ||
        url.hostname.includes('converteai.net')) {

        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(event.request).then(response => {
                    // Return cached response if found
                    if (response) {
                        return response;
                    }

                    // Otherwise fetch from network and cache it
                    return fetch(event.request).then(networkResponse => {
                        // Don't cache valid responses only
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && networkResponse.type !== 'cors') {
                            return networkResponse;
                        }

                        // Clone the response because it's a stream
                        const responseToCache = networkResponse.clone();

                        cache.put(event.request, responseToCache);
                        return networkResponse;
                    });
                });
            })
        );
    }
});
