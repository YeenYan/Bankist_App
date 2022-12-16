'use strict';

import countries from '../js/countriesData.js';

/* ==============================================================================
                              DOM ELEMENTS
============================================================================== */
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const signupUsername = document.querySelector('#signupUsername');
const signupPassword = document.querySelector('#signupPassword');
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

  const getCurrency = countries.find(obj => obj.countryName === dropdownContainer.value);

  userAccount[owner] = `${firstname.value} ${lastname.value}`;
  userAccount[username] = signupUsername.value;
  userAccount[password] = signupPassword.value;
  userAccount[currency] = getCurrency.countryCurrency;
  userAccount[locale] = getCurrency.countryLocale;

  const now = new Date();
  userAccount.movemenstDates.push(now.toISOString());

  console.log(userAccount);
}


if (signUpBtn) {
  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    updateLS()
  });
}