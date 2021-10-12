<template>
  <section class="teachers">
    <h2 class="visually-hidden">Полезно педагогам</h2>
    <div class="teachers-usefull">
      <picture class="teachers-usefull__arrow">
        <source data-srcset="~/assets/images/arrow.png?webp" type="image/webp">
          <img data-src="~/assets/images/arrow.png"
               class="lazyload"
               loading="lazy"
               width="130"
               height="58"
               alt="Полезно педагогам">
      </picture>
      <p class="teachers-usefull__text">
        полезно педагогам
      </p>
    </div>
    <div class="teachers-items">
      <a
          onclick="ym(85182334,'reachGoal','outbound_link');return true;"
          class="teachers-items__item teachers-items__speech"
          href="https://www.bondibon.ru/catalog/rechevoe_razvitie/"
          rel="noreferrer"
          target="_blank">
        речевое развитие
      </a>
      <a
          onclick="ym(85182334,'reachGoal','outbound_link');return true;"
          class="teachers-items__item teachers-items__discovery"
          href="https://www.bondibon.ru/catalog/poznavatelnoe_razvitie/"
          rel="noreferrer"
          target="_blank"
      >
          познавательное развитие
      </a>
      <a
          onclick="ym(85182334,'reachGoal','outbound_link');return true;"
          class="teachers-items__item teachers-items__art"
          href="https://www.bondibon.ru/catalog/khudozhestvenno_esteticheskoe_razvitie/"
          rel="noreferrer"
          target="_blank"
      >
        художественно- эстетическое развитие
      </a>
      <a
          onclick="ym(85182334,'reachGoal','outbound_link');return true;"
          class="teachers-items__item teachers-items__social"
          href="https://www.bondibon.ru/catalog/sotsialno_kommunikativnoe_razvitie/"
          rel="noreferrer"
          target="_blank"
      >
        социально-коммуникативное развитие
      </a>
      <a :href="linkCatalog" target="_blank" class="teachers-items__item teachers-items__catalog">
        Получите&nbsp;<span class="teachers-items__large">каталог </span>
        <font-awesome-icon
          class="teachers-items__mobile"
          :icon="['fas', 'download']"
        />
        <span class="teachers-items__nomobile">рекомендованной продукции</span>
      </a>

    <a :href="linkCatalog" target="_blank" class="teachers-items__download">
      <img src="~/assets/images/arrow_download.svg" width="49" height="49" alt="Скачать каталог">
    </a>
    </div>
    <button
      class="teachers-button"
      @click="$emit('goToNextPage', 'links')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBteachers',
  data() {
    return {
      linkCatalog: process.env.DOWNLOAD_LINK,
    };
  },
};
</script>
