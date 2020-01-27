let slideIndex = 1;
let backColor = document.getElementsByTagName("html");
let textColor = document.getElementsByClassName("text");
showSlides(slideIndex);

backColor[0].style.backgroundColor = "#0a46fb";
textColor[0].style.color = "#00ff4f";

function colors(n) {
  if (n == 1 || n == 6) {
    backColor[0].style.backgroundColor = "#0a46fb";
    textColor[0].style.color = "#00ff4f";
  }
  if (n == 2) {
    backColor[0].style.backgroundColor = "#0fd0fa";
    textColor[1].style.color = "#1523df";
  }
  if (n == 3) {
    backColor[0].style.backgroundColor = "#00ffd9";
    textColor[2].style.color = "#bebaec";
  }
  if (n == 4) {
    backColor[0].style.backgroundColor = "#0d00ff";
    textColor[3].style.color = "#e66296";
  }
  if (n == 5 || n == 0) {
    backColor[0].style.backgroundColor = "#ad00ff";
    textColor[4].style.color = "#32a3e9";
  }
}

function plusSlides(n) {
  let g = slideIndex += n;
  showSlides(g);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  colors(n);
  let i;
  let slides = document.getElementsByClassName("slider_container");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
