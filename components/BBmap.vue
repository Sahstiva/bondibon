<template>
  <section class="map">
      <Yandexmap class="map-wrapper"/>
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
