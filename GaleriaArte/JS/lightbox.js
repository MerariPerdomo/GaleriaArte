const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeButton = document.querySelector('.lightbox-close');
const prevButton = document.querySelector('.lightbox-prev');
const nextButton = document.querySelector('.lightbox-next');
const images = document.querySelectorAll('img');
const videos = document.querySelectorAll('video');

let currentIndex = 0;
let mediaArray = [];

// Función para mostrar el lightbox con el contenido dado
function showLightbox(content) {
    lightboxContent.innerHTML = '';
    lightboxContent.appendChild(content);
    lightbox.style.display = 'flex';
    updateNavigation();
}

// Actualizar botones de navegación según la posición actual
function updateNavigation() {
    prevButton.disabled = false;
    nextButton.disabled = false;
}

// Función para mostrar el siguiente elemento
function showNext() {
    currentIndex = (currentIndex + 1) % mediaArray.length;
    updateContent();
}

// Función para mostrar el elemento anterior
function showPrev() {
    currentIndex = (currentIndex - 1 + mediaArray.length) % mediaArray.length;
    updateContent();
}

// Actualizar el contenido del lightbox con el elemento actual
function updateContent() {
    lightboxContent.innerHTML = '';
    lightboxContent.appendChild(mediaArray[currentIndex].cloneNode(true));
    updateNavigation();
}

// Manejar clics en imágenes
images.forEach((image, index) => {
    image.addEventListener('click', function() {
        mediaArray = Array.from(images).concat(Array.from(videos));
        currentIndex = index;
        const imgClone = image.cloneNode(true);
        showLightbox(imgClone);
    });
});

// Manejar clics en videos
videos.forEach((video, index) => {
    video.addEventListener('click', function() {
        mediaArray = Array.from(images).concat(Array.from(videos));
        currentIndex = index + images.length;
        const videoClone = video.cloneNode(true);
        videoClone.controls = true;
        showLightbox(videoClone);
    });
});

// Cerrar el lightbox
closeButton.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Cerrar el lightbox al hacer clic fuera del contenido
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Manejar botones de navegación
prevButton.addEventListener('click', showPrev);
nextButton.addEventListener('click', showNext);

// Agregar efecto de transición al cambiar el contenido
lightboxContent.addEventListener('transitionend', () => {
    if (lightbox.style.display === 'flex') {
        updateContent();
    }
});
