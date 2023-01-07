window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1");

  if (title.classList != "catalog-hero__title") {
    return;
  }

  if (title.classList == "catalog-hero__title") {

    function makeCard(param, group) {
      const wrapper = document.querySelector(".catalog-hero__btn-wrapper");
      const input = param.querySelector(".custom-checkbox__field");
      const content = param.querySelector(".custom-checkbox__content");
      const card = document.createElement('div');
      const text = document.createElement('span');
      const btn = document.createElement('button');
      card.classList = `catalog-hero__${group}-card`;
      text.classList = "catalog-hero__text-card";
      text.textContent = content.textContent;
      btn.classList = "catalog-hero__exit-btn btn-reset";
      card.append(text);
      card.append(btn);
      input.addEventListener("change", function() {
        if (this.checked) {
          wrapper.append(card);
          card.style.opacity = 1;
        } else {
          wrapper.removeChild(card)
        }
      })

      btn.addEventListener("click", function() {
        fadeOut(card);
        input.checked = false;
      })

      let fadeOut = function (element) {
        let timer;
        let op = 1;
        if (!timer) {
          timer = setInterval(function () {
            if (op<= 0.1) {
                clearInterval(timer);
                timer = null;
                element.style.opacity = 0;
                wrapper.removeChild(card);
            }
            element.style.opacity = op;
            op -= op * 0.1;
          }, 10);
        }
      };
    }

    const categoriesBlock = document.querySelector(".mobile-filters__category");
    const inputsBlock = document.querySelector(".mobile-filters__inputs");
    const salesBlock = document.querySelector(".mobile-filters__sales");
    const colorBlock = document.querySelector(".mobile-filters__colors");

    const categories = categoriesBlock.querySelectorAll('.custom-checkbox')
    for (let category of categories) {
      makeCard(category, "category")
    }

    const sales = salesBlock.querySelectorAll('.custom-checkbox')
    for (let sale of sales) {
      makeCard(sale, "sale")
    }

    const colors = colorBlock.querySelectorAll('.custom-checkbox')
    for (let color of colors) {
      makeCard(color, "color")
    }

    const inputFirst = inputsBlock.querySelector('.mobile-filters__field_first')
    const inputSecond = inputsBlock.querySelector('.mobile-filters__field_second')

    function TakeInputValue(inputNumber) {
      const wrapper = document.querySelector(".catalog-hero__btn-wrapper");
      const card = document.createElement('div');
      const text1 = document.createElement('span');
      const text2 = document.createElement('span');
      const btn = document.createElement('button');
      card.classList = `catalog-hero__el-card`;
      text1.classList = "catalog-hero__text-card";
      text2.classList = "catalog-hero__text-card";
      btn.classList = "catalog-hero__exit-btn btn-reset";
      card.append(text1);
      card.append(text2);
      card.append(btn);

      let fadeOut = function (element) {
        let timer;
        let op = 1;
        if (!timer) {
          timer = setInterval(function () {
            if (op<= 0.1) {
                clearInterval(timer);
                timer = null;
                element.style.opacity = 0;
                wrapper.removeChild(card);
            }
            element.style.opacity = op;
            op -= op * 0.1;
          }, 10);
        }
      };

      btn.addEventListener("click", function() {
        fadeOut(card);
        text2.innerText = '';
      })

      inputNumber.addEventListener("input", function() {
        if (text2.innerText != '') {
          text2.innerText = inputNumber.value;
        } else {
          if (inputNumber == inputFirst) {
            text1.innerText = 'oт'
          } else {
            text1.innerText = 'до'
          }
          text2.innerText = inputNumber.value;
          wrapper.append(card);
          card.style.opacity = 1;
        }
      })
    }

    TakeInputValue(inputFirst)
    TakeInputValue(inputSecond)

  }
})
