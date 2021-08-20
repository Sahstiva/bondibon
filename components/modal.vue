<template>
  <div class="wheretobuy">
    <p class="wheretobuy-header">где купить</p>
    <img v-if="image" class="wheretobuy-image" :src="require(`~/assets/images/${ image }`)"/>
    <p class="wheretobuy-title" v-html="title"/>
    <div class="wheretobuy-wrapper">
      <div v-if="shopLinks.get('Bondibon')" class="wheretobuy-item">
        <a class="wheretobuy-item__link" :href="shopLinks.get('Bondibon')" target="_blank" rel="noreferrer">
          <img src="~/assets/images/logo_bondibon.png" width="131" height="36" :alt="'Купить ' + title + 'в интернет-магазине BONDIBON'" class="wheretobuy-img" />
        </a>
      </div>
      <div v-if="shopLinks.get('Ozon')" class="wheretobuy-item">
        <a class="wheretobuy-link" :href="shopLinks.get('Ozon')" target="_blank" rel="noreferrer">
          <img src="~/assets/images/logo_ozon.png" width="131" height="36" :alt="'Купить ' + title + 'в интернет-магазине OZON'" class="wheretobuy-img" />
        </a>
      </div>
      <div v-if="shopLinks.get('Wildberries')" class="wheretobuy-item">
        <a class="wheretobuy-link" :href="shopLinks.get('Wildberries')" target="_blank" rel="noreferrer">
          <img src="~/assets/images/logo_wb.png" width="131" height="36" :alt="'Купить ' + title + 'в интернет-магазине WILDBERRIES'" class="wheretobuy-img" />
        </a>
      </div>
      <div v-if="shopLinks.get('My Shop')" class="wheretobuy-item">
        <a class="wheretobuy-link" :href="shopLinks.get('My Shop')" target="_blank" rel="noreferrer">
          <img src="~/assets/images/logo_myshop.png" width="131" height="36" :alt="'Купить ' + title + 'в интернет-магазине MY SHOP'" class="wheretobuy-img" />
        </a>
      </div>
      <div v-if="shopLinks.get('Akusherstvo')" class="wheretobuy-item">
        <a class="wheretobuy-link" :href="shopLinks.get('Akusherstvo')" target="_blank" rel="noreferrer">
          <img src="~/assets/images/logo_akusherstvo.jpg" width="131" height="36" :alt="'Купить ' + title + 'в интернет-магазине AKUSHERSTVO'" class="wheretobuy-img" />
        </a>
      </div>
      <div v-if="shopLinks.get('Online Trade')" class="wheretobuy-item">
        <a class="wheretobuy-link" :href="shopLinks.get('Online Trade')" target="_blank" rel="noreferrer">
          <img src="~/assets/images/logo_onlayntreyd.png" width="131" height="36" :alt="'Купить ' + title + 'в интернет-магазине ONLINE TRADE'" class="wheretobuy-img" />
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
  name: "modal",
  props: ['title','image','links'],
  data() {
    return {
      shopLinks: new Map()
    }
  },
  created() {
    this.links.forEach(shop => {
      this.shopLinks.set(shop.shop, shop.link);
    });
  }

}
</script>
