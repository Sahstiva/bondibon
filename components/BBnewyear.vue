<template>
  <section class="newyear">
    <BBheader @goWhereToBuy="$emit('goToNextPage', 'map')" class="newyear-header"/>
    <h2 class="visually-hidden">Новый год к нам мчится</h2>
    <div class="newyear-title">
      <p class="newyear-title__title">
        новый год<br>к нам мчится!
      </p>
      <p class="newyear-title__subtitle">
        новогодние наборы для творчества, ёлочные игрушки hand-made, настольные игры
      </p>
      <p class="newyear-title__mobile">
        новогоднее творчество, игры, hand-made
      </p>
    </div>
    <div class="newyear-grid">
      <button
          v-for="(section, index) in links.sections"
          @click="$emit('showModal', section)"
          class="newyear-item"
          :key="index">
        <div class="newyear-item__wrapper">
          <img
              :src="require(`~/assets/images/${section.image}?webp`)"
              width="160"
              height="160"
              :alt="section.text"
              class="newyear-item__img"
          >
        </div>
        <p class="newyear-item__text" v-html="section.text"/>
      </button>
    </div>
    <div class="newyear-button">
      <button
        class="newyear-button__button"
        @click="$emit('goToNextPage', 'teachers')"
      >
        <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
import BBheader from './BBheader.vue';

const PAGE_NAME = 'newyear';

export default {
  name: `BB${PAGE_NAME}`,
  components: { BBheader },
  props: ['links'],
};
</script>
