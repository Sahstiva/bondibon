<template>
  <section class="map">
      <LazyYandexmap :shops="shops" class="map-wrapper"/>
      <div class="map-back">
        <button
            class="map-back__button"
            @click="$emit('goToNextPage', 'BBtitle')"
        >
          <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
        </button>
        <p class="map-back__text">
          наверх
        </p>
      </div>
  </section>
</template>

<script>
import Yandexmap from './yandexmap.vue';

export default {
  name: 'BBmap',
  props: ['shops'],
  components: {
    Yandexmap,
  },
};
</script>
