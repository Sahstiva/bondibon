<template>
  <section class="tablegames">
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
        @click="$emit('goToNextPage', 'gift')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
import modal from '@/components/modal.vue';

export default {
  name: 'BBtablegames',
  props: ['links', 'show'],
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
