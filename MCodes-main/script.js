/**
 * Main application script.
 * This script waits for the DOM to be fully loaded before running.
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Sets up the mobile menu functionality.
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
     * Initializes the typing animation for the hero headline.
     */
    const initTyped = () => {
        // Only run if the typed-headline element exists
        if (document.getElementById('typed-headline')) {
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
        }
    };
    
    /**
     * Sets up a scroll-triggered fade-in animation for sections.
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
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    /**
     * Sets up the interactive contact card deck functionality.
     */
    const setupContactDeck = () => {
        const contactDeck = document.getElementById('contact-deck');
        if (!contactDeck) return; // Only run on the contact page

        const hubCard = document.getElementById('hub-card');
        const formCard = document.getElementById('form-card');
        const callCard = document.getElementById('call-card');
        const mapCard = document.getElementById('map-card');

        const showFormBtn = document.getElementById('show-form-btn');
        const showCallBtn = document.getElementById('show-call-btn');
        const showMapBtn = document.getElementById('show-map-btn');
        
        const backBtns = document.querySelectorAll('.back-btn');
        const allCards = document.querySelectorAll('.contact-card');

        // Function to show a specific card
        const showCard = (cardToShow) => {
            allCards.forEach(card => {
                card.classList.remove('active-card');
            });
            cardToShow.classList.add('active-card');
        };

        // Event Listeners for Hub buttons
        showFormBtn.addEventListener('click', () => showCard(formCard));
        showCallBtn.addEventListener('click', () => showCard(callCard));
        showMapBtn.addEventListener('click', () => showCard(mapCard));

        // Event Listeners for all "Back" buttons
        backBtns.forEach(btn => {
            btn.addEventListener('click', () => showCard(hubCard));
        });
    };

    // --- Initialize all features ---
    setupMobileMenu();
    initTyped();
    setupScrollAnimations();
    setupContactDeck(); // This is now correctly placed INSIDE the listener
});