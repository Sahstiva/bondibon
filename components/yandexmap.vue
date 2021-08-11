<template>
  <yandex-map :coords="coordMain" :bounds="[coordMain, coordTomilino]">
    <ymap-marker
        marker-id="Main"
        :coords="coordMain"
        :icon="markerMain"
    />
    <ymap-marker
        marker-id="Tomilino"
        :coords="coordTomilino"
        :icon="markerTomilino"
    />
  </yandex-map>
</template>

<script>
export default {
  name: "yandexmap",
  data: () => ({
    coordMain: [55.600880, 37.599135],
    coordTomilino: [55.640711, 37.930229],
    zoom: 2,
    searchControlProvider: "yandex#search",
    markerMain: {
      layout: 'default#imageWithContent',
      imageHref: '/images/ymaps_bondibon.png',
      imageSize: [50, 50],
      imageOffset: [-25, -25],
      hintContent: "BONDIBON Центральный офис",
      balloonContent: "Кировоградская улица, 23, Москва, Россия"
    },
    markerTomilino: {
      layout: 'default#imageWithContent',
      imageHref: '/images/ymaps_bondibon.png',
      imageSize: [50, 50],
      imageOffset: [-25, -25],
      hintContent: "BONDIBON Склад Томилино",
      balloonContent: "Московская область, Люберецкий р-н, пос.Томилино, пос.Птицефабрика, уч.3"
    }
  })
}
</script>

<style scoped>
.ymap-container {
  height: 100%;
  z-index: 10;
}
</style>