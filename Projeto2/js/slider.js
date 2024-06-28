
document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 1;
  const totalSlides = 5;

  function nextSlide() {
    currentSlide = currentSlide % totalSlides + 1;
    document.getElementById(`slide${currentSlide}`).checked = true;
  }
  setInterval(nextSlide, 3000);
});