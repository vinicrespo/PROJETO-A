// CTA Reveal Logic - Handled by VTurb "hide" class removal
// Keeping structure for potential fallback or additional logic if needed
/*
document.addEventListener('DOMContentLoaded', function () {
    // Reveal Time Configuration
    // 20 minutes * 60 seconds * 1000 milliseconds = 1,200,000 ms
    // Defaulting to 0 for immediate review as requested
    const DELAY_MS = 0; 
    // const DELAY_MS = 1200000;
    // FOR TESTING: Uncomment below to set 5 seconds
    // const DELAY_MS = 5000;

    const ctaContainer = document.getElementById('cta-container');

    if (ctaContainer) {
        setTimeout(function () {
            ctaContainer.style.display = 'flex'; // Use flex to maintain centering

            // Add a small fade-in animation for smoothness
            ctaContainer.style.opacity = '0';
            ctaContainer.style.transition = 'opacity 0.8s ease';

            // Trigger reflow
            void ctaContainer.offsetWidth;

            ctaContainer.style.opacity = '1';

            // Gentle smooth scroll to center the CTA
            ctaContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, DELAY_MS);
    }
});
*/
