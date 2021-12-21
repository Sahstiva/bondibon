<template>
  <section class="bb20gifts">
    <BBheader @goWhereToBuy="$emit('goToNextPage', 'map')" class="bb20gifts-header"/>
    <h2 class="visually-hidden">{{ links.title }}</h2>
    <div class="bb20gifts-wrapper">
        <p class="bb20gifts-wrapper__large">
          20 подарков
        </p>
      <p class="bb20gifts-wrapper__text">
        для детей разных возрастов
      </p>
    </div>
    <div class="bb20gifts-cards">
      <div v-for="section in links.sections"
           :key="section.name"
           class="bb20gifts-cards__card"
           :class="`bb20gifts-cards__${section.name}`"
      >
        <template v-if="section.name !== 'text'">
          <button
              v-for="item in section.sections"
              :key="item.id"
              class="bb20gifts-cards__image"
              :class="`bb20gifts-cards__${item.id}`"
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
          <div class="bb20gifts-cards__plate">
            <p class="bb20gifts-cards__title">{{ section.text }}</p>
          </div>
        </template>
        <p v-else v-html="section.text" />
      </div>
    </div>
    <button
        class="bb20gifts-down"
        @click="$emit('goToNextPage', 'gift')"
    >
      <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Следующая страница">
    </button>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';
import BBheader from './BBheader.vue';

const PAGE_NAME = '20gifts';

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
