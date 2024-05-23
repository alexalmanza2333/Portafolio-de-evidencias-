let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img');
  // Obtiene todas las imágenes del carrusel
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    // Oculta todas las imágenes eliminando la clase 'active'
  }

  slideIndex++;
  // Incrementa el índice del slide
  
  if (slideIndex > slides.length) { slideIndex = 1; }
  // Si el índice es mayor que el número de imágenes, lo reinicia a 1
  
  slides[slideIndex - 1].classList.add('active');
  // Muestra la imagen correspondiente al índice actual añadiendo la clase 'active'

  setTimeout(showSlides, 2000); 
  // Configura el cambio automático de imágenes cada 2 segundos
}
