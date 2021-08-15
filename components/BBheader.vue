<template>
  <header
    class="header"
  >
    <div class="header-wrapper">
      <section class="header-address">
        <a href="https://bondibon.ru">
        <img
          src="~/assets/images/logo_bondibon.png"
          width="131"
          height="36"
          alt="Бондибон -официальный сайт"
          class="header-address__logo"
        ></a>
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
      </section>
      <section class="header-wheretobuy">
        <button class="header-wheretobuy__button" @click="$emit('goToNextPage', 'BBmap')">
          <font-awesome-icon
            class="header-wheretobuy__icon"
            :icon="['fas', 'map-marker-alt']"
          />
          <div class="header-wheretobuy__text">Где купить</div>
        </button>
      </section>
      <section class="header-social">
        <div class="header-social__wrapper">
          <a class="header-social__icon" href="https://vk.com/public173602765">
          <font-awesome-icon
            :icon="['fab', 'vk']"
          /></a>
        </div>
        <div class="header-social__wrapper">
          <a class="header-social__icon" href="https://ru-ru.facebook.com/gameskidsgroup">
          <font-awesome-icon
            :icon="['fab', 'facebook-f']"
          /></a>
        </div>
        <div class="header-social__wrapper">
          <a class="header-social__icon" href="https://www.instagram.com/bondibon_games/">
          <font-awesome-icon
            :icon="['fab', 'instagram-square']"
          /></a>
        </div>
        <div class="header-social__wrapper">
          <a class="header-social__icon"
             href="https://www.youtube.com/channel/UC9F9bwqIL0xBrPL27MrIYvA">
          <font-awesome-icon
            :icon="['fab', 'youtube']"
          /></a>
        </div>
      </section>
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
