'use strict';

import accounts from '../js/app.js'

/* ==============================================================================
                              DOM ELEMENTS
============================================================================== */
// LOGIN ELEMENTS
const loginUsername = document.querySelector('#loginUsername');
const loginPassword = document.querySelector('#loginPassword');
const signInBtn = document.querySelector('#signInBtn');

let currentAccount;

if (signInBtn) {
  signInBtn.addEventListener('click', (e) => {
    e.preventDefault();

    currentAccount = accounts.find((acc) => acc.username === loginUsername.value);

    // this read like this => currentAccount && currentAccount.pin
    // using optional chaining

    if (currentAccount?.password === Number(loginPassword.value)) {
      console.log(currentAccount);
    } else {
      console.log('invalid')
    }
  });
}