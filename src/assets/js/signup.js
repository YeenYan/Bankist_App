'use strict';

/* ==============================================================================
                              DOM ELEMENTS
============================================================================== */
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const signupUsername = document.querySelector('#signupUsername');
const signupPassword = document.querySelector('#signupPassword');
const signUpBtn = document.querySelector('#signupBtn');

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();

  window.alert('sucees')
});