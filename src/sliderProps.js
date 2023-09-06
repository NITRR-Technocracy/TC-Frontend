import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/effect-creative";
SwiperCore.use([
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
]);

const roadmapStep = (mySwiper, step, widthParts) => {
  var breakpoint = parseInt(mySwiper.width);
  var viewBox;
  switch (breakpoint) {
    case 1400:
      viewBox = 2;
      break;
    case 1200:
      viewBox = 2;
      break;
    case 1040:
      viewBox = 2;
      break;
    case 768:
      viewBox = 2;
      break;
    case 0:
      viewBox = 1;
      break;
    default:
      viewBox = 2;
  }

  // step.style.width = (mySwiper.activeIndex + viewBox) * widthParts + "%";
};
export const roadMapProps = {
  loop: false,
  speed: 10000,
  autoplay: false, 
  slidesPerView: 2,
  spaceBetween: 40,
  direction: "horizontal",
  loopAdditionalSlides: 0,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 2,
    },
  },

  onSwiper: function (mySwiper) {
    var slidersCount = mySwiper.params.loop
      ? mySwiper.slides.length - 2
      : mySwiper.slides.length;
    var widthParts = 100 / slidersCount;
    var step = document.querySelector(".fn_cs_roadmap .step_in");
    roadmapStep(mySwiper, step, widthParts);
  },

  onSlideChange: function (mySwiper) {
    var slidersCount = mySwiper.params.loop
      ? mySwiper.slides.length - 2
      : mySwiper.slides.length;
    var widthParts = 100 / slidersCount;
    var step = document.querySelector(".fn_cs_roadmap .step_in");
    roadmapStep(mySwiper, step, widthParts);
  },
};

// export const Hero4Slider = {
//   loop: true,
//   speed: 1000,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   slidesPerView: "2",
//   spaceBetween: 50,
//   direction: "horizontal",
//   loopAdditionalSlides: 0,
//   watchSlidesProgress: true,
// };

// export const hero6Slider = {
//   loop: true,
//   speed: 1500,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".next",
//     prevEl: ".prev",
//   },
//   slidesPerView: 1,
//   loopAdditionalSlides: 0,
//   watchSlidesProgress: true,
// };