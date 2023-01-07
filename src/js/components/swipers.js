import Swiper, { Navigation, Pagination, Thumbs, Autoplay} from 'swiper';

Swiper.use([Navigation, Pagination, Thumbs, Autoplay])

window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1");

  if (title.classList != "hero__title") {
    return;
  }

  if (title.classList == "hero__title") {
    const firstSubSlide = document.getElementsByClassName('swiper-slide-visible')
    console.log(firstSubSlide)
    let heroSlider = new Swiper(".hero__swiper", {

      loop: true,
      speed: 1000,
      spaceBetween: 12,
      watchSlidesProgress: true,

      pagination: {
        el: '.hero__swiper-pagination',
        clickable: true
      },

      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
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

    let offersSlider = new Swiper(".offers__swiper", {
      slidesPerView: 'auto',
      speed: 1000,
      spaceBetween: 12,
      watchSlidesProgress: true,
      freeMode: true,

      navigation: {
        nextEl: '.offers__right-navigation',
        prevEl: '.offers__left-navigation',
      },

      breakpoints: {
        310: {
          slidesPerGroup: 1,
          spaceBetween: 12,
        },

        681: {
          slidesPerGroup: 2,
          spaceBetween: 32,
        },

        901: {
          slidesPerGroup: 3,
          spaceBetween: 32,
        }
      },

      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
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

    let usefulSlider = new Swiper(".useful__swiper", {
      spaceBetween: 12,
      watchSlidesProgress: true,
      speed: 1000,

      navigation: {
        nextEl: '.useful__right-navigation',
        prevEl: '.useful__left-navigation',
      },

      breakpoints: {
        577: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 32,
        },

        901: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 32,
        },

        1025: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 32,
        },
      },

      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
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



