<template>
  <div class="wheretobuy">
    <p class="wheretobuy-header">где купить</p>
    <img v-if="image"
         :class="page === 'ideas' || '20gifts' ? 'wheretobuy-ideas' : 'wheretobuy-image'"
         :src="require(`~/assets/images/${ image }`)"/>
    <p class="wheretobuy-title" v-html="title"/>
    <div class="wheretobuy-wrapper">
      <div v-if="shopLinks.get('Bondibon')" class="wheretobuy-item">
        <a
            class="wheretobuy-item__link"
            @click="reachGoal('bondibon_link')"
            :href="shopLinks.get('Bondibon')"
            target="_blank"
            rel="noreferrer"
        >
          <img
              data-src="~/assets/images/logo_bondibon.png?webp"
              type="image/webp"
              loading="lazy"
              width="131" height="36"
              :alt="'Купить ' + title + 'в интернет-магазине BONDIBON'"
              class="wheretobuy-img lazyload" />
        </a>
      </div>
      <div v-if="shopLinks.get('Ozon')" class="wheretobuy-item">
        <a
            class="wheretobuy-link"
            @click="reachGoal('ozon_link')"
            :href="shopLinks.get('Ozon')"
            target="_blank"
            rel="noreferrer"
        >
          <img
              data-src="~/assets/images/logo_ozon.png?webp"
              type="image/webp"
              loading="lazy"
              width="131" height="36"
              :alt="'Купить ' + title + 'в интернет-магазине OZON'"
              class="wheretobuy-img lazyload" />
        </a>
      </div>
      <div v-if="shopLinks.get('Wildberries')" class="wheretobuy-item">
        <a
            class="wheretobuy-link"
            @click="reachGoal('wildberries_link')"
            :href="shopLinks.get('Wildberries')"
            target="_blank"
            rel="noreferrer">
          <img
              data-src="~/assets/images/logo_wb.png?webp"
              type="image/webp"
              loading="lazy"
              width="131" height="36"
              :alt="'Купить ' + title + 'в интернет-магазине WILDBERRIES'"
              class="wheretobuy-img lazyload" />
        </a>
      </div>
      <div v-if="shopLinks.get('My Shop')" class="wheretobuy-item">
        <a
            class="wheretobuy-link"
            @click="reachGoal('myshop_link')"
            :href="shopLinks.get('My Shop')"
            target="_blank"
            rel="noreferrer">
          <img
              data-src="~/assets/images/logo_myshop.png?webp"
              type="image/webp"
              loading="lazy"
              width="131" height="36"
              :alt="'Купить ' + title + 'в интернет-магазине MY SHOP'"
              class="wheretobuy-img lazyload" />
        </a>
      </div>
      <div v-if="shopLinks.get('Akusherstvo')" class="wheretobuy-item">
        <a
            class="wheretobuy-link"
            @click="reachGoal('akusherstvo_link')"
            :href="shopLinks.get('Akusherstvo')"
            target="_blank"
            rel="noreferrer"
        >
          <img
              data-src="~/assets/images/logo_akusherstvo.jpg?webp"
              type="image/webp"
              loading="lazy"
              width="131" height="36"
              :alt="'Купить ' + title + 'в интернет-магазине AKUSHERSTVO'"
              class="wheretobuy-img lazyload" />
        </a>
      </div>
      <div v-if="shopLinks.get('Online Trade')" class="wheretobuy-item">
        <a
            class="wheretobuy-link"
            :href="shopLinks.get('Online Trade')"
            @click="reachGoal('onlinetrade_link')"
            target="_blank"
            rel="noreferrer">
          <img
              data-src="~/assets/images/logo_onlayntreyd.png?webp"
              type="image/webp"
              loading="lazy"
              width="131" height="36"
              :alt="'Купить ' + title + 'в интернет-магазине ONLINE TRADE'"
              class="wheretobuy-img lazyload" />
        </a>
      </div>
      <div v-if="shopLinks.get('Seven gnomes')" class="wheretobuy-item">
        <a
            class="wheretobuy-link"
            @click="reachGoal('sevengnomes_link')"
            :href="shopLinks.get('Seven gnomes')"
            target="_blank"
            rel="noreferrer"
        >
          <img
              data-src="~/assets/images/logo_sevengnomes.png?webp"
              type="image/webp"
              loading="lazy"
              width="131" height="36"
              :alt="'Купить ' + title + 'в интернет-магазине Школа семи гномов'"
              class="wheretobuy-img lazyload" />
        </a>
      </div>
      <div v-if="shopLinks.get('Labyrinth')" class="wheretobuy-item">
        <a
            class="wheretobuy-link"
            @click="reachGoal('labyrinth_link')"
            :href="shopLinks.get('Labyrinth')"
            target="_blank"
            rel="noreferrer"
        >
          <img
              data-src="~/assets/images/logo_labirint.png?webp"
              type="image/webp"
              loading="lazy"
              width="131" height="36"
              :alt="'Купить ' + title + 'в интернет-магазине Лабиринт'"
              class="wheretobuy-img lazyload" />
        </a>
      </div>
    </div>
    <button class="wheretobuy-close" @click="$emit('close')">
      <font-awesome-icon
          :icon="['fas', 'times']"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BBmodal',
  props: ['title', 'image', 'links', 'id', 'page'],
  data() {
    return {
      shopLinks: new Map(),
      scriptUrl: 'https://px.adhigh.net/p/conversion.js?site_id=7414&pixel_id=10',
      bondilogic: [
        'cats',
        'camp',
        'turtle',
        'mechanics',
        'snowflake',
        'seasons',
        'kaleidoscope',
        'multicube',
      ],
    };
  },
  created() {
    Object.values(this.links).forEach((shop) => {
      this.shopLinks.set(shop.shop, shop.link);
    });
  },
  mounted() {
    window.history.pushState(
      null,
      document.title, `${window.location.pathname}?page=${this.page}&section=${this.id}`,
    );
  },
  methods: {
    reachGoal(goal) {
      window.ym(85182334, 'reachGoal', goal);
      if (this.bondilogic.find((el) => el === this.id)) {
        this.loadScript(this.scriptUrl)
          .then(() => console.log('Script loaded'))
          .catch((e) => console.log(`Fail to load script: ${e}`));
      }
    },
    loadConversionScript() {
      if (typeof __GetI === 'undefined') {
        // eslint-disable-next-line no-underscore-dangle
        var __GetI = [];
      }
      // eslint-disable-next-line func-names
      (function () {
        const p = {
          type: 'CONVERSION',
          /* config START */
          site_id: 7414,
          pixel_id: 10,
          /* config END */
        };
        // eslint-disable-next-line block-scoped-var
        __GetI.push(p);
        const domain = (typeof __GetI_domain) === 'undefined' ? 'px.adhigh.net' : __GetI_domain;
        const src = `${(document.location.protocol === 'https:' ? 'https://' : 'http://') + domain}/p.js`;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
      }());
    },
    async loadScript(source, async = true, defer = true) {
      return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        const prior = document.getElementsByTagName('script')[0];

        script.async = async;
        script.defer = defer;

        function onloadHander(_, isAbort) {
          if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = null;
            script.onreadystatechange = null;
            script = undefined;

            if (isAbort) { reject(); } else { resolve(); }
          }
        }

        script.onload = onloadHander;
        script.onreadystatechange = onloadHander;

        script.src = source;
        prior.parentNode.insertBefore(script, prior);
      });
    },
  },
};
</script>
