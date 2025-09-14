const slider = document.querySelector('.review-slider');
let scrollAmount = 0;

setInterval(() => {
  if (slider.scrollWidth - slider.clientWidth <= scrollAmount) {
    scrollAmount = 0;
  } else {
    scrollAmount += 300;
  }
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 4000);
