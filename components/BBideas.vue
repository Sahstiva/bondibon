<template>
  <section class="ideas">
    <BBheader @goWhereToBuy="$emit('goToNextPage', 'map')" class="ideas-header"/>
    <h2 class="visually-hidden">{{ links.title }}</h2>
    <div class="ideas-wrapper">
      <picture>
        <source
            data-srcset="~/assets/images/ideas_girl.png?webp"
            type="image/webp"
            media="(min-width: 1024px)"
        >
        <source
            data-srcset="~/assets/images/ideas_girl.png"
            media="(min-width: 1024px)"
        >
        <source
            data-srcset="~/assets/images/ideas_girl_320.png?webp"
            type="image/webp"
            media="(max-width: 479px)"
        >
        <source
            data-srcset="~/assets/images/ideas_girl_320.png"
            media="(max-width: 479px)"
        >
        <source
            data-srcset="~/assets/images/ideas_girl_480.png?webp"
            type="image/webp"
            media="(max-width: 1023px)"
        >
        <source
            data-srcset="~/assets/images/ideas_girl_480.png"
            media="(max-width: 1023px)"
        >
        <img
            data-src="~/assets/images/ideas_girl.png?webp"
            type="image/webp"
            class="lazyload"
            loading="lazy"
            alt="Подарки своими руками"
        >
      </picture>
      <div class="ideas-button__wrapper">
        <p class="ideas-button__text">
          {{ links.title }}
        </p>
      </div>
    </div>
    <div class="ideas-cards">
      <div v-for="section in links.sections"
           :key="section.name"
           class="ideas-cards__card"
           :class="`ideas-cards__${section.name}`"
      >
        <template v-if="section.name !== 'text'">
          <button
              v-for="item in section.sections"
              :key="item.id"
              class="ideas-cards__image"
              v-on:click="showModal(item)">
            <picture>
              <source
                :data-srcset="require(`~/assets/images/${item.image}?webp`)"
                type="image/webp"/>
              <source
                  :data-srcset="require(`~/assets/images/${item.image}`)"/>
              <img
                :data-src="require(`~/assets/images/${item.image}?webp`)"
                type="image/webp"
                class="lazyload"
                :alt="item.text"
                loading="lazy"/>
            </picture>
          </button>
          <div class="ideas-cards__plate">
            <p class="ideas-cards__title">{{ section.text }}</p>
          </div>
        </template>
        <p v-else v-html="section.text" />
      </div>
    </div>
    <button
        class="ideas-down"
        @click="$emit('goToNextPage', 'links')"
    >
      <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Следующая страница">
    </button>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';
import BBheader from './BBheader.vue';

const PAGE_NAME = 'ideas';

export default {
  name: `BB${PAGE_NAME}`,
  props: ['links', 'show'],
  components: {
    BBheader,
  },
  data() {
    return {

    };
  },
  mounted() {
    if (this.show) {
      Object.values(this.links.sections).forEach((section) => {
        if ('sections' in section) {
          const showSection = Object.values(section.sections).find((item) => item.id === this.show);
          if (showSection) {
            this.showModal(showSection);
          }
        }
      });
    }
  },
  methods: {
    showModal(section) {
      this.$modal.show(
        modal,
        {
          title: section.text,
          image: section.image,
          links: section.links,
          id: section.id,
          page: PAGE_NAME,
        },
        {
          height: 'auto',
          adaptive: true,
        },
        {
          'before-close': this.OnModalClose,
        },
      );
    },
    OnModalClose() {
      window.history.pushState(
        null,
        document.title, `${window.location.pathname}?page=${PAGE_NAME}`,
      );
    },
  },
};
</script>
