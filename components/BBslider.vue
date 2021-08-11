<template>
  <section class="slider" id="sliderpage">
    <div class="slider-wrapper">
      <swiper class="swiper" :options="swiperOption" ref="swiperMain">
        <swiper-slide><img src="~/assets/images/slider_tablegames.png" alt="Настольные игры"></swiper-slide>
        <swiper-slide><img src="~/assets/images/slider_mosaic.png" alt="Пазлы и мозаики"></swiper-slide>
        <swiper-slide><img src="~/assets/images/slider_roadgames.png" alt="Игры в дорогу"></swiper-slide>
      </swiper>
    </div>
    <div class="slider-button--wrapper">
      <button class="slider-button slider-button--right" @click="goNextMain">
      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#CA042C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>
        <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>
      </svg>
      </button>
      <button class="slider-button" @click="$emit('goToNextPage', 'BBknow')">
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

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";

export default {
  name: "BBslider",
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
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
    goNextMain() {
      console.log('goNext');
      this.$refs.swiperMain.$swiper.slideNext();
    },
    goNextGift() {
      console.log('goNext');
      this.$refs.swiperGift.$swiper.slideNext();
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  background-image: url('~assets/images/background_slider.png');
  background-position: 50px top;
  background-repeat: no-repeat;
  width: 1920px;
  //margin-top: -100px;
  //z-index: -1;
  opacity: 1;
  transform: translateZ(0);
  perspective: 1000px;
  backface-visibility: hidden;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 1920px) {
    background-position: center top;
    width: 100vw;
  }
  @media (max-width: 1024px) {
    background-position: center top;
  }
  &-wrapper {
    width: 960px;
    margin: 175px 10px 0 0;
    @media (max-width: 1920px) {
      margin: 175px 100px 0 0;
    }
  }
  &-button {
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
    &--right {
      transform: rotate(270deg);
    }
    &--wrapper {
      display: flex;
      flex-direction: row;
      width: 150px;
      justify-content: space-between;
      position: absolute;
      bottom: 50px;
      left: calc(50vw + 100px);
    }
  }
}
</style>