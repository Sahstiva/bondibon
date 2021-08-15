<template>
  <section
    id="sliderpage"
    class="slider"
  >
    <div class="slider-wrapper">
      <swiper
        ref="swiperMain"
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide>
          <picture>
            <source
              srcset="~/assets/images/slider_tablegames.png"
              media="(min-width: 1024px)"
            >
            <source
              srcset="~/assets/mobile/slider_tablegames_mobile.png"
              media="(max-width: 1023px)"
            >
            <img
                width="678"
                height="575"
              src="~/assets/images/slider_tablegames.png"
              alt="Настольные игры"
            >
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              srcset="~/assets/images/slider_mosaic.png"
              media="(min-width: 1024px)"
            >
            <source
              srcset="~/assets/mobile/slider_mosaic_mobile.png"
              media="(max-width: 1023px)"
            >
            <img
                width="678"
                height="575"
              src="~/assets/images/slider_mosaic.png"
              alt="Пазлы и мозаики"
            >
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              srcset="~/assets/images/slider_roadgames.png"
              media="(min-width: 1024px)"
            >
            <source
              srcset="~/assets/mobile/slider_roadgames_mobile.png"
              media="(max-width: 1023px)"
            >
            <img
                width="678"
                height="575"
              src="~/assets/images/slider_roadgames.png"
              alt="Игры в дорогу"
            >
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slider-button__wrapper">
      <p class="slider-button__text">
        {{
          slidesText[
              currentSlide <= slidesText.length
                  ? currentSlide - 1
                  : currentSlide % slidesText.length - 1
              ]
        }}
      </p>
      <button
        class="slider-button slider-button__right"
        @click="goNext"
      >
        <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Следующий слайд">
      </button>
    </div>
  </section>
</template>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'BBslider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentSlide: 1,
      slidesText: ['Настольные игры', 'Пазлы и мозаики', 'Игры в дорогу'],
      swiperOption: {
        mousewheel: false,
        slidesPerView: 1,
        spaceBetween: 2,
        loop: true,
      },
    };
  },
  mounted() {
    this.$refs.swiperMain.$swiper.on('slideChange', () => {
      this.currentSlide = this.$refs.swiperMain.$swiper.activeIndex;
    });
  },
  methods: {
    goNext() {
      this.$refs.swiperMain.$swiper.slideNext();
      this.currentSlide = this.$refs.swiperMain.$swiper.activeIndex;
    },
  },
};
</script>
