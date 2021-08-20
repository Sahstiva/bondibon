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
                srcset="~/assets/images/slider_cup.png"
                media="(min-width: 1024px)"
            >
            <source
                srcset="~/assets/mobile/slider_cup_se.png"
                media="(max-width: 374px)"
            >
            <source
              srcset="~/assets/mobile/slider_cup_mobile.png"
              media="(max-width: 1023px)"
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
                srcset="~/assets/images/slider_newyear.png"
                media="(min-width: 1024px)"
            >
            <source
                srcset="~/assets/mobile/slider_newyear_se.png"
                media="(max-width: 374px)"
            >            <source
              srcset="~/assets/mobile/slider_newyear_mobile.png"
              media="(max-width: 1023px)"
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
              srcset="~/assets/images/slider_xmastree.png"
              media="(min-width: 1024px)"
            >
            <source
                srcset="~/assets/mobile/slider_xmastree_se.png"
                media="(max-width: 374px)"
            >
            <source
                srcset="~/assets/mobile/slider_xmastree_mobile.png"
                media="(max-width: 1023px)"
            >
            <img
              src="~/assets/images/slider_cup.png"
              alt="Креативные наборы"
            >
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <div class="gift-button__wrapper">
      <p class="gift-button__text">
        {{
          slidesText[
              currentSlide <= slidesText.length
              ? currentSlide - 1
              : currentSlide % slidesText.length - 1
              ]
        }}
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
          @click="$emit('goToNextPage', 'BBnewyear')"
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
