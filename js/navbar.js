// Navigation Active State Handler
document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Set active class to current page link
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
