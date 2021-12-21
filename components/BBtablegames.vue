<template>
  <section class="tablegames">
    <BBheader @goWhereToBuy="$emit('goToNextPage', 'map')"/>
    <h2 class="visually-hidden">Делу время - потехе час</h2>
    <div class="tablegames-time">
      <div class="tablegames-time__wrapper">
        <p class="tablegames-time__text">
          делу время,<br>потехе - чаc
        </p>
      </div>
    </div>
    <div class="tablegames-items">
      <button
          v-for="(section, index) in links.sections"
          @click="showModal(section)"
          class="tablegames-items__item"
          :class="'tablegames-items__' + styles[index]"
          v-html="section.text" :key="index"/>
    </div>
    <button
        class="tablegames-button"
        @click="$emit('goToNextPage', 'ideas')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';
import BBheader from './BBheader.vue';

const PAGE_NAME = 'tablegames';

export default {
  name: `BB${PAGE_NAME}`,
  props: ['links', 'show'],
  components: {
    BBheader,
  },
  data() {
    return {
      styles: [
        'antistress',
        'transport',
        'rolegames',
        'dolls',
        'newborn',
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
