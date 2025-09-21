/**
 * Main application script.
 * This script waits for the DOM to be fully loaded before running.
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Sets up the mobile menu functionality.
     * Toggles visibility, updates ARIA attributes, and closes the menu on link click.
     */
    const setupMobileMenu = () => {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = mobileMenu.querySelectorAll('a');

        if (!menuBtn || !mobileMenu) return;

        // Toggle menu on button click
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenu.classList.toggle('hidden');
            menuBtn.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when a link is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    };

    /**
     * Initializes the typing animation for the hero headline using Typed.js.
     * Checks if the Typed library is available.
     */
    const initTyped = () => {
        if (typeof Typed !== 'undefined') {
            new Typed('#typed-headline', {
                strings: ['Creative Digital Solutions', 'Reliable IT Services', 'Your Partner for Growth'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
            });
        } else {
            console.error('Typed.js library not found.');
        }
    };
    
    /**
     * Sets up a scroll-triggered fade-in animation for sections.
     * Uses the IntersectionObserver API for performance.
     */
    const setupScrollAnimations = () => {
        const sections = document.querySelectorAll('.fade-in-section');
        if (!sections.length) return;

        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: stop observing the element once it's visible
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    // --- Initialize all features ---
    setupMobileMenu();
    initTyped();
    setupScrollAnimations();
});