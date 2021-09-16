<template>
  <section class="knowledge">
    <h2 class="visually-hidden">{{ links.title }}</h2>
    <div class="knowledge-title">
      <p class="knowledge-title__title">
        знания сила!
      </p>
      <p class="knowledge-title__subtitle">
        познавательные и обучающие игры<br>для развития и подготовки к школьным заданиям
      </p>
    </div>
    <div class="knowledge-grid">
      <button
          v-for="(section, index) in links.sections"
          @click="showModal(section)"
          class="knowledge-grid__item"
          :key="index"
      >
        <img
            :src="require(`~/assets/images/${section.image}?webp`)"
            width="170"
            height="170"
            :alt="section.text"
            class="knowledge-grid__img"
        >
        <p class="knowledge-grid__text" v-html="section.text"/>
      </button>
    </div>
    <div class="knowledge-button__wrapper">
      <button
        class="knowledge-button"
        @click="$emit('goToNextPage', 'science')"
      >
        <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';

const PAGE_NAME = 'know';

export default {
  name: `BB${PAGE_NAME}`,
  props: ['links', 'show'],
  mounted() {
    if (this.show) {
      const section = Object.values(this.links.sections).find((item) => item.id === this.show);
      if (section) {
        this.showModal(section);
      }
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
