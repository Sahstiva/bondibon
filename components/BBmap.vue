<template>
  <section class="map">
    <div class="map-wrapper">
      <Yandexmap />
    </div>
  </section>
</template>

<script>
import Yandexmap from "../components/yandexmap";
export default {
  name: "BBmap",
  components: {
    Yandexmap
  }
}
</script>

<style lang="scss" scoped>
.map {
  background-image: url('~assets/images/background_map.png');
  background-position: center top;
  background-repeat: no-repeat;
  width: 1920px;
  min-height: 3000px;
  z-index: -3;
  opacity: 1;
  transform: translateZ(0);
  perspective: 1000px;
  backface-visibility: hidden;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1920px) {
    width: 100vw;
    min-height: 1080px;
    background-position: center top;
  }
  &-wrapper {
    margin: 200px 0 100px 0;
    width: 900px;
    height: 450px;
    border-radius: 50px;
    overflow: hidden;
  }
}
</style>