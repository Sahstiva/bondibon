import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faDownload, faEnvelope, faPhoneAlt, faMapMarkerAlt, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faVk, faInstagramSquare, faYoutube,
} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = true;
library.add(
  faEnvelope, faPhoneAlt, faDownload,
  faMapMarkerAlt, faTimes, faFacebookF,
  faVk, faInstagramSquare, faYoutube,
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
