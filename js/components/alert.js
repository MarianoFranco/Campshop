export function alert(cssClass, errorMessage) {
  document.querySelector('.alert').innerHTML = `<div class="alert ${cssClass}">
    ${errorMessage}
  </div>`;

  setTimeout(() => {
    document.querySelector('.alert').innerHTML = '';
  }, 3000);
}

export function alert2(cssClass, errorMessage) {
  document.querySelector(
    '.alert2',
  ).innerHTML = `<div class="alert position-relative ${cssClass}">
    ${errorMessage}
  </div>`;

  setTimeout(() => {
    document.querySelector('.alert2').innerHTML = '';
  }, 3000);
}
