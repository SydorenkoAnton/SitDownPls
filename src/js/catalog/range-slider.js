import noUiSlider from 'nouislider';

window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1");

  if (title.classList != "catalog-hero__title") {
    return;
  }

  if (title.classList == "catalog-hero__title") {

    const rangeBox = document.querySelector('.range-box');
    const rangeDropdown = document.querySelector('.mobile-filters__inputs');

    if (rangeBox) {
      const rangeSlider = rangeBox.querySelector('.range-box__slider');
      const numberTypeFieldFirst = rangeBox.querySelector('.range-box__field_first');
      const numberTypeFieldSecond = rangeBox.querySelector('.range-box__field_second');

      const allFields = [
        numberTypeFieldFirst,
        numberTypeFieldSecond,
      ];

      noUiSlider.create(rangeSlider, {
        start: [
          2000,
          150000,
        ],
        connect: true,
        step: 1,
        range: {
          min: 0,
          max: 180000,
        },
      });

      rangeSlider.noUiSlider.on('update', (values, handle) => {
        allFields[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i, value) => {
        const array = [null, null];
        array[i] = value;
        rangeSlider.noUiSlider.set(array);
      };

      allFields.forEach((el, index) => {
        el.addEventListener('change', (e) => {
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    }

    if (rangeDropdown) {
      const rangeSlider2 = rangeDropdown.querySelector('.mobile-filters__slider');
      const numberTypeFieldFirst = rangeDropdown.querySelector('.mobile-filters__field_first');
      const numberTypeFieldSecond = rangeDropdown.querySelector('.mobile-filters__field_second');

      const allFields = [
        numberTypeFieldFirst,
        numberTypeFieldSecond,
      ];

      noUiSlider.create(rangeSlider2, {
        start: [
          2000,
          150000,
        ],
        connect: true,
        step: 1,
        range: {
          min: 0,
          max: 180000,
        },
      });

      rangeSlider2.noUiSlider.on('update', (values, handle) => {
        allFields[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i, value) => {
        const array = [null, null];
        array[i] = value;
        rangeSlider2.noUiSlider.set(array);
      };

      allFields.forEach((el, index) => {
        el.addEventListener('change', (e) => {
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    }
  }
})
