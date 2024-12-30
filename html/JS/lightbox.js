const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeButton = document.querySelector('.lightbox-close');
const prevButton = document.querySelector('.lightbox-prev');
const nextButton = document.querySelector('.lightbox-next');
const imagesAndVideos = document.querySelectorAll('img, video');

let currentIndex = 0;

// Mostrar el lightbox con el contenido seleccionado
function showLightbox(index) {
    currentIndex = index;
    updateContent();
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Evita el scroll de fondo
}

// Actualizar el contenido del lightbox
function updateContent() {
    lightboxContent.innerHTML = '';
    const mediaClone = imagesAndVideos[currentIndex].cloneNode(true);
    mediaClone.controls = mediaClone.tagName === 'VIDEO';
    lightboxContent.appendChild(mediaClone);
    updateNavigation();
    updatePositionIndicator();
}

// Actualizar botones de navegación
function updateNavigation() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === imagesAndVideos.length - 1;
}

// Mostrar el siguiente contenido
function showNext() {
    if (currentIndex < imagesAndVideos.length - 1) {
        currentIndex++;
        updateContent();
    }
}

// Mostrar el contenido anterior
function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent();
    }
}

// Cerrar el lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura el scroll
}

// Detectar clics en imágenes y videos para abrir el lightbox
imagesAndVideos.forEach((media, index) => {
    media.addEventListener('click', () => showLightbox(index));
});

// Cerrar el lightbox al hacer clic en la "X"
closeButton.addEventListener('click', closeLightbox);

// Cerrar el lightbox al hacer clic fuera del contenido
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Navegación con botones de "siguiente" y "anterior"
prevButton.addEventListener('click', showPrev);
nextButton.addEventListener('click', showNext);

// Navegación con el teclado (teclas: Esc, ←, →)
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    }
});

// Actualizar el indicador de posición
function updatePositionIndicator() {
    let indicator = document.querySelector('.lightbox-position');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.classList.add('lightbox-position');
        lightbox.appendChild(indicator);
    }
    indicator.textContent = `${currentIndex + 1} / ${imagesAndVideos.length}`;
}
