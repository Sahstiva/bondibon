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
          <picture>
            <source
                data-srcset="~/assets/images/slider_tablegames.png?webp"
                type="image/webp"
                media="(min-width: 1024px)"
            />
            <source
                data-srcset="~/assets/images/slider_tablegames.png"
                media="(min-width: 1024px)"
            />
            <source
                data-srcset="~/assets/images/slider_tablegames.png?resize&size=320&format=webp"
                type="image/webp"
                media="(max-width: 479px)"
            />
            <source
                data-srcset="~/assets/images/slider_tablegames.png?resize&size=320"
                media="(max-width: 479px)"
            />
            <source
                data-srcset="~/assets/images/slider_tablegames.png?resize&size=480&format=webp"
                type="image/webp"
                media="(max-width: 1023px)"
            />
            <source
                data-srcset="~/assets/images/slider_tablegames.png?resize&size=480"
                media="(max-width: 1023px)"
            />
            <img
                data-src="~/assets/images/slider_tablegames.png"
                class="lazyload"
                loading="lazy"
                alt="Настольные игры"
            />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
                data-srcset="~/assets/images/slider_mosaic.png?webp"
                type="image/webp"
                media="(min-width: 1024px)"
            />
            <source
                data-srcset="~/assets/images/slider_mosaic.png"
                media="(min-width: 1024px)"
            />
            <source
                data-srcset="~/assets/images/slider_mosaic.png?resize&size=320&format=webp"
                type="image/webp"
                media="(max-width: 479px)"
            />
            <source
                data-srcset="~/assets/images/slider_mosaic.png?resize&size=320"
                media="(max-width: 479px)"
            />
            <source
                data-srcset="~/assets/images/slider_mosaic.png?resize&size=480&format=webp"
                type="image/webp"
                media="(max-width: 1023px)"
            />
            <source
                data-srcset="~/assets/images/slider_mosaic.png?resize&size=480"
                media="(max-width: 1023px)"
            />
            <img
                data-src="~/assets/images/slider_mosaic.png"
                class="lazyload"
                loading="lazy"
                alt="Пазлы и мозаики"
            />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
                data-srcset="~/assets/images/slider_roadgames.png?webp"
                type="image/webp"
                media="(min-width: 1024px)"
            />
            <source
                data-srcset="~/assets/images/slider_roadgames.png"
                media="(min-width: 1024px)"
            />
            <source
                data-srcset="~/assets/images/slider_roadgames.png?resize&size=320&format=webp"
                type="image/webp"
                media="(max-width: 479px)"
            />
            <source
                data-srcset="~/assets/images/slider_roadgames.png?resize&size=320"
                media="(max-width: 479px)"
            />
            <source
                data-srcset="~/assets/images/slider_roadgames.png?resize&size=480&format=webp"
                type="image/webp"
                media="(max-width: 1023px)"
            />
            <source
                data-srcset="~/assets/images/slider_roadgames.png?resize&size=480"
                media="(max-width: 1023px)"
            />
            <img
                data-src="~/assets/images/slider_roadgames.png"
                class="slider-img lazyload"
                loading="lazy"
                alt="Пазлы и мозаики"
            />
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slider-button">
      <p class="slider-button__text">
        {{ currentText }}
      </p>
      <button
        class="slider-button__button slider-button__right"
        @click="goNext"
      >
        <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Следующий слайд">
      </button>
    </div>
    <div class="slider-plate" :style="'background-color:' + currentColor"></div>
    <transition name="fade">
      <div v-show="showDown" class="slider-down">
        <button
            class="slider-down__button"
            @click="$emit('goToNextPage', 'know')"
        >
          <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
        </button>
      </div>
    </transition>
  </section>
</template>

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
      slidesColor: ['#f08fc8', '#ff811e', '#96bde9'],
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
