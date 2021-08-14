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
              src="~/assets/images/slider_roadgames.png"
              alt="Игры в дорогу"
            >
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slider-button--wrapper">
      <p class="slider-button--text">{{ slidesText[currentSlide <= slidesText.length ? currentSlide - 1 : currentSlide % slidesText.length - 1] }}</p>
      <button
        class="slider-button slider-button--right"
        @click="goNext"
      >
        <img src="~/assets/images/arrow_down.svg" alt="Следующий слайд">
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
    this.$refs.swiperMain.$swiper.on('slideChange',() => {
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

<style lang="scss" scoped>
@import "~assets/style/style.scss";
.slider {
  background-image: url('~assets/images/background_slider.png');
  background-position: center top;
  background-repeat: no-repeat;
  width: 1920px;
  height: 697px;
  margin: -1px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 1920px) {
    width: 100vw;
    background-position: center top;
  }
  @media (max-width: 1024px) {
    background-position: center top;
  }
  @media (max-width: 1023px) {
    background-image: none;
    width: 100%;
    max-width: 480px;
    min-height: 796px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-wrapper {
    width: 678px;
    margin: 115px 400px 0 0;
    @media (max-width: 1920px) {
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
    padding: 0;
    width: 49px;
    height: 49px;
    &--text {
      font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
      font-weight: bold;
      font-size: 35px;
      text-transform: uppercase;
      text-align: left;
      color: #d2beae;
      margin: 0 0 15px 0;
      width: 330px;
      @media (max-width: 1023px) {
        width: 255px;
        margin: 0;
      }
    }
    &--right {
      transform: rotate(-90deg);
      &:hover {
        transform: rotate(-90deg) scale(1.1) translateY(5px);
        transition: all 0.3s ease-in-out;
      }
    }
    &--wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: 400px;
      right:  360px;
      @media (max-width: 1920px) {
        right:  calc(50vw - 500px);
      }
      @media (max-width: 1023px) {
        position: unset;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        max-width: 480px;
        margin: 15px 0 0 0;
      }
    }
  }
}
</style>
