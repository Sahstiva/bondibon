<template>
  <section class="map">
      <Yandexmap class="map-wrapper"/>
      <div class="map-back">
        <p class="map-back__text">
          наверх
        </p>
        <button
            class="map-back__button"
            @click="$emit('goToNextPage', 'BBtitle')"
        >
          <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
        </button>
      </div>
  </section>
</template>

<script>
import Yandexmap from './yandexmap.vue';

export default {
  name: 'BBmap',
  components: {
    Yandexmap,
  },
};
</script>
