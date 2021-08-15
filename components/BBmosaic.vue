<template>
  <section class="mosaic">
    <div class="mosaic-smart">
      <div class="mosaic-smart--wrapper">
        <p class="mosaic-smart--text">
          интеллект на кончиках пальцев
        </p>
        <p class="mosaic-smart--text mosaic-smart--nomobile">
          наборы для творчества и рукоделия
        </p>
          <button
            class="mosaic-smart--button"
            @click="$emit('goToNextPage', 'BBconstructor')"
          >
            <img src="~/assets/images/arrow_down.svg" alt="Далее">
          </button>
      </div>
    </div>
    <div class="mosaic-items">
      <div class="mosaic-items--item mosaic-items--aquatermo">
        аква- и термо- мозаики
      </div>
      <div class="mosaic-items--item mosaic-items--engraving">
        гравюры, фрески и аппликации
      </div>
      <div class="mosaic-items--item mosaic-items--modeling">
        поделки, лепка, выжигание
      </div>
      <div class="mosaic-items--item mosaic-items--drawing">
        рисование, роспись, раскрашивание
      </div>
      <div class="mosaic-items--item mosaic-items--knitting">
        рукоделие: вязание, шитьё, вышивка, плетение
      </div>
    </div>
    <button
        class="mosaic-mobile--button"
        @click="$emit('goToNextPage', 'BBconstructor')"
    >
      <img src="~/assets/images/arrow_down.svg" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBmosaic',
};
</script>
