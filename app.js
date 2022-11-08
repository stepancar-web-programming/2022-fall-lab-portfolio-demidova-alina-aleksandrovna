
/** для слайдера*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";    
}

var timer = 0;
makeTimer(); 
function makeTimer(){
  clearInterval(timer) 
  timer = setInterval(function(){ slideIndex++; showSlides(slideIndex);} ,3000);
}
slides[slideIndex-1].style.display = "block";

