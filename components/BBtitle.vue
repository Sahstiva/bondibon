<template>
  <section class="title">
    <h2 class="visually-hidden">5000 наименований игр и игрушек</h2>
    <div class="title-benefit">
      <div class="title-benefit__item title-benefit__cyan">
        <img
            src="~/assets/images/basket.svg"
            width="44" height="45"
            class="title-benefit__basket"
            alt="5000 наименований игр и игрушек">
        <div class="title-benefit__textbox">
          <p class="title-benefit__litera">
            5000
          </p>
          <p class="title-benefit__text">
            наименований
          </p>
          <p class="title-benefit__text">
            игр и игрушек
          </p>
        </div>
      </div>
      <div class="title-benefit__item title-benefit__orange">
        <img
            src="~/assets/images/cake.svg"
            width="52" height="50"
            class="title-benefit__cake"
            alt="15 лет бренду">
        <div class="title-benefit__textbox">
          <p class="title-benefit__litera">
            15 лет
          </p>
          <p class="title-benefit__text">
            бренду
          </p>
        </div>
      </div>
      <div class="title-benefit__item title-benefit__magenta">
        <img
            src="~/assets/images/medal.svg"
            width="47" height="54"
            class="title-benefit__medal"
            alt="Выбор педагогов">
        <div class="title-benefit__textbox">
          <p class="title-benefit__litera">
            Выбор
          </p>
          <p class="title-benefit__text">
            педагогов
          </p>
          <p class="title-benefit__text">
            и психологов
          </p>
        </div>
      </div>
    </div>
    <div class="title-learnmore">
      <div class="title-learnmore__wrapper">
        <p class="title-learnmore__text">
          узнай больше о полезных играх
        </p>
      </div>
      <button
        class="title-learnmore__button"
        @click="$emit('goToNextPage', '20gifts')"
      >
        <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BBtitle',
};
</script>
