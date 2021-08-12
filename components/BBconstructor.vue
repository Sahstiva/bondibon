<template>
  <section class="constructor">
    <div class="constructor-wrapper--img">
      <img
        src="~/assets/images/constructor.png"
        alt="Микроскопы"
        class="constructor-img"
      >
      <div class="constructor-wrapper--wrapper">
        <p class="constructor-text">
          мысли<br>конструктивно
        </p>
        <p class="constructor-text constructor-text--small">
          конструкторы и робототехника,<br>сборные модели, 3d пазлы
        </p>
        <div class="constructor-button--wrapper">
          <button
            class="constructor-button"
            @click="$emit('goToNextPage', 'BBevamoda')"
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
                fill="#CA042C"
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
          <!--          <button class="constructor-button constructor-button&#45;&#45;up" @click="$emit('goToNextPage', 'BBmosaic')">-->
          <!--            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">-->
          <!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>-->
          <!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#CA042C"/>-->
          <!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>-->
          <!--              <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>-->
          <!--            </svg>-->
          <!--          </button>-->
        </div>
      </div>
    </div>
    <div class="constructor-wrapper--items">
      <div class="constructor-item constructor-item--robots">
        наборы робототехники
      </div>
      <div class="constructor-item constructor-item--magnit">
        магнитные,<br>блочные и игольчатые конструкторы
      </div>
      <div class="constructor-item constructor-item--sqrew">
        конструкторы с отвёрткой,<br>с шестеренками
      </div>
      <div class="constructor-item constructor-item--puzzles">
        3d пазлы
      </div>
      <div class="constructor-item constructor-item--models">
        сборные модели
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BBconstructor',
};
</script>

<style lang="scss" scoped>
.constructor {
  background-image: url('~assets/images/background_constructor.png');
  background-position: center top;
  background-repeat: no-repeat;
  width: 1920px;
  height: 700px;
  z-index: -3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  @media (max-width: 1920px) {
    width: 100vw;
    background-position: center top;
  }
  @media (max-width: 1023px) {
    background-image: url('~assets/mobile/background_constructor_mobile.png');
    background-position: center top;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 480px;
    height: 802px;
  }
  &-img {
    @media (max-width: 1023px) {
      display: none;
    }
  }
  &-text {
    font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
    font-weight: bold;
    font-size: 25px;
    text-transform: uppercase;
    text-align: left;
    color: #d2beae;
    max-width: 300px;
    margin: 0;
    @media (max-width: 1023px) {
      text-align: center;
    }
    &--small {
      font-size: 15px;
      @media (max-width: 1023px) {
        display: none;
      }
    }
  }

  &-icon {
    margin: 0 0 0 100px;
  }

  &-wrapper {
    &--img {
      margin: 140px 0 0 calc(1920px/2 - 987px/2 - 372px);
      width: 1050px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1920px) {
        margin: 140px 0 0 calc(50vw - 987px/2 - 471px);
      }
      @media (max-width: 1600px) {
        margin: 140px 0 0 calc(50vw - 987px/2 - 310px);
      }
      @media (max-width: 1440px) {
        margin: 140px 0 0 calc(50vw - 987px/2 - 231px);
      }
      @media (max-width: 1280px) {
        margin: 140px 0 0 calc(50vw - 987px/2 - 152px);
      }
      @media (max-width: 1024px) {
        margin: 140px 0 0 calc(50vw - 987px/2 - 23px);
        width: auto;
      }
      @media (max-width: 1023px) {
        width: unset;
        margin: 220px 0 10px 0;
      }
    }

    &--items {
      margin: -175px 0 0 0;
      display: grid;
      grid-template-columns: repeat(5, 170px);
      grid-column-gap: 30px;
      @media (max-width: 1023px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        margin: 0;
        width: 90%;
        max-width: 375px;
      }
    }

    &--wrapper {
      margin: -70px 0 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 1023px) {
        position: relative;
        margin: 120px 0 0 0;
      }
    }
  }
  &-item {
    border-radius: 50%;
    box-shadow: 6.709px 4.357px 0px 0px rgba(0, 0, 0, 0.09);
    width: 170px;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
    font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    @media (max-width: 1023px) {
      width: 100%;
      height: 47px;
      border-radius: 24px;
    }

    &--robots {
      background-color: #f9dd2f;
    }
    &--magnit {
      background-color: #f89826;
    }
    &--sqrew {
      background-color: #fab449;
    }
    &--puzzles {
      background-color: #fb651d;
    }
    &--models {
      background-color: #f73818;
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
        position: absolute;
        top: 375px;
      }
    }
  }
}
</style>
