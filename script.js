// Dark mode toggle script
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Lightbox effect
document.querySelectorAll('.lightbox').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');
        const lightboxImg = document.createElement('img');
        lightboxImg.classList.add('lightbox-img');
        lightboxImg.src = this.src;
        overlay.appendChild(lightboxImg);
        document.body.appendChild(overlay);
        overlay.addEventListener('click', function() {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.remove();
            }, 500);
        });
        overlay.classList.add('active');
    });
});
