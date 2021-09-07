<template>
  <section class="teachers">
    <h2 class="visually-hidden">Полезно педагогам</h2>
    <div class="teachers-usefull">
      <img src="~/assets/images/arrow.png"
           width="130"
           height="58"
           class="teachers-usefull__arrow"
           alt="Полезно педагогам">
      <p class="teachers-usefull__text">
        полезно педагогам
      </p>
    </div>
    <div class="teachers-items">
      <a
          class="teachers-items__item teachers-items__speech"
          href="https://www.bondibon.ru/catalog/rechevoe_razvitie/"
          rel="noreferrer"
          target="_blank">
        речевое развитие
      </a>
      <a
          class="teachers-items__item teachers-items__discovery"
          href="https://www.bondibon.ru/catalog/poznavatelnoe_razvitie/"
          rel="noreferrer"
          target="_blank"
      >
          познавательное развитие
      </a>
      <a
          class="teachers-items__item teachers-items__art"
          href="https://www.bondibon.ru/catalog/khudozhestvenno_esteticheskoe_razvitie/"
          rel="noreferrer"
          target="_blank"
      >
        художественно- эстетическое развитие
      </a>
      <a
          class="teachers-items__item teachers-items__social"
          href="https://www.bondibon.ru/catalog/sotsialno_kommunikativnoe_razvitie/"
          rel="noreferrer"
          target="_blank"
      >
        социально-коммуникативное развитие
      </a>
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
      class="teachers-button"
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
