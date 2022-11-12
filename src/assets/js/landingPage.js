'use strict';

const heroImage = document.querySelector('.img');
const mobileImage = './src/assets/mobileSizeimage.webp';
const largeImage = './src/assets/device.webp';

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