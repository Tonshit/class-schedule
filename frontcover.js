document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Slideshow functionality
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // ✅ Redirect to another page on button click
    contactBtn.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
            window.location.href = 'announcement&update.html'; // Change this to your target page
        }, 200);
    });

    // Hover animation to nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Logo pulse animation on click
    logo.addEventListener('click', function() {
        this.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = 'float 3s ease-in-out infinite';
        }, 500);
    });

    // Scroll animations
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
