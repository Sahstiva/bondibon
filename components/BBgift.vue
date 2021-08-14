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

<style lang="scss" scoped>
@import "~assets/style/style.scss";
.gift {
  background-image: url('~assets/images/background_gifts.png');
  background-position: center top;
  background-repeat: no-repeat;
  width: 1920px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  @media (max-width: 1920px) {
    width: 100vw;
  }
  @media (max-width: 1023px) {
    background-image: url('~assets/mobile/background_gift_mobile.png');
    background-position: center top;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 480px;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-wrapper {
    width: 678px;
    margin: 115px 0 0 860px;
    @media (max-width: 1920px) {
      margin: 115px 0 0 calc(50vw - 100px);
    }
    @media (max-width: 1024px) {
      margin: 115px 0 0 300px;
    }
    @media (max-width: 1023px) {
      width: 100%;
      max-width: 480px;
      margin: 70px 0 0 0;
    }
  }
  &-button {
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 15px 0 0 0;
    width: 49px;
    height: 49px;

    &--text {
      @include font-Rotonda;
      font-size: 35px;
      text-align: right;
      color: #d2beae;
      margin: 0 0 15px 0;
      width: 361px;
      height: 80px;
      @media (max-width: 1024px) {
        width: 290px;
        height: 120px;
        margin: 0 0 5px 0;
      }
      @media (max-width: 1023px) {
        margin: 0;
        width: 325px;
        height: 80px;
        text-align: left;
      }
    }
    &--right {
      transform: rotate(270deg);
      &:hover {
        transform: rotate(270deg) scale(1.1) translateY(-5px);
        transition: all 0.3s ease-in-out;
      }
    }
    &--wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      position: absolute;
      top: 400px;
      left:  360px;
      @media (max-width: 1920px) {
        left:  calc(50vw - 500px);
      }
      @media (max-width: 1024px) {
        max-width: 270px;
        left:  calc(50vw - 530px);
      }
      @media (max-width: 1023px) {
        position: unset;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
        max-width: 480px;
        margin: 25px 0 0 0;
      }
    }
  }
}
</style>
