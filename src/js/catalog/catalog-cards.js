window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1");

  if (title.classList != "catalog-hero__title") {
    return;
  }

  if (title.classList == "catalog-hero__title") {
    const cards = document.querySelectorAll(".product"),
          navigationWrapper = document.querySelector(".catalog-hero__navigation");
    let counter = 0,
        firstLimit = null,
        page = 1;

        windowWidth()

    function windowWidth() {
      if (window.innerWidth <= 900) {
        firstLimit = 6;
        return firstLimit;
      } else {
        firstLimit = 9;
        return firstLimit;
      }
    }

    const breakpoint = window.matchMedia("(min-width: 900px)");
    const breakpoint2 = window.matchMedia("(max-width: 901px)");
    const breakpoint3 = window.matchMedia("(min-width: 902px)");
    const breakpoint4 = window.matchMedia("(max-width: 889px)");

    function handleTabletChange(e) {
      if (e.matches) {
        windowWidth();
        page=1;
        makingCards();
        const firstBtn = document.querySelector(".catalog-hero__navigation-btn");
        tabs(firstBtn);
      }
    }

    breakpoint.addListener(handleTabletChange)
    breakpoint2.addListener(handleTabletChange)
    breakpoint3.addListener(handleTabletChange)
    breakpoint4.addListener(handleTabletChange)
    handleTabletChange(breakpoint)
    handleTabletChange(breakpoint2)
    handleTabletChange(breakpoint3)
    handleTabletChange(breakpoint4)

    function makingCards() {
      navigationWrapper.innerHTML = ''
      counter = 0;
      for (let card of cards) {
        card.dataset.page = page;
        counter++;
        if (counter == `${firstLimit}`*`${page}`) {
          page++
        }
        if (counter == `${firstLimit}` * `${page}` - `${firstLimit}` + 1) {
          let batton = document.createElement('button');
          batton.classList = "catalog-hero__navigation-btn btn-reset";
          batton.textContent = `${page}`;
          navigationWrapper.append(batton);
          batton.addEventListener("click", () => {
            tabs(batton)
          })
        }
      }
    }

    function tabs(batton) {
      const btns = document.querySelectorAll(".catalog-hero__navigation-btn");
      for (let btn of btns) {
        btn.classList.remove("catalog-hero__navigation--active");
        btn.removeAttribute("disabled", "disabled");
      }
      batton.classList.add("catalog-hero__navigation--active");
      batton.setAttribute("disabled", "disabled");
      for (let card of cards) {
        card.classList.remove("product--active")
      }
      for (let card of cards) {
        if (card.dataset.page == batton.textContent) {
          card.classList.add("product--active")
        }
      }
    }
  }
})
