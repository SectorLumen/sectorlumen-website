'use strict';
const companyDialog = document.querySelector('#company-dialog');
const companyButton = document.querySelector('#company-details');
companyButton.addEventListener('click', () => companyDialog.showModal());
companyDialog.querySelector('.close-icon').addEventListener('click', () => companyDialog.close());
companyDialog.addEventListener('click', event => {
  const bounds = companyDialog.getBoundingClientRect();
  if (event.target === companyDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) companyDialog.close();
});
companyDialog.addEventListener('close', () => companyButton.focus({preventScroll:true}));
