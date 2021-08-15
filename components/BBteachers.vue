<template>
  <section class="teachers">
    <div class="teachers-usefull">
      <img src="~/assets/images/arrow.png" class="teachers-usefull--arrow">
      <p class="teachers-usefull--text">
        полезно педагогам
      </p>
      <button
        class="teachers-usefull--button"
        @click="$emit('goToNextPage', 'BBlinks')"
      >
      <img src="~/assets/images/arrow_down.svg" alt="Далее">
      </button>
    </div>
    <div class="teachers-items">
      <div class="teachers-items--item teachers-items--speech">
        речевое развитие
      </div>
      <div class="teachers-items--item teachers-items--discovery">
        познавательное развитие
      </div>
      <div class="teachers-items--item teachers-items--art">
        художественно- эстетическое развитие
      </div>
      <div class="teachers-items--item teachers-items--social">
        социально- коммуника- тивное развитие
      </div>
      <div class="teachers-items--item teachers-items--catalog">
        Получите&nbsp;<span class="teachers-items--large">каталог </span>
        <font-awesome-icon
          class="teachers-items--mobile"
          :icon="['fas', 'download']"
        />
        <span class="teachers-items--nomobile">рекомендованной продукции</span>
      </div>

    <button class="teachers-items--download">
      <img src="~/assets/images/arrow_download.svg" width="49" height="49" alt="Скачать каталог">
    </button>
    </div>
    <button
      class="teachers-mobile--button"
      @click="$emit('goToNextPage', 'BBlinks')"
    >
      <img src="~/assets/images/arrow_down.svg" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBteachers',
};
</script>
