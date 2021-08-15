<template>
  <section class="constructor">
    <div class="constructor-think">
      <div class="constructor-think--wrapper">
        <p class="constructor-think--text">
          мысли<br>конструктивно
        </p>
        <p class="constructor-think--text constructor-think--nomobile">
          конструкторы и робототехника,<br>сборные модели, 3d пазлы
        </p>
          <button
            class="constructor-think--button"
            @click="$emit('goToNextPage', 'BBevamoda')"
          >
            <img src="~/assets/images/arrow_down.svg" alt="Далее">
          </button>
      </div>
    </div>
    <div class="constructor-items">
      <div class="constructor-items--item constructor-items--robots">
        наборы робототехники
      </div>
      <div class="constructor-items--item constructor-items--magnit">
        магнитные,<br>блочные и игольчатые конструкторы
      </div>
      <div class="constructor-items--item constructor-items--sqrew">
        конструкторы с отвёрткой,<br>с шестеренками
      </div>
      <div class="constructor-items--item constructor-items--puzzles">
        3d пазлы
      </div>
      <div class="constructor-items--item constructor-items--models">
        сборные модели
      </div>
    </div>
    <button
        class="constructor-mobile--button"
        @click="$emit('goToNextPage', 'BBevamoda')"
    >
      <img src="~/assets/images/arrow_down.svg" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBconstructor',
};
</script>
