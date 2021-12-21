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
          @click="showModal(section)"
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
import modal from '@/components/modal.vue';
import BBheader from './BBheader.vue';

const PAGE_NAME = 'science';

export default {
  name: `BB${PAGE_NAME}`,
  components: { BBheader },
  props: ['links', 'show'],
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
