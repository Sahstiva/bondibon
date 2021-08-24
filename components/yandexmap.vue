<template>
  <yandex-map
      :coords="[55.750318, 37.620078]"
        :show-all-markers="true"
        @map-was-initialized="mapInitialized"
  >
    <ymap-marker
        v-for="(shop, index) in shops"
        :key="index"
        :marker-id="index"
        :coords="shop.position.split(' ').reverse()"
        :icon="{
            layout: 'default#imageWithContent',
            imageHref: '/images/ymaps_bondibon.png',
            imageSize: [25, 25],
            imageOffset: [-12, -12],
            hintContent: shop.name,
            balloonContent: shop.geocode,
        }"
        :balloon-template="balloonTemplate(shop)"/>
  </yandex-map>
</template>

<script>

export default {
  name: 'Yandexmap',
  props: ['shops'],
  data: () => ({
    zoom: 2,
    searchControlProvider: 'yandex#search',
    bounds: [[55.556730, 37.332852], [55.923726, 37.860701]],
  }),
  methods: {
    mapInitialized() {
      this.$emit('YandexReady', true);
    },
    balloonTemplate(shop) {
      return `
        <h3>
            <a  target=_blank
                rel="noreferrer"
                href="${shop.link}"
                class="map-link">
                ${shop.name}
            </a>
        </h3>
        <p>${shop.geocode}</p>
        <a  target=_blank
            rel="noreferrer"
            class="map-link"
            href="https://yandex.ru/maps/?rtext=~${shop.position.split(' ').reverse()}&rtt=auto">
            Построить маршрут в Яндекс.Картах
        </a>
      `;
    },
  },
};
</script>
