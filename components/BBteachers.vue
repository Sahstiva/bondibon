<template>
  <section class="teachers">
    <div class="teachers-usefull">
      <img src="~/assets/images/arrow.png"
           width="130"
           height="58"
           class="teachers-usefull__arrow"
           alt="Полезно педагогам">
      <p class="teachers-usefull__text">
        полезно педагогам
      </p>
      <button
        class="teachers-usefull__button"
        @click="$emit('goToNextPage', 'BBlinks')"
      >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
      </button>
    </div>
    <div class="teachers-items">
      <div class="teachers-items__item teachers-items__speech">
        речевое развитие
      </div>
      <div class="teachers-items__item teachers-items__discovery">
        познавательное развитие
      </div>
      <div class="teachers-items__item teachers-items__art">
        художественно- эстетическое развитие
      </div>
      <div class="teachers-items__item teachers-items__social">
        социально- коммуника- тивное развитие
      </div>
      <div class="teachers-items__item teachers-items__catalog">
        Получите&nbsp;<span class="teachers-items__large">каталог </span>
        <font-awesome-icon
          class="teachers-items__mobile"
          :icon="['fas', 'download']"
        />
        <span class="teachers-items__nomobile">рекомендованной продукции</span>
      </div>

    <button class="teachers-items__download">
      <img src="~/assets/images/arrow_download.svg" width="49" height="49" alt="Скачать каталог">
    </button>
    </div>
    <button
      class="teachers-mobile__button"
      @click="$emit('goToNextPage', 'BBlinks')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBteachers',
};
</script>
