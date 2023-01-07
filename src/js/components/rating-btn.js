window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1")
  if (title.classList != "hero__title") {
    return;
  }
  if (title.classList == "hero__title") {
    const ratingBtn = document.getElementById('rating-btn'),
    ratingBlock = document.getElementById('rating-block');

    const ratingCards = document.querySelectorAll('.rating__card-hidden');

    ratingBtn.addEventListener('click', () => {
      ratingBtn.classList.add('rating__btn-disabled');
      ratingBtn.setAttribute("disabled", "disabled");
      ratingCards.forEach ((card) => {
        if (card.classList !== 'product__card-active') {
          card.classList.add('product__card-active')
        };
      });
    });
  };
})



