<template>
  <section class="knowledge">
    <BBheader @goWhereToBuy="$emit('goToNextPage', 'map')"/>
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
          @click="$emit('showModal', section)"
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
import BBheader from './BBheader.vue';

const PAGE_NAME = 'know';

export default {
  name: `BB${PAGE_NAME}`,
  components: { BBheader },
  props: ['links'],
};
</script>
