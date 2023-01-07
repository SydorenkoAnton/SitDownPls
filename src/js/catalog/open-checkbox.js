window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1");

  if (title.classList != "catalog-hero__title") {
    return;
  }

  if (title.classList == "catalog-hero__title") {
    const categoriesBlock = document.querySelector(".mobile-filters__category");
    const colorBlock = document.querySelector(".mobile-filters__colors");
    const btns = document.querySelectorAll(".mobile-filters__btn");

    function moreBlock (wrapper) {
      const btn = wrapper.querySelector(".mobile-filters__more-btn");
      const block = wrapper.querySelector(".mobile-filters__more-block");

      btn.addEventListener("click", ()=> {
        block.classList.add("mobile-filters__more-block--active")
        wrapper.removeChild(btn);
      })
    }

    moreBlock (categoriesBlock);
    moreBlock (colorBlock);

    for (let btn of btns) {
      btn.addEventListener("click", ()=> {
        btn.classList.toggle("mobile-filters__btn--active")
      })
    }

    const simplebars = document.querySelectorAll(".simplebar-content-wrapper");
    for (let simplebar of simplebars) {
      console.log(simplebar);
    }
  }
})
