<template>
  <section class="mosaic">
    <div class="mosaic-smart">
      <div class="mosaic-smart__wrapper">
        <p class="mosaic-smart__text">
          интеллект на кончиках пальцев
        </p>
        <p class="mosaic-smart__text mosaic-smart__nomobile">
          наборы для творчества и рукоделия
        </p>
          <button
            class="mosaic-smart__button"
            @click="$emit('goToNextPage', 'BBconstructor')"
          >
            <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
          </button>
      </div>
    </div>
    <div class="mosaic-items">
      <div class="mosaic-items__item mosaic-items__aquatermo">
        аква- и термо- мозаики
      </div>
      <div class="mosaic-items__item mosaic-items__engraving">
        гравюры, фрески и аппликации
      </div>
      <div class="mosaic-items__item mosaic-items__modeling">
        поделки, лепка, выжигание
      </div>
      <div class="mosaic-items__item mosaic-items__drawing">
        рисование, роспись, раскрашивание
      </div>
      <div class="mosaic-items__item mosaic-items__knitting">
        рукоделие: вязание, шитьё, вышивка, плетение
      </div>
    </div>
    <button
        class="mosaic-mobile__button"
        @click="$emit('goToNextPage', 'BBconstructor')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBmosaic',
};
</script>
