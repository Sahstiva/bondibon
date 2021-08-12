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
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z"
            fill="#E2BD9E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z"
            fill="#FFFFFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z"
            fill="#E2BD9E"
          />
          <path
            d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z"
            fill="black"
            fill-opacity="0.01"
            stroke="#E2BD9E"
            stroke-width="4"
          />
        </svg>
      </button>
      <!--      <button class="newyear-button newyear-button&#45;&#45;up" @click="$emit('goToNextPage', 'BBgift')">-->
      <!--        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">-->
      <!--          <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>-->
      <!--          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#FFFFFF"/>-->
      <!--          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>-->
      <!--          <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>-->
      <!--        </svg>-->
      <!--      </button>-->
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
  z-index: -2;
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
    z-index: 2;
    padding: 0;
    width: 49px;
    height: 49px;
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
