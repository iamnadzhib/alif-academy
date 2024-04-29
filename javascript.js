var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  document.querySelector('.header-burger-button').addEventListener('click', function() {
    document.querySelector('.header-menu-list').classList.toggle('open');
  });

  const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


function showSlide() {
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[currentSlide].style.display = 'block';
}


function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}


showSlide();


setInterval(nextSlide, 3000);