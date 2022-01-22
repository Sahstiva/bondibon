<template>
  <section class="microscope">
    <BBheader @goWhereToBuy="$emit('goToNextPage', 'map')"/>
    <h2 class="visually-hidden">Хочу всё знать</h2>
    <div class="microscope-wannaknow">
      <div class="microscope-wannaknow__wrapper">
        <p class="microscope-wannaknow__text">
          хочу всё знать!
        </p>
      </div>
    </div>
    <div class="microscope-items">
      <button
          v-for="(section, index) in links.sections"
          @click="$emit('showModal', section)"
          class="microscope-items__item"
          :class="'microscope-items__' + styles[index]"
          v-html="section.text" :key="index"/>
    </div>
    <button
        class="microscope-button"
        @click="$emit('goToNextPage', 'mosaic')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
import BBheader from './BBheader.vue';

const PAGE_NAME = 'science';

export default {
  name: `BB${PAGE_NAME}`,
  components: { BBheader },
  props: ['links'],
  data() {
    return {
      styles: [
        'microscope',
        'science',
        'digger',
        'entertainment',
        'magic',
      ],
    };
  },
};
</script>
