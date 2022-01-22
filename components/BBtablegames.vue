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
          @click="$emit('showModal', section)"
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
import BBheader from './BBheader.vue';

const PAGE_NAME = 'tablegames';

export default {
  name: `BB${PAGE_NAME}`,
  props: ['links'],
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
};
</script>
