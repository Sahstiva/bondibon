<template>
  <section class="newyear">
    <div class="newyear-title">
      <p class="newyear-title--title">
        новый год<br>к нам мчится!
      </p>
      <p class="newyear-title--subtitle">
        новогодние наборы для творчества, ёлочные игрушки hand-made, настольные игр
      </p>
      <p class="newyear-title--mobile">
        новогоднее творчество, игры, hand-made
      </p>
    </div>
    <div class="newyear-grid">
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_roadgames.png"
          alt="Мини-игры в дорогу новогодние"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          мини-игры в дорогу новогодние
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_ceramic.png"
          alt="Керамические ёлочные украшения для росписи"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          керамические ёлочные украшения для росписи
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_felt.png"
          alt="Наборы для создания ёлочных игрушек из фетра"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          наборы для создания ёлочных игрушек из фетра
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_compact.png"
          alt="Самая компактная ёлка"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          самая компактная ёлка
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_crystall.png"
          alt="Новогодние наборы для выращивани кристаллов"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          новогодние наборы для выращивани кристаллов
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_cups.png"
          alt="Керамические кружки и сувениры для росписи"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          керамические кружки и сувениры для росписи
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_aquatermo.png"
          alt="Аква- и термо- мозаики новогодние"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          аква- и термо- мозаики новогодние
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_cards.png"
          alt="Новогодние открытки своими руками"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          новогодние открытки своими руками
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_cultivate.png"
          alt="Развивающие игры под ёлку"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          развивающие игры под ёлку
        </p>
      </div>
      <div class="newyear-item">
        <img
          src="~/assets/images/newyear_3dxmaxtree.png"
          alt="3d ёлочки деревянные"
          class="newyear-item--img"
        >
        <p class="newyear-item--text">
          3d ёлочки деревянные
        </p>
      </div>
    </div>
    <div class="newyear-button--wrapper">
      <button
        class="newyear-button"
        @click="$emit('goToNextPage', 'BBteachers')"
      >
        <img src="~/assets/images/arrow_white.svg" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BBnewyear',
};
</script>

<style lang="scss" scoped>
.newyear {
  background-image: url('~assets/images/background_newyear.png');
  background-position: center top;
  background-repeat: no-repeat;
  width: 1920px;
  height: 700px;
  margin: 0;
  opacity: 1;
  transform: translateZ(0);
  perspective: 1000px;
  backface-visibility: hidden;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1920px) {
    width: 100vw;
  }
  @media (max-width: 1023px) {
    background-image: url('~assets/mobile/background_newyear_mobile.png');
    background-position: center top;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 480px;
    height: 1580px;
  }

  &-title {
    padding: 90px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
    &--title, &--subtitle, &--mobile {
      font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
      font-weight: bold;
      color: #ffffff;
      text-transform: uppercase;
      margin: 0 25px 0 25px;
    }
    &--title {
      font-size: 42px;
      @media (max-width: 1023px) {
        font-size: 32px;
        text-align: center;
      }
    }
    &--mobile {
      display: none;
      @media (max-width: 1023px) {
        display: inline;
        font-size: 24px;
        text-align: center;
        margin: 20px 0 10px 0;
        max-width: 350px;
      }
    }
    &--subtitle {
      font-size: 24px;
      width: 450px;
      @media (max-width: 1023px) {
        display: none;
      }
    }
  }
  &-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 950px;
    margin: 20px 0 0 0;
    @media (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 20px;
      width: 90%;
      max-width: 375px;
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &--text {
      color: #ffffff;
      font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
      font-weight: bold;
      font-size: 13px;
      line-height: 13px;
      text-transform: uppercase;
      text-align: center;
      max-width: 200px;
      margin: 10px 0 10px 0;
    }
    &--img {
      @media (max-width: 480px) {
        width: 152.5px;
        height: 150px;
      }
    }
  }
  &-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 49px;
    height: 49px;
    &:hover {
      transform: scale(1.1) translateY(5px);
      transition: all 0.3s ease-in-out;
    }
    &--right {
      transform: rotate(270deg);
    }
    &--up {
      transform: rotate(180deg);
    }
    &--wrapper {
      display: flex;
      flex-direction: row;
      width: 49px;
      justify-content: space-between;
      @media (max-width: 1023px) {
        margin: 30px 0 0 0;
      }
    }
  }
}
</style>
