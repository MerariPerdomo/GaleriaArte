const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

// Función para mover el carrusel
function moveCarousel() {
  slide.style.transition = 'transform 0.5s ease-in-out';
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
  // Si estamos en el último elemento, volvemos al inicio sin animación
  if (counter >= images.length - 1) {
    setTimeout(() => {
      counter = 0;
      slide.style.transition = 'none';
      slide.style.transform = 'translateX(0)';
    }, 500);
  }
}

document.getElementById('nextBtn').addEventListener('click', () => {
  counter++;
  moveCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  counter--;
  moveCarousel();
});

/* Animación automática */
setInterval(() => {
  counter++;
  moveCarousel();
}, 3000);
