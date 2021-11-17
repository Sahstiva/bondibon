<template>
  <div class="wheretobuy">
    <p class="wheretobuy-header">где купить</p>
    <img v-if="image" :class="page === 'ideas' ? 'wheretobuy-ideas' : 'wheretobuy-image'" :src="require(`~/assets/images/${ image }`)"/>
    <p class="wheretobuy-title" v-html="title"/>
    <div class="wheretobuy-wrapper">
      <div v-if="shopLinks.get('Bondibon')" class="wheretobuy-item">
        <a
            class="wheretobuy-item__link"
            onclick="ym(85182334,'reachGoal','bondibon_link');return true;"
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
            onclick="ym(85182334,'reachGoal','ozon_link');return true;"
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
            onclick="ym(85182334,'reachGoal','wildberries_link');return true;"
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
            onclick="ym(85182334,'reachGoal','myshop_link');return true;"
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
            onclick="ym(85182334,'reachGoal','akusherstvo_link');return true;"
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
            onclick="ym(85182334,'reachGoal','onlinetrade_link');return true;"
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
            onclick="ym(85182334,'reachGoal','sevengnomes_link');return true;"
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
            onclick="ym(85182334,'reachGoal','labyrinth_link');return true;"
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
    },
  },
};
</script>
