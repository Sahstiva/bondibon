<template>
  <section class="constructor">
    <h2 class="visually-hidden">Мысли конструктивно</h2>
    <div class="constructor-think">
      <div class="constructor-think__wrapper">
        <p class="constructor-think__text">
          мысли<br>конструктивно
        </p>
        <p class="constructor-think__text constructor-think__nomobile">
          конструкторы и робототехника,<br>сборные модели, 3d пазлы
        </p>
      </div>
    </div>
    <div class="constructor-items">
      <button
          v-for="(section, index) in links.sections"
          @click="showModal(section)"
          class="constructor-items__item"
          :class="'constructor-items__' + styles[index]"
          v-html="section.text" :key="index"/>
    </div>
    <button
        class="constructor-button"
        @click="$emit('goToNextPage', 'evamoda')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';

const PAGE_NAME = 'constructor';

export default {
  name: `BB${PAGE_NAME}`,
  props: ['links', 'show'],
  data() {
    return {
      styles: [
        'robots',
        'magnit',
        'sqrew',
        'puzzles',
        'models',
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
