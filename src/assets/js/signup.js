'use strict';

import countries from '../js/countriesData.js';
import baseDialog from './dialogBox.js';

/* ==============================================================================
                              DOM ELEMENTS
============================================================================== */
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const signupUsername = document.querySelector('#signupUsername');
const signupPassword = document.querySelector('#signupPassword');
const signupConfirmPassword = document.querySelector('#signupConfirmPassword');
const signUpBtn = document.querySelector('#signupBtn');
const dropdownContainer = document.querySelector('.dropdown');

const userAccount = {
  movements: [1000],
  interestRate: 1.2,
  movemenstDates: [],
};

/* ==============================================================================
                    DISPLAYING Countries to dropdown
============================================================================== */

const displayCountries = (country) => {
  dropdownContainer.innerHTML = `
    <option class="inputBoxOption" value="" disabled selected hidden>
      Choose Country
    </option>`;

  // Get all country names in countries object
  const countryNames = country.map(cnty => cnty.countryName);

  // sort the array in descending order
  const sortedCountries = countryNames.slice().sort((a, b) => b.localeCompare(a));

  // creates the dropwdown option to HTML DOM
  sortedCountries.forEach(function (e) {
    const countryList = `
      <option value="${e}">${e}</option>
    `;
    dropdownContainer.insertAdjacentHTML('afterbegin', countryList);
  });

};

displayCountries(countries);

/* ==============================================================================
                                USER DATA
============================================================================== */

function updateLS() {
  const owner = 'owner';
  const username = 'username';
  const password = 'password';
  const locale = 'locale';
  const currency = 'currency';
  const now = new Date();
  const getCurrencyLocale = countries.find(obj => obj.countryName === dropdownContainer.value);

  firstname.value ? firstname.classList.remove('inputError') : firstname.classList.add('inputError');
  lastname.value ? lastname.classList.remove('inputError') : lastname.classList.add('inputError');
  signupUsername.value ? signupUsername.classList.remove('inputError') : signupUsername.classList.add('inputError');
  dropdownContainer.value ? dropdownContainer.classList.remove('inputError') : dropdownContainer.classList.add('inputError');
  signupPassword.value ? signupPassword.classList.remove('inputError') : signupPassword.classList.add('inputError');


  if (signupPassword.value && signupConfirmPassword.value && signupPassword.value === signupConfirmPassword.value) {
    if (firstname.value && lastname.value && signupUsername.value && dropdownContainer.value) {
      userAccount[owner] = `${firstname.value.trim()} ${lastname.value.trim()}`;
      userAccount[username] = signupUsername.value.trim();
      userAccount[password] = signupPassword.value.trim();
      userAccount[currency] = getCurrencyLocale.countryCurrency;
      userAccount[locale] = getCurrencyLocale.countryLocale;
      userAccount.movemenstDates.push(now.toISOString());

      console.log(userAccount);
      baseDialog('Success', 'Added Successfully', 'Okay');
    }
    signupConfirmPassword.classList.remove('inputError');
  } else {
    signupConfirmPassword.classList.add('inputError');
  }
};


if (signUpBtn) {
  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    updateLS();
  });
};

//     baseDialog('Success', 'Added Successfully', 'Okay');