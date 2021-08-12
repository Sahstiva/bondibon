<template>
  <header
    v-else
    class="header"
  >
    <div class="header-wrapper">
      <section class="header-address">
        <img
          src="~/assets/images/logo_bondibon.png"
          width="131"
          height="36"
          alt="Бондибон"
          class="header-address--logo"
        >
        <a
          class="header-address--link"
          href="mailto:info@bondibon.ru"
        ><font-awesome-icon
          class="header-icon"
          :icon="['fas', 'envelope']"
        />width: {{ screenWidth }}</a>
        <a
          class="header-address--link"
          href="tel:88005500528"
        ><font-awesome-icon
          class="header-icon"
          :icon="['fas', 'phone-alt']"
        />height: {{ screenHeight }}</a>
      </section>
      <section class="header-wheretobuy">
        <a
          href="#"
          class="header-wheretobuy--link"
        >
          <font-awesome-icon
            class="header-wheretobuy--icon"
            :icon="['fas', 'map-marker-alt']"
          />
          <p class="header-wheretobuy--text">Где купить</p>
        </a>
      </section>
      <section class="header-social">
        <div class="header-social--wrapper">
          <font-awesome-icon
            class="header-social--icon"
            :icon="['fab', 'vk']"
          />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon
            class="header-social--icon"
            :icon="['fab', 'facebook-f']"
          />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon
            class="header-social--icon"
            :icon="['fab', 'instagram-square']"
          />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon
            class="header-social--icon"
            :icon="['fab', 'youtube']"
          />
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
.header {
  position: fixed;
  top: 0;
  height: 92px;
  z-index: 10;
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
      color: #FF0000;
    }
    @media (max-width: 1023px) {
      display: none;
    }
  }

}

&-wheretobuy {
    align-items: center;
    max-width: 150px;
    padding: 0 0 15px 230px;
    text-align: center;
    @media (max-width: 1920px) {
      padding: 0 0 15px 130px;
    }
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
    &--icon {
      color: #ffffff;
      font-size: 24px;
      @media (max-width: 1023px) {
        font-size: 15px;
      }
    }
    &--link {
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      font-family: 'Manrope-Regular', Helvetica, Arial, sans-serif;
      font-size: 17px;
      line-height: 22.94px;
      letter-spacing: 0.5px;
      color: #ffffff;
      &:hover {
        color: #29d3d8;
      }
      @media (max-width: 1023px) {
        font-size: 12px;
        width: 40px;
        line-height: 15px;
      }
    }
  &--text {
    margin: 0;
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
