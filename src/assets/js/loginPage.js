'use strict';

const forms = document.querySelectorAll('form');
const form = document.querySelector('form');
const topText = document.querySelector('.top-text');
const botText = document.querySelector('.bot-text');
const textLink = document.querySelector('.text-link');

const signInTopMsg = `Enter username and password to sign in`;
const signInBotMSg = `Don't have an account?`;
const signInLinkText = `Create Account`;
const signUpTopMsg = `Create your Bankist account`;
const signUpBotMsg = `Already have an account?`;
const signUpLinkText = `Sign In`;

forms.forEach((form) => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  })

  textLink.addEventListener('click', function () {

    // Change the form input fields
    form.classList.contains('hidden') ? form.classList.remove('hidden') : form.classList.add('hidden');
    form.classList.contains('active') ? form.classList.remove('active') : form.classList.add('active');

    // Change the display text
    if (form.classList.contains('signin-form') && form.classList.contains('active')) {
      changeText(signInTopMsg, signInBotMSg, signInLinkText)
    } else if (form.classList.contains('signup-form') && form.classList.contains('active')) {
      changeText(signUpTopMsg, signUpBotMsg, signUpLinkText);
    }
  });
});

function changeText(top, bot, link) {
  topText.textContent = top;
  botText.textContent = bot;
  textLink.text = link;
}
