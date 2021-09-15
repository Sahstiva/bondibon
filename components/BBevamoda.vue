<template>
  <section class="evamoda">
    <h2 class="visually-hidden">Красота спасёт мир!</h2>
    <div class="evamoda-beauty">
      <div class="evamoda-beauty__wrapper">
        <p class="evamoda-beauty__text">
          красота<br>спасёт мир!
        </p>
        <p class="evamoda-beauty__text evamoda-beauty__nomobile">
          косметика детская, наборы для создания украшений, сумочки и аксессуары
        </p>
      </div>
    </div>
    <div class="evamoda-items">
      <button
          v-for="(section, index) in links.sections"
          @click="showModal(section)"
          class="evamoda-items__item"
          :class="'evamoda-items__' + styles[index]"
          v-html="section.text" :key="index"/>
    </div>
    <button
        class="evamoda-button"
        @click="$emit('goToNextPage', 'tablegames')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';

const PAGE_NAME = 'evamoda';

export default {
  name: `BB${PAGE_NAME}`,
  props: ['links', 'show'],
  data() {
    return {
      styles: [
        'evamoda',
        'bodyart',
        'accesoires',
        'umbrella',
        'bags',
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
