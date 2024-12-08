document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazy');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const loadImage = (entry, observer) => {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.onload = () => {
            img.classList.remove('lazy');
            img.style.opacity = 1;
        };
        observer.unobserve(img); 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry, observer);
            }
        });
    }, options);

    lazyImages.forEach(image => {
        observer.observe(image);
    });
});
