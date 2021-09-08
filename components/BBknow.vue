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
        @click="$emit('goToNextPage', 'BBmicroscope')"
      >
        <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';

export default {
  name: 'BBknow',
  props: ['links'],
  methods: {
    showModal(section) {
      this.$modal.show(
        modal,
        {
          title: section.text,
          image: section.image,
          links: section.links,
        },
        {
          height: 'auto',
          adaptive: true,
        },
      );
    },
  },
};
</script>
