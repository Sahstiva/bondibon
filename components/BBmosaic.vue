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
        @click="$emit('goToNextPage', 'constructor')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';

const PAGE_NAME = 'mosaic';

export default {
  name: `BB${PAGE_NAME}`,
  props: ['links', 'show'],
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
  mounted() {
    if (this.show) {
      const section = this.links.sections.find((item) => item.id === this.show);
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
          image: '',
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
