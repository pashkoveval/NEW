function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }
});

// drop windows



document.getElementById('enter').onclick = function () {
  document.getElementById('enterblok').classList.add('on__dist');
}
document.getElementById('clouse').onclick = function () {
  document.getElementById('enterblok').classList.remove('on__dist');
}
// document.getElementById('road').onclick = function (map) {
//   document.getElementById('map').classList.add('on__dist2');
// }
// document.getElementById('exit').onclick = function (map) {
//   document.getElementById('map').classList.remove('on__dist2');
// }






// var controls = document.querySelectorAll('.controls');
// for (var i = 0; i < controls.length; i++) {
//   controls[i].style.display = 'inline-block';
// }

// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 15000);

// function nextSlide() {
//   goToSlide(currentSlide + 1);
// }

// function previousSlide() {
//   goToSlide(currentSlide - 1);
// }

// function goToSlide(n) {
//   slides[currentSlide].className = 'slide';
//   currentSlide = (n + slides.length) % slides.length;
//   slides[currentSlide].className = 'slide showing';
// }


// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow() {
//   pauseButton.innerHTML = '&#9658;'; // play character
//   playing = false;
//   clearInterval(slideInterval);
// }

// function playSlideshow() {
//   pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
//   playing = true;
//   slideInterval = setInterval(nextSlide, 2000);
// }

// pauseButton.onclick = function () {
//   if (playing) { pauseSlideshow(); }
//   else { playSlideshow(); }
// };

// var next = document.getElementById('next');
// var previous = document.getElementById('previous');

// next.onclick = function () {
//   pauseSlideshow();
//   nextSlide();
// };
// previous.onclick = function () {
//   pauseSlideshow();
//   previousSlide();
// };


// slider



// var btns = document.getElementsById('smp1', 'smp2', 'smp3');
// var par = document.getElementsById('smp1__h', 'smp2__h', 'smp3__h');
// btns[0].onclick = function () {
//   par[0].classList.add("appear");
// }
// btns[1].onclick = function () {
//   par[0].classList.remove("appear");
// }