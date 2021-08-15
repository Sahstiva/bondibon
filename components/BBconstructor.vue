<template>
  <section class="constructor">
    <div class="constructor-think">
      <div class="constructor-think__wrapper">
        <p class="constructor-think__text">
          мысли<br>конструктивно
        </p>
        <p class="constructor-think__text constructor-think__nomobile">
          конструкторы и робототехника,<br>сборные модели, 3d пазлы
        </p>
          <button
            class="constructor-think__button"
            @click="$emit('goToNextPage', 'BBevamoda')"
          >
            <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
          </button>
      </div>
    </div>
    <div class="constructor-items">
      <div class="constructor-items__item constructor-items__robots">
        наборы робототехники
      </div>
      <div class="constructor-items__item constructor-items__magnit">
        магнитные,<br>блочные и игольчатые конструкторы
      </div>
      <div class="constructor-items__item constructor-items__sqrew">
        конструкторы с отвёрткой,<br>с шестеренками
      </div>
      <div class="constructor-items__item constructor-items__puzzles">
        3d пазлы
      </div>
      <div class="constructor-items__item constructor-items__models">
        сборные модели
      </div>
    </div>
    <button
        class="constructor-mobile__button"
        @click="$emit('goToNextPage', 'BBevamoda')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBconstructor',
};
</script>
