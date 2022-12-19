'use strict';

/* ==============================================================================
                              DOM ELEMENTS
============================================================================== */
const modalWrapper = document.querySelector('.forModal');


const baseDialog = (header, msg, action) => {

  const modal = `
  <div class="bg-neutral-800 opacity-60 w-screen h-screen absolute" id="backdrop"></div>
    <div class="absolute flex justify-center w-full" id="modal">
      <div class="bg-shades-white text-center shadow-lg w-[90%] max-w-[350px] rounded py-8">
        <h2 class="text-2xl font-semibold text-neutral-600">${header}</h2>
        <p class="text-sm text-neutral-500 w-11/12 mx-auto my-3">
          ${msg}
        </p>
        <button class="w-10/12 bg-tertiary-500 text-shades-white rounded py-2 mt-6" id="modalBtn">
          ${action}
        </button>
      </div>
    </div>
  `;

  modalWrapper.insertAdjacentHTML('beforeend', modal);

  document.querySelector('#modalBtn').addEventListener('click', closeModal);
  document.querySelector('#backdrop').addEventListener('click', closeModal)

};

function closeModal() {
  const modalEl = document.querySelector('#modal');
  const backdrop = document.querySelector('#backdrop');

  const modalParent = modalEl.parentNode;
  const backdropParent = backdrop.parentNode;

  modalParent.removeChild(modalEl);
  backdropParent.removeChild(backdrop);
}

export default baseDialog;