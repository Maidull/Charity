let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function changeLanguage(language) {
  var elements = document.querySelectorAll('.lang');

  elements.forEach(function (element) {
    var content = element.getAttribute('data-' + language);
    element.textContent = content;
  });
}

var enLink = document.querySelector('.en-link img');
var jpLink = document.querySelector('.jp-link img');
var vnLink = document.querySelector('.vn-link img');

if (language === 'en') {
  enLink.src = `img/en.png`;
  jpLink.src = `img/jp.png`;
  vnLink.src = `img/vn.png`;
} else if (language === 'jp') {
  enLink.src = `img/jp.png`;
  jpLink.src = `img/en.png`;
  vnLink.src = `img/vn.png`;
} else if (language === 'vn') {
  enLink.src = `img/vn.png`;
  jpLink.src = `img/jp.png`;
  vnLink.src = `img/en.png`;
}

function changeLanguage(language) {
  var elements = document.querySelectorAll('.lang');

  elements.forEach(function (element) {
    var content = element.getAttribute('data-' + language);
    element.textContent = content;
  });



  var imgElement = document.querySelector('.en-link img');
  imgElement.src = 'img/' + language + '.png';

}


const image = document.querySelectorAll(".dropdown-content img");
image.forEach((el) => el.addEventListener('click', change));
function change(e) {
  const source = e.target.getAttribute('src');
  const featureImage = document.querySelector('.image');
  featureImage.setAttribute('src', source);
}


