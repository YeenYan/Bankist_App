'use strict';

const heroImage = document.querySelector('.img');
const mobileImage = './src/assets/mobileSizeimage.webp';
const largeImage = './src/assets/device.webp';

// Landing page DOM ELEMENT
const landingPageLoginBtn = document.querySelector('#landingPageloginBtn');
const landingPageCreateAccBtn = document.querySelector('#landingPageCreateAccBtn');

const maxMobileScreenSize = 600;

// dynamically changing image directory depending on screen size
(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;


  function displayWindowSize() {
    let myWidth = window.innerWidth;

    if (myWidth > maxMobileScreenSize) {
      heroImage.src = largeImage
    } else {
      heroImage.src = mobileImage
    }
  };


})();

landingPageLoginBtn.addEventListener('click', function () {
  console.log('hello');
});