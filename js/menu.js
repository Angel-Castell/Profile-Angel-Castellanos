function update(numero){
	for (var i = 0; i < 5; i++) {
		document.getElementsByClassName('state')[i].classList.remove("active-menu-item");
	}

	document.getElementsByClassName('state')[numero].classList.add("active-menu-item");
}

let slideIndex1 = 1;
let slideIndex2 = 1;
showSlidesExchangeSystem(slideIndex1);
showSlidesReservationSystem(slideIndex2);

// Next/previous controls
function plusSlides(project, n) {
  if (project == 1) {showSlidesExchangeSystem(slideIndex1 += n)}
  if (project == 2) {showSlidesReservationSystem(slideIndex2 += n)}
}

// Thumbnail image controls
function currentSlide(project, n) {
  if (project == 1) {showSlidesExchangeSystem(project, slideIndex1 = n)}
  if (project == 2) {showSlidesReservationSystem(project, slideIndex2 = n)}
}

function showSlidesExchangeSystem(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-exchage-system");
  let dots = document.getElementsByClassName("dot-exchage-system");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active-dot";
}

function showSlidesReservationSystem(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-reservation-system");
  let dots = document.getElementsByClassName("dot-reservation-system");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active-dot";
}
