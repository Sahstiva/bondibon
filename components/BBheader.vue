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
          class="header-address--logo"
        ></a>
        <a
          class="header-address--link"
          href="mailto:info@bondibon.ru"
        ><font-awesome-icon
          class="header-icon"
          :icon="['fas', 'envelope']"
        />info@bondibon.ru</a>
        <a
          class="header-address--link"
          href="tel:88005500528"
        ><font-awesome-icon
          class="header-icon"
          :icon="['fas', 'phone-alt']"
        />8-800-550-05-28</a>
      </section>
      <section class="header-wheretobuy">
        <button class="header-wheretobuy--button" @click="$emit('goToNextPage', 'BBmap')">
          <font-awesome-icon
            class="header-wheretobuy--icon"
            :icon="['fas', 'map-marker-alt']"
          />
          <div class="header-wheretobuy--text">Где купить</div>
        </button>
      </section>
      <section class="header-social">
        <div class="header-social--wrapper">
          <a class="header-social--icon" href="https://vk.com/public173602765">
          <font-awesome-icon
            :icon="['fab', 'vk']"
          /></a>
        </div>
        <div class="header-social--wrapper">
          <a class="header-social--icon" href="https://ru-ru.facebook.com/gameskidsgroup">
          <font-awesome-icon
            :icon="['fab', 'facebook-f']"
          /></a>
        </div>
        <div class="header-social--wrapper">
          <a class="header-social--icon" href="https://www.instagram.com/bondibon_games/">
          <font-awesome-icon
            :icon="['fab', 'instagram-square']"
          /></a>
        </div>
        <div class="header-social--wrapper">
          <a class="header-social--icon" href="https://www.youtube.com/channel/UC9F9bwqIL0xBrPL27MrIYvA">
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

<style lang="scss" scoped>
@import "~assets/style/style.scss";
.header {
  position: fixed;
  top: 0;
  height: 92px;
  z-index: 2;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  @media (max-width: 1023px) {
    height: 77px;
  }

&-wrapper {
   width: 920px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-end;
  @media (max-width: 1023px) {
    width: 90%;
    max-width: 480px;
    align-items: flex-start;
  }
 }
&-address, &-wheretobuy {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
            }

&-address {

  &--logo {
     margin: 0 0 11px 0;
  }
  &--link {
    text-decoration: none;
    font-family: 'Manrope-Regular', Helvetica, Arial, sans-serif;
    font-size: 17px;
    line-height: 22.94px;
    letter-spacing: 0.5px;
    color: #ffffff;
    &:hover {
      color: #fae816;
    }
    @media (max-width: 1023px) {
      display: none;
    }
  }

}

&-wheretobuy {
  align-items: center;
  max-width: 150px;
  margin: 0 0 0 200px;
  text-align: center;

  @media (max-width: 1023px) {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    padding: 1px;
    background-color: #d2beae;
    justify-content: center;
    align-items: center;
    margin: 5px 0 0 0;
  }

  &--button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0 45px 0 0;
    &:hover .header-wheretobuy--text {
      color: #fae816;
    }
    @media (max-width: 1023px) {
      padding: 0;
    }
  }

  &--icon {
    color: #ffffff;
    font-size: 24px;
    @media (max-width: 1023px) {
      font-size: 15px;
    }
  }

  &--text {
    margin: 10px 0 0 0;
    @include font-Rotonda;
    font-size: 17px;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    @media (max-width: 1023px) {
      font-size: 10px;
      margin: 5px 0 0 0;
    }
  }
}
&-social {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 156px;
  @media (max-width: 1023px) {
    width: 110px;
    margin: 10px 0 0 0;
  }

  &--icon {
    color: #ffffff;
    font-size: 24px;
    @media (max-width: 1023px) {
      font-size: 17px;
    }
    &:hover {
      color: #ed1b2f;
      transform: rotate(360deg);
      transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715);
      cursor: pointer;
    }
  }

  &--wrapper {
     width: 36px;
     height: 36px;
     border-radius: 10px;
     border: none;
     background-color: #d2beae;
     display: flex;
     justify-content: center;
     align-items: center;
    @media (max-width: 1023px) {
      width: 24px;
      height: 24px;
      border-radius: 7px;
    }
   }
}

&-icon {
   color: #ffffff;
   font-size: 19px;
   line-height: 23.94px;
   margin: 0 5px 0 0;
 }
}
</style>
