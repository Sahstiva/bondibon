<template>
  <header
    class="header"
  >
    <div class="header-wrapper">
      <div class="header-address">
        <a href="https://bondibon.ru"
           onclick="ym(85182334,'reachGoal','bondibon_link');return true;">
          <picture class="header-address__logo">
            <source
                data-srcset="~/assets/images/logo_bondibon.png?webp" type="image/webp"
                media="(min-width: 375px)">
            <source
                data-srcset="~/assets/mobile/logo_bondibon_se.png?webp" type="image/webp"
                media="(max-width: 374px)">
            <img
              data-src="~/assets/images/logo_bondibon.png"
              class="lazyload"
              loading="lazy"
              width="131" height="36"
              alt="Бондибон -официальный сайт"
            >
          </picture></a>
        <a
          class="header-address__link"
          href="mailto:info@bondibon.ru"
        ><font-awesome-icon
          class="header-icon"
          :icon="['fas', 'envelope']"
        />info@bondibon.ru</a>
        <a
          class="header-address__link"
          href="tel:88005500528"
        ><font-awesome-icon
          class="header-icon"
          :icon="['fas', 'phone-alt']"
        />8-800-550-05-28</a>
      </div>
      <div class="header-wheretobuy">
        <button class="header-wheretobuy__button" @click="$emit('goToNextPage', 'map')">
          <font-awesome-icon
            class="header-wheretobuy__icon"
            :icon="['fas', 'map-marker-alt']"
          />
          <p class="header-wheretobuy__text">Где купить</p>
        </button>
      </div>
      <div class="header-social">
        <div class="header-social__wrapper">
          <a class="header-social__icon"
             href="https://vk.com/public173602765"
             target="_blank"
             rel="noreferrer"
          >
            <font-awesome-icon
              :icon="['fab', 'vk']"
            /><span class="visually-hidden">Перейти на ВК</span>
          </a>
        </div>
        <div class="header-social__wrapper">
          <a class="header-social__icon"
             href="https://ru-ru.facebook.com/gameskidsgroup"
             target="_blank"
             rel="noreferrer"
            >
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
            /><span class="visually-hidden">Перейти на Facebook</span>
          </a>
        </div>
        <div class="header-social__wrapper">
          <a class="header-social__icon"
             href="https://www.instagram.com/bondibon_games/"
             target="_blank"
             rel="noreferrer"
          >
          <font-awesome-icon
              :icon="['fab', 'instagram-square']"
            /><span class="visually-hidden">Перейти на Facebook</span>
          </a>
        </div>
        <div class="header-social__wrapper">
          <a class="header-social__icon"
             href="https://www.youtube.com/channel/UC9F9bwqIL0xBrPL27MrIYvA"
             target="_blank"
             rel="noreferrer"
            >
          <font-awesome-icon
            :icon="['fab', 'youtube']"
          /></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BBheader',
  data() {
    return {
      screenWidth: null,
      screenHeight: null,
    };
  },
  mounted() {
    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
  },
};
</script>
