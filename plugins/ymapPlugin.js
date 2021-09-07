import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
  apiKey: process.env.API_YMAP,
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
  center: [55.76, 37.64],
  zoom: 10,
};

Vue.use(YmapPlugin, settings);
