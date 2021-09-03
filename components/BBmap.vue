<template>
  <section class="map">
    <h2 class="visually-hidden">Где купить</h2>
    <yandex-map v-if="showMap" class="map-wrapper"
                :coords="coords"
                :zoom="zoom"
                :show-all-markers="showAllMarkers"
                @map-was-initialized="mapInitialized"
    >
      <ymap-marker
          v-for="(shop, index) in shops"
          :key="index"
          :marker-id="index"
          :coords="shop.position.split(' ').reverse()"
          @click="markerClick(shop)"
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
    <div v-else class="map-wrapper"></div>
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

export default {
  name: 'BBmap',
  props: ['shops', 'showMap'],
  data: () => ({
    zoom: 2,
    myMap: null,
    coords: [55.750318, 37.620078],
    showAllMarkers: true,
    searchControlProvider: 'yandex#search',
    bounds: [[55.556730, 37.332852], [55.923726, 37.860701]],
  }),
  methods: {
    mapInitialized(map) {
      console.log('Yandex loaded');
      this.myMap = map;

      const btnZoomOut = new ymaps.control.Button('Показать все');
      btnZoomOut.options.set("maxWidth", 200);
      btnZoomOut.events.add(["click"], () => {
        this.showAllMarkers = true;
        this.coords =  [55.750318, 37.620078];
        this.myMap.setCenter([55.750318, 37.620078]);
        this.myMap.setZoom(3);
        this.zoom = 3;
        console.log(`Показать всё, масштаб ${this.myMap.getZoom()}`);
      });
      map.controls.add(btnZoomOut);
    },
    markerClick(shop) {
      this.showAllMarkers = false;
      this.coords = shop.position.split(' ').reverse();
      this.myMap.setCenter(shop.position.split(' ').reverse());
      this.myMap.setZoom(6);
      this.zoom = 6;
      console.log(`Кликнули по маркеру ${shop.position.split(' ').reverse()}, масштаб ${this.myMap.getZoom()}`);
    },
    balloonTemplate(shop) {
      if(shop.link) {
        return `
        <h3>
            <a  target=_blank
                rel="noreferrer"
                href="${shop.link}"
                class="map-link">
                ${shop.name}
            </a  >
        </h3>
        <p>${shop.geocode}</p>
        <a  target=_blank
            rel="noreferrer"
            class="map-link map-link__small"
            href="https://yandex.ru/maps/?rtext=~${shop.position.split(' ').reverse()}&rtt=auto">
            Построить маршрут в Яндекс.Картах
        </a>
      `;
      }
      else {
        return `
        <h3>
            <p  class="map-link">
                ${shop.name}
            </p  >
        </h3>
        <p>${shop.geocode}</p>
        <a  target=_blank
            rel="noreferrer"
            class="map-link map-link__small"
            href="https://yandex.ru/maps/?rtext=~${shop.position.split(' ').reverse()}&rtt=auto">
            Построить маршрут в Яндекс.Картах
        </a>
      `;
      }
    },
  },
};
</script>
