<template>
  <section class="gift" id="giftpage">
    <div class="gift-wrapper">
      <swiper class="swiper" :options="swiperOption" ref="swiperGift">
        <swiper-slide>
          <picture>
            <source srcset="~/assets/mobile/slider_cup_mobile.png" media="(max-width: 1023px)" />
            <source srcset="~/assets/images/slider_cup.png" media="(min-width: 1024px)" />
            <img src="~/assets/images/slider_cup.png" alt="Настольные игры">
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source srcset="~/assets/mobile/slider_newyear_mobile.png" media="(max-width: 1023px)" />
            <source srcset="~/assets/images/slider_newyear.png" media="(min-width: 1024px)" />
            <img src="~/assets/images/slider_cup.png" alt="Пазлы и мозаики">
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source srcset="~/assets/mobile/slider_xmastree_mobile.png" media="(max-width: 1023px)" />
            <source srcset="~/assets/images/slider_xmastree.png" media="(min-width: 1024px)" />
            <img src="~/assets/images/slider_cup.png" alt="Игры в дорогу">
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <div class="gift-button--wrapper">
      <button class="gift-button gift-button--right" @click="goNext">
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#CA042C"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>
          <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: "BBgift",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        mousewheel: false,
        slidesPerView: 1,
        spaceBetween: 70,
        loop: true,
        breakpoints: {
          // when window width is >= 1025px
          1025: {
            slidesPerView: 1,
            spaceBetween: 50
          }
        }
      }
    }
  },
  methods: {
    goNext() {
      console.log('goNext');
      this.$refs.swiperGift.$swiper.slideNext();
    }
  }
}
</script>

<style lang="scss" scoped>
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
    background-position: center top;
  }
  @media (max-width: 1024px) {
    background-image: url('~assets/images/background_gifts_1024.png');
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
    width: 995px;
    margin: 120px 0 0 550px;
    @media (max-width: 1920px) {
      margin: 120px 0 0 500px;
    }
    @media (max-width: 1600px) {
      margin: 120px 0 0 340px;
    }
    @media (max-width: 1440px) {
      margin: 120px 0 0 260px;
    }
    @media (max-width: 1280px) {
      margin: 120px 0 0 180px;
    }
    @media (max-width: 1024px) {
      margin: 120px 0 0 calc(50vw - 995px/2 - 75px);
      width: 935px;
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
    z-index: 2;
    padding: 0;
    width: 49px;
    height: 49px;
    &--right {
      transform: rotate(270deg);
    }
    &--wrapper {
      display: flex;
      width:  49px;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 530px;
      left: calc(50vw - 60px);
      //z-index: 555;
      @media (max-width: 1440px) {
        margin: -170px 0 0 260px;
      }
      @media (max-width: 1920px) {
        top: 500px;
        left: calc(50vw - 240px);
      }
      @media (max-width: 1600px) {
        margin: -170px 0 0 340px;
      }
      @media (max-width: 1280px) {
        margin: -170px 0 0 180px;
      }
      @media (max-width: 1023px) {
        top: 745px;
        left: calc(50vw - 180px);
      }
      @media (max-width: 480px) {
        top: 745px;
        left: calc(50vw - 70px);
      }
    }
  }
}
</style>