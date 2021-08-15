<template>
  <yandex-map
      :coords="[55.750318, 37.620078]"
        :show-all-markers="true"
  >
    <ymap-marker
        v-for="shop in shops"
        :key="shop.name"
        :marker-id="shop.name"
        :coords="shop.coords"
        :icon="{
            layout: 'default#imageWithContent',
            imageHref: '/images/ymaps_bondibon.png',
            imageSize: [25, 25],
            imageOffset: [-12, -12],
            hintContent: shop.name,
            balloonContent: shop.address,
        }"
        :balloon-template="balloonTemplate(shop.name, shop.address, shop.coords)"/>
  </yandex-map>
</template>

<script>

export default {
  name: 'Yandexmap',
  data: () => ({
    zoom: 2,
    searchControlProvider: 'yandex#search',
    bounds: [[55.556730, 37.332852], [55.923726, 37.860701]],
    shops: [],
  }),
  created() {
    this.getAddresses();
  },
  methods: {
    balloonTemplate(name, address, coords) {
      return `
        <h2>${name}</h2>
        <p>${address}</p>
        <a  target=_blank
            rel="noreferrer"
            href="https://yandex.ru/maps/?rtext=~${coords}&rtt=auto">
            Построить маршрут в Яндекс.Картах
        </a>
      `;
    },
    getAddresses() {
      const data = require('static/data/address.json');
      this.shops = [...data.shops];
    },
  },
};
</script>
