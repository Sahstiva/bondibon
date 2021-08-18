<template>
  <section class="newyear">
    <div class="newyear-title">
      <p class="newyear-title__title">
        новый год<br>к нам мчится!
      </p>
      <p class="newyear-title__subtitle">
        новогодние наборы для творчества, ёлочные игрушки hand-made, настольные игр
      </p>
      <p class="newyear-title__mobile">
        новогоднее творчество, игры, hand-made
      </p>
    </div>
    <div class="newyear-grid">
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_roadgames.png"
          alt="Мини-игры в дорогу новогодние"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          мини-игры в дорогу новогодние
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_ceramic.png"
          alt="Керамические ёлочные украшения для росписи"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          керамические ёлочные украшения для росписи
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_felt.png"
          alt="Наборы для создания ёлочных игрушек из фетра"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          наборы для создания ёлочных игрушек из фетра
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_compact.png"
          alt="Самая компактная ёлка"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          самая компактная ёлка
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_crystall.png"
          alt="Новогодние наборы для выращивани кристаллов"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          новогодние наборы для выращивани кристаллов
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_cups.png"
          alt="Керамические кружки и сувениры для росписи"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          керамические кружки и сувениры для росписи
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_aquatermo.png"
          alt="Аква- и термо- мозаики новогодние"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          аква- и термо- мозаики новогодние
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_cards.png"
          alt="Новогодние открытки своими руками"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          новогодние открытки своими руками
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_cultivate.png"
          alt="Развивающие игры под ёлку"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          развивающие игры под ёлку
        </p>
      </div>
      <div class="newyear-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/newyear_3dxmaxtree.png"
          alt="3d ёлочки деревянные"
          class="newyear-item__img"
        >
        <p class="newyear-item__text">
          3d ёлочки деревянные
        </p>
      </div>
    </div>
    <div class="newyear-button">
      <button
        class="newyear-button__button"
        @click="$emit('goToNextPage', 'BBteachers')"
      >
        <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BBnewyear',
};
</script>
