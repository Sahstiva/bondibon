<template>
  <section class="evamoda">
    <BBheader @goWhereToBuy="$emit('goToNextPage', 'map')"/>
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
          @click="$emit('showModal', section)"
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
import BBheader from './BBheader.vue';

const PAGE_NAME = 'evamoda';

export default {
  name: `BB${PAGE_NAME}`,
  props: ['links'],
  components: {
    BBheader,
  },
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
};
</script>
