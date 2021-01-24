const images = document.querySelectorAll(".image");
// Current slide
let currentSlide = 0;
// Time between slides (seconds)
const slideTimer = 3000;

// changeSlides function to be called in the setInterval
const changeSlides = () => {
  // Reset all images to opacity 0
  images.forEach((image) => image.style.opacity = 0)
  
  // If current slide not equal to the last item +1
  // Else set current slide to 0 and restart the slideshow
  if (currentSlide !== images.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  //  Current slide made visible
  images[currentSlide].style.opacity = 1;
};

// Call changeSlides and slideTimer
setInterval(changeSlides, slideTimer);
