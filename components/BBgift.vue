<template>
  <section
    id="giftpage"
    class="gift"
  >
    <div class="gift-wrapper">
      <swiper
        ref="swiperGift"
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide>
          <picture>
            <source
              srcset="~/assets/mobile/slider_cup_mobile.png"
              media="(max-width: 1023px)"
            >
            <source
              srcset="~/assets/images/slider_cup.png"
              media="(min-width: 1024px)"
            >
            <img
              src="~/assets/images/slider_cup.png"
              alt="Подарки своими руками"
            >
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              srcset="~/assets/mobile/slider_newyear_mobile.png"
              media="(max-width: 1023px)"
            >
            <source
              srcset="~/assets/images/slider_newyear.png"
              media="(min-width: 1024px)"
            >
            <img
              src="~/assets/images/slider_cup.png"
              alt="Новогодние игры"
            >
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              srcset="~/assets/mobile/slider_xmastree_mobile.png"
              media="(max-width: 1023px)"
            >
            <source
              srcset="~/assets/images/slider_xmastree.png"
              media="(min-width: 1024px)"
            >
            <img
              src="~/assets/images/slider_cup.png"
              alt="Креативные наборы"
            >
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <div class="gift-button--wrapper">
      <p class="gift-button--text">{{ slidesText[currentSlide <= slidesText.length ? currentSlide - 1 : currentSlide % slidesText.length - 1] }}</p>
      <button
        class="gift-button gift-button--right"
        @click="goNext"
      >
        <img src="~/assets/images/arrow_down.svg" alt="Следующий слайд">
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
        spaceBetween: 70,
        loop: true,
        breakpoints: {
          1025: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        },
      },
    };
  },
  mounted() {
    this.$refs.swiperGift.$swiper.on('slideChange',() => {
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
