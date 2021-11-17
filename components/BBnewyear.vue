<template>
  <section class="newyear">
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
          @click="showModal(section)"
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
import modal from '@/components/modal.vue';

const PAGE_NAME = 'newyear';

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
          classes: 'wheretobuy-modal',
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
