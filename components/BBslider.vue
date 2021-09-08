<template>
  <section
    id="sliderpage"
    class="slider"
  >
    <h2 class="visually-hidden">Полезные игры</h2>
    <div class="slider-wrapper">
      <swiper
        ref="swiperMain"
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide>
          <picture class="slider-img">
            <source
              data-srcset="~/assets/images/slider_tablegames.png?webp" type="image/webp"
              media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/mobile/slider_tablegames_se.png?webp" type="image/webp"
                media="(max-width: 374px)"
            >            <source
              data-srcset="~/assets/mobile/slider_tablegames_mobile.png?webp" type="image/webp"
              media="(max-width: 1023px)"
            >
            <img
                class="slider-img lazyload"
                data-src="~/assets/images/slider_tablegames.png"
                loading="lazy"
                width="678" height="575"
                alt="Настольные игры"
            >
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture class="slider-img">
            <source
              data-srcset="~/assets/images/slider_mosaic.png?webp" type="image/webp"
              media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/mobile/slider_mosaic_se.png?webp" type="image/webp"
                media="(max-width: 374px)"
            >
            <source
              data-srcset="~/assets/mobile/slider_mosaic_mobile.png?webp" type="image/webp"
              media="(max-width: 1023px)"
            >
            <img
                class="slider-img lazyload"
                data-src="~/assets/images/slider_mosaic.png"
                loading="lazy"
                width="678"
                height="575"
                alt="Пазлы и мозаики"
            >
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture class="slider-img">
            <source
              data-srcset="~/assets/images/slider_roadgames.png?webp" type="image/webp"
              media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/mobile/slider_roadgames_se.png?webp" type="image/webp"
                media="(max-width: 374px)"
            >
            <source
              data-srcset="~/assets/mobile/slider_roadgames_mobile.png?webp" type="image/webp"
              media="(max-width: 1023px)"
            >
            <img
                class="slider-img lazyload"
                data-src="~/assets/images/slider_roadgames.png"
                loading="lazy"
                width="678" height="575"
                alt="Игры в дорогу"
            >
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slider-button">
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
        class="slider-button__button slider-button__right"
        @click="goNext"
      >
        <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Следующий слайд">
      </button>
    </div>
    <transition name="fade">
      <div v-show="showDown" class="slider-down">
        <button
            class="slider-down__button"
            @click="$emit('goToNextPage', 'BBknow')"
        >
          <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
        </button>
      </div>
    </transition>
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
      showDown: true,
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
    handleScroll() {
      // console.log(window.scrollY);
      if (window.scrollY > 1300) this.showDown = false;
      else this.showDown = true;
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
