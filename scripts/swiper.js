const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const autoplayInterval = 3000; // Tiempo en milisegundos (3 segundos)

function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});

// Funcionalidad de autoplay
function startAutoplay() {
  return setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  }, autoplayInterval);
}

function stopAutoplay(intervalId) {
  clearInterval(intervalId);
}

// Iniciar autoplay
let autoplay = startAutoplay();

// Pausar autoplay al interactuar con botones
nextButton.addEventListener('click', () => stopAutoplay(autoplay));
prevButton.addEventListener('click', () => stopAutoplay(autoplay));

// Reanudar autoplay después de interacción (opcional)
nextButton.addEventListener('click', () => {
  autoplay = startAutoplay();
});
prevButton.addEventListener('click', () => {
  autoplay = startAutoplay();
});
