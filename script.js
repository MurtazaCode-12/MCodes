// --- Helper function for notifications ---
// Note: This function is no longer connected to the contact form,
// but you can keep it for other potential uses on your site.
const showNotification = (message, isSuccess = true) => {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');

    // Make it visible
    notification.classList.remove('opacity-0', 'translate-y-4');
    
    // Clear previous color classes
    notification.classList.remove('bg-red-500', 'bg-accent');
    
    notificationMessage.textContent = message;

    if (isSuccess) {
        notification.classList.add('bg-accent');
    } else {
        notification.classList.add('bg-red-500');
    }

    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.add('opacity-0', 'translate-y-4');
    }, 3000);
};

// --- Mobile Menu Toggle ---
const setupMobileMenu = () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
};


// --- Initialize the application after the DOM is loaded ---
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    // The setupContactForm() function has been removed as Netlify handles form submission automatically.
});