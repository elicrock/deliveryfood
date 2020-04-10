const cartButton = document.getElementById('cart-button'),
      modal = document.querySelector('.modal'),
      closeBtn = modal.querySelector('.close'),
      cancelBtn = modal.querySelector('.button-cancel');

cartButton.addEventListener('click', function() {
  modal.classList.add('is-open');
});

modal.addEventListener('click', function(event) {
  target = event.target;
  if (target === closeBtn || target === modal || target === cancelBtn) {
    modal.classList.remove('is-open');
  }
});

new WOW().init();