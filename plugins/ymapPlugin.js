import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
  apiKey: '53a17840-e379-4979-b616-a613e932d59f',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
  center: [55.76, 37.64],
  zoom: 10,
};

Vue.use(YmapPlugin, settings);
