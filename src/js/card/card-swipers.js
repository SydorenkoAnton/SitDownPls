import Swiper, { Navigation, Pagination, Thumbs, Autoplay} from 'swiper';

Swiper.use([Navigation, Pagination, Thumbs, Autoplay])

window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1");

  if (title.classList != "card-hero__title") {
    return;
  }

  if (title.classList == "card-hero__title") {

    const subSwiper = new Swiper(".card-hero__sub-swaiper", {

      spaceBetween: 38,
      loop: true,
      speed: 1000,
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      direction: 'horizontal',

      breakpoints: {

        901: {
          direction: 'horizontal',
          slidesPerView: 'auto',
          spaceBetween: 38,
        },

        577: {
          direction: 'vertical',
          slidesPerView: 4,
          spaceBetween: 5,
        },
      },
    });

    const mainSwiper = new Swiper('.card-hero__main-swaiper', {
      watchSlidesProgress: true,
      speed: 1000,
      allowTouchMove: false,

      thumbs: {
        swiper: subSwiper,
      },


      slideVisibleClass: 'ui-slide-visible',

      on: {
        init() {
          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        },

        slideChange() {
          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        },
      },
    });

    const swiper = new Swiper('.card-hero__card-swiper', {
      spaceBetween: 16,
      slidesPerView: 2,
      watchSlidesProgress: true,
      speed: 1000,

      navigation: {
        nextEl: '.card-hero__right-navigation',
        prevEl: '.card-hero__left-navigation',
      },

      breakpoints: {
        1300: {
          slidesPerView: 4,
          spaceBetween: 32,
        },

        831: {
          slidesPerView: 3,
          spaceBetween: 32,
        },

        577: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },


      slideVisibleClass: 'ui-slide-visible',

      on: {
        init() {
          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        },

        slideChange() {
          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        },
      },
    })

    const modalSubslider = new Swiper('.slider-modal__subswaiper', {
      spaceBetween: 78,
      loop: true,
      speed: 1000,
      watchSlidesProgress: true,
      slidesPerView: 'auto',

      navigation: {
        nextEl: '.slider-modal__right-navigation',
        prevEl: '.slider-modal__left-navigation',
      },

      breakpoints: {
        1025: {
          spaceBetween: 78,
          slidesPerView: 'auto',
        },

        570: {
          spaceBetween: 75,
          slidesPerView: 'auto',
        },

        310: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
      },


      slideVisibleClass: 'ui-slide-visible',

      on: {
        init() {
          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        },

        slideChange() {
          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        },
      },
    });

    const modalHeroSwiper = new Swiper('.slider-modal__swaiper', {
      watchSlidesProgress: true,
      speed: 1000,
      allowTouchMove: false,
      slidesPerView: 1,
      thumbs: {
        swiper: modalSubslider,
      },


      slideVisibleClass: 'ui-slide-visible',

      on: {
        init() {
          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        },

        slideChange() {
          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        },
      },
    });
  }
})

function checkingVisibilitySlides(elements, visibilityClass) {
  elements.forEach((slide) => {
    const focusableElements = slide.querySelectorAll(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
    );

    if (!slide.classList.contains(visibilityClass)) {
      slide.setAttribute('tabindex', '-1');

      [...focusableElements].forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    } else {
      slide.removeAttribute('tabindex');

      [...focusableElements].forEach((element) => {
        element.removeAttribute('tabindex');
      });
    }
  });
}


