const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

const slides = document.getElementsByClassName('carousel');
let currentSlide = 0;
let finalSlide = slides.length - 1;

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = finalSlide;
  }

  for (let i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].classList.add('carousel-active');
    } else {
      slides[i].classList.remove('carousel-active');
    }
  }
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > finalSlide) {
    currentSlide = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].classList.add('carousel-active');
    } else {
      slides[i].classList.remove('carousel-active');
    }
  }
});
