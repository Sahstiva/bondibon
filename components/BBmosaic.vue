<template>
  <section class="mosaic">
    <h2 class="visually-hidden">Интеллект на кончиках пальцев</h2>
    <div class="mosaic-smart">
      <div class="mosaic-smart__wrapper">
        <p class="mosaic-smart__text">
          интеллект на кончиках пальцев
        </p>
        <p class="mosaic-smart__text mosaic-smart__nomobile">
          наборы для творчества и рукоделия
        </p>
      </div>
    </div>
    <div class="mosaic-items">
      <button
          v-for="(section, index) in links.sections"
          @click="showModal(section)"
          class="mosaic-items__item"
          :class="'mosaic-items__' + styles[index]"
          v-html="section.text"
          :key="index"/>
    </div>
    <button
        class="mosaic-button"
        @click="$emit('goToNextPage', 'BBconstructor')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';

export default {
  name: 'BBmosaic',
  props: ['links'],
  data() {
    return {
      styles: [
        'aquatermo',
        'engraving',
        'modeling',
        'drawing',
        'knitting',
      ],
    };
  },
  methods: {
    showModal(section) {
      this.$modal.show(
        modal,
        {
          title: section.text,
          image: '',
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
