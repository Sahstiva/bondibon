<template>
  <header class="header">
    <header class="header-wrapper">
      <section class="header-address">
        <img src="~/assets/images/logo_bondibon.png" width="131" height="36" alt="Бондибон" class="header-address--logo">
        <a class="header-link" href="mailto:info@bondibon.ru"><font-awesome-icon class="header-icon" :icon="['fas', 'envelope']" />width: {{ screenWidth }}</a>
        <a class="header-link" href="tel:88005500528"><font-awesome-icon class="header-icon" :icon="['fas', 'phone-alt']" />height: {{ screenHeight }}</a>
      </section>
      <section class="header-wheretobuy">
        <font-awesome-icon class="header-icon" :icon="['fas', 'map-marker-alt']" />
        <p class="header-text">Узнай, где купить  в своем городе</p>
      </section>
      <section class="header-social">
        <div class="header-social--wrapper">
          <font-awesome-icon class="header-social--icon" :icon="['fab', 'vk']" />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon class="header-social--icon" :icon="['fab', 'facebook-f']" />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon class="header-social--icon" :icon="['fab', 'instagram-square']" />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon class="header-social--icon" :icon="['fab', 'youtube']" />
        </div>
      </section>
    </header>
  </header>
</template>

<script>
export default {
  name: "BBheader",
  data() {
    return {
      screenWidth: null,
      screenHeight: null
    }
  },
  mounted() {
    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  height: 92px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
&-wrapper {
   width: 920px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-end;
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
}

&-wheretobuy {
   align-items: center;
   max-width: 150px;
   padding: 0 0 15px 230px;
   text-align: center;
@media (max-width: 1920px) {
  padding: 0 0 15px 130px;
}
}

&-social {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 156px;

&--icon {
   color: #ffffff;
   font-size: 24px;
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
 }
}

&-icon {
   color: #ffffff;
   font-size: 19px;
   line-height: 23.94px;
   margin: 0 5px 0 0;
 }

&-link, &-text {
           font-family: 'Manrope-Regular', Helvetica, Arial, sans-serif;
           text-decoration: none;
           font-size: 17px;
           line-height: 22.94px;
           letter-spacing: 0.5px;
           color: #ffffff;
           margin: 0 0 0 0;
         }
&-link {
&:hover {
   color: red;
 }
}
&-text {
&:hover {
   color: #29d3d8;
 }
}
}
</style>