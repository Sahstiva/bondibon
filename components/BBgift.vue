<template>
  <section
    id="giftpage"
    class="gift"
  >
    <h2 class="visually-hidden">Подарки своими руками</h2>
    <div class="gift-wrapper">
      <swiper
        ref="swiperGift"
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide>
          <picture>
            <source
                data-srcset="~/assets/images/slider_cup.png?webp"
                type="image/webp"
                media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/images/slider_cup.png"
                media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/images/slider_cup_320.png?webp"
                type="image/webp"
                media="(max-width: 479px)"
            >
            <source
                data-srcset="~/assets/images/slider_cup_320.png"
                media="(max-width: 479px)"
            >
            <source
              data-srcset="~/assets/images/slider_cup_480.png?webp"
              type="image/webp"
              media="(max-width: 1023px)"
            >
            <source
                data-srcset="~/assets/images/slider_cup_480.png"
                media="(max-width: 1023px)"
            >
            <img
              data-src="~/assets/images/slider_cup.png?webp"
              type="image/webp"
              class="lazyload"
              loading="lazy"
              alt="Подарки своими руками"
            >
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
                data-srcset="~/assets/images/slider_newyear.png?webp"
                type="image/webp"
                media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/images/slider_newyear.png"
                media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/images/slider_newyear_320.png?webp"
                type="image/webp"
                media="(max-width: 479px)"
            >
            <source
                data-srcset="~/assets/images/slider_newyear_320.png"
                media="(max-width: 479px)"
            >
            <source
              data-srcset="~/assets/images/slider_newyear_480.png?webp"
              type="image/webp"
              media="(max-width: 1023px)"
            >
            <source
                data-srcset="~/assets/images/slider_newyear_480.png"
                media="(max-width: 1023px)"
            >
            <img
                class="lazyload"
                data-src="~/assets/images/slider_newyear.png?webp"
                type="image/webp"
                loading="lazy"
                alt="Новогодние игры"
            >
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              data-srcset="~/assets/images/slider_xmastree.png?webp"
              type="image/webp"
              media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/images/slider_xmastree.png"
                media="(min-width: 1024px)"
            >
            <source
                data-srcset="~/assets/images/slider_xmastree_320.png?webp"
                type="image/webp"
                media="(max-width: 479px)"
            >
            <source
                data-srcset="~/assets/images/slider_xmastree_320.png?"
                media="(max-width: 479px)"
            >
            <source
                data-srcset="~/assets/images/slider_xmastree_480.png?webp"
                type="image/webp"
                media="(max-width: 1023px)"
            >
            <source
                data-srcset="~/assets/images/slider_xmastree_480.png"
                media="(max-width: 1023px)"
            >
            <img
              data-src="~/assets/images/slider_xmastree.png?webp"
              type="image/webp"
              loading="lazy"
              class="lazyload"
              alt="Креативные наборы"
            >
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <div class="gift-button__wrapper">
      <p class="gift-button__text">
        {{ currentText }}
      </p>
      <button
        class="gift-button gift-button__right"
        @click="goNext"
      >
        <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Следующий слайд">
      </button>
    </div>
    <div class="gift-down">
      <button
          class="gift-down__button"
          @click="$emit('goToNextPage', 'newyear')"
      >
        <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'BBgift',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentSlide: 1,
      slidesText: ['подарки своими руками', 'новогодние игры', 'креативные наборы'],
      swiperOption: {
        mousewheel: false,
        slidesPerView: 1,
        spaceBetween: 2,
        loop: true,
      },
    };
  },
  computed: {
    currentText() {
      return this.slidesText[
        this.currentSlide <= this.slidesText.length
          ? this.currentSlide - 1
          : this.currentSlide % (this.slidesText.length - 1)
      ];
    },
    currentColor() {
      return this.slidesColor[
        this.currentSlide <= this.slidesColor.length
          ? this.currentSlide - 1
          : this.currentSlide % (this.slidesColor.length - 1)
      ];
    },
  },
  mounted() {
    this.$refs.swiperGift.$swiper.on('slideChange', () => {
      this.currentSlide = this.$refs.swiperGift.$swiper.activeIndex;
    });
  },
  methods: {
    goNext() {
      this.$refs.swiperGift.$swiper.slideNext();
    },
  },
};
</script>
