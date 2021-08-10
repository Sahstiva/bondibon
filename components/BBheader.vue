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

<style scoped>

</style>