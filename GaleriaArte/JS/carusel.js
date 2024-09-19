const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (counter >= images.length - 1) {
        counter = 0; // Volver al inicio si se llega al final
    } else {
        counter++;
    }
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length - 1; // Ir al último elemento si se está en el primero
    } else {
        counter--;
    }
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

/* Animación automática */
setInterval(() => {
    if (counter >= images.length - 1) {
        counter = 0; // Volver al inicio cuando se llegue al final
    } else {
        counter++;
    }
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 3000); // Cambia de imagen cada 3 segundos
