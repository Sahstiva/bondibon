<template>
  <section class="evamoda">
    <div class="evamoda-beauty">
      <div class="evamoda-beauty__wrapper">
        <p class="evamoda-beauty__text">
          красота<br>спасёт мир!
        </p>
        <p class="evamoda-beauty__text evamoda-beauty__nomobile">
          косметика детская, наборы для создания украшений, сумочки и аксессуары
        </p>
      </div>
    </div>
    <div class="evamoda-items">
      <div class="evamoda-items__item evamoda-items__evamoda">
        eva moda косметика детская
      </div>
      <div class="evamoda-items__item evamoda-items__bodyart">
        боди-арт, переводные татуировки,<br>дизайн ногтей
      </div>
      <div class="evamoda-items__item evamoda-items__accesoires">
        наборы для создания украшений и аксессуаров
      </div>
      <div class="evamoda-items__item evamoda-items__umbrella">
        десткие зонтики и сумочки
      </div>
      <div class="evamoda-items__item evamoda-items__bags">
        сумки для раскрашивания
      </div>
    </div>
    <button
        class="evamoda-button"
        @click="$emit('goToNextPage', 'BBtablegames')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBevamoda',
};
</script>
