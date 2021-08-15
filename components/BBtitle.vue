<template>
  <section class="title">
    <div class="title-benefit">
      <div class="title-benefit--item title-benefit--cyan">
        <img src="~/assets/images/basket.svg" class="title-benefit--basket">
        <div class="title-benefit--textbox">
          <p class="title-benefit--litera">
            5000
          </p>
          <p class="title-benefit--text">
            наименований
          </p>
          <p class="title-benefit--text">
            игр и игрушек
          </p>
        </div>
      </div>
      <div class="title-benefit--item title-benefit--orange">
        <img src="~/assets/images/cake.svg" class="title-benefit--cake">
        <div class="title-benefit--textbox">
          <p class="title-benefit--litera">
            15 лет
          </p>
          <p class="title-benefit--text">
            бренду
          </p>
        </div>
      </div>
      <div class="title-benefit--item title-benefit--magenta">
        <img src="~/assets/images/medal.svg" class="title-benefit--medal">
        <div class="title-benefit--textbox">
          <p class="title-benefit--litera">
            Выбор
          </p>
          <p class="title-benefit--text">
            педагогов
          </p>
          <p class="title-benefit--text">
            и психологов
          </p>
        </div>
      </div>
    </div>
    <div class="title-learnmore">
      <div class="title-learnmore--wrapper">
        <p class="title-learnmore--text">
          узнай больше о полезных играх
        </p>
      </div>
      <button
        class="title-learnmore--button"
        @click="$emit('goToNextPage', 'BBslider')"
      >
        <img src="~/assets/images/arrow_down.svg" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BBtitle',
};
</script>
