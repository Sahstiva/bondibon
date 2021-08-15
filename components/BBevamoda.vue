<template>
  <section class="evamoda">
    <div class="evamoda-beauty">
      <div class="evamoda-beauty--wrapper">
        <p class="evamoda-beauty--text">
          красота<br>спасёт мир!
        </p>
        <p class="evamoda-beauty--text evamoda-beauty--nomobile">
          косметика детская, наборы для создания украшений, сумочки и аксессуары
        </p>
          <button
              class="evamoda-beauty--button"
              @click="$emit('goToNextPage', 'BBtablegames')"
          >
            <img src="~/assets/images/arrow_down.svg" alt="Далее">
          </button>
      </div>
    </div>
    <div class="evamoda-items">
      <div class="evamoda-items--item evamoda-items--evamoda">
        eva moda косметика детская
      </div>
      <div class="evamoda-items--item evamoda-items--bodyart">
        боди-арт, переводные татуировки,<br>дизайн ногтей
      </div>
      <div class="evamoda-items--item evamoda-items--accesoires">
        наборы для создания украшений и аксессуаров
      </div>
      <div class="evamoda-items--item evamoda-items--umbrella">
        десткие зонтики и сумочки
      </div>
      <div class="evamoda-items--item evamoda-items--bags">
        сумки для раскрашивания
      </div>
    </div>
    <button
        class="evamoda-mobile--button"
        @click="$emit('goToNextPage', 'BBtablegames')"
    >
      <img src="~/assets/images/arrow_down.svg" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBevamoda',
};
</script>

