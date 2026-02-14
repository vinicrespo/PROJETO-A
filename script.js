document.addEventListener('DOMContentLoaded', function() {
    // Reveal Time Configuration
    // 20 minutes * 60 seconds * 1000 milliseconds = 1,200,000 ms
    // Defaulting to 20 minutes as requested for VSL usually
    const DELAY_MS = 1200000; 
    // FOR TESTING: Uncomment below to set 5 seconds
    // const DELAY_MS = 5000;

    const ctaButton = document.getElementById('cta-button');

    if (ctaButton) {
        setTimeout(function() {
            ctaButton.style.display = 'inline-block';
            
            // Add a small fade-in animation for smoothness
            ctaButton.style.opacity = '0';
            ctaButton.style.transition = 'opacity 0.5s ease, transform 0.2s ease';
            
            // Trigger reflow
            void ctaButton.offsetWidth;
            
            ctaButton.style.opacity = '1';
        }, DELAY_MS);
    }
});
