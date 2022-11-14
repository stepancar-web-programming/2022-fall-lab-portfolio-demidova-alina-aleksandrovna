let slideIndex = 0
function showslides() {
  const slides = document.getElementsByClassName('myslides')
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none'
  }
  slideIndex += 1
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = 'block'
  setTimeout(showslides, 3000)
}
showslides()
