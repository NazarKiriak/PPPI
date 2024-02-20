document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth' // Плавна анімація
        });
    });
});
