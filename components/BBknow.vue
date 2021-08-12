<template>
  <section class="knowledge">
    <div class="knowledge-title">
      <p class="knowledge-title--title">
        знания сила!
      </p>
      <p class="knowledge-title--subtitle">
        познавательные и обучающие игры<br>для развития и подготовки к школьным заданиям
      </p>
    </div>
    <div class="knowledge-grid">
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_playthinklearn.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          ИГРАЙ, ДУМАЙ, УЧИСЬ ИГРАЙ, ДУМАЙ, ТВОРИ
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_smartowl.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          УМНАЯ СОВА
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_learneasy.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          ОБУЧЕНИЕ ЛЕГКО И ИНТЕРЕСНО
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_smartgames.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          SMARTGAMES
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_cultivategames.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          РАЗВИВАЮЩИЕ И ОБУЧАЮЩИЕ ИГРЫ
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_roadgames.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          МИНИ-ИГРЫ В ДОРОГУ
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_bondilogika.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          СЕРИЯ БОНДИЛОГИКА
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_familygames.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          НАСТОЛЬНЫЕ СЕМЕЙНЫЕ ИГРЫ
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_woodengames.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          игры из дерева
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_mosaic.png"
          alt="Игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          мозаики и пазлы baby you
        </p>
      </div>
    </div>
    <div class="knowledge-button--wrapper">
      <button
        class="knowledge-button"
        @click="$emit('goToNextPage', 'BBmicroscope')"
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
      <!--      <button class="knowledge-button knowledge-button&#45;&#45;up" @click="$emit('goToNextPage', 'BBslider')">-->
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
  name: 'BBknow',
};
</script>

<style lang="scss" scoped>
.knowledge {
  background-image: url('~assets/images/background_knowledge.png');
  background-position: center top;
  background-repeat: no-repeat;
  width: 1920px;
  height: 700px;
  z-index: -2;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1920px) {
    width: 100vw;
    background-position: center top;
  }
  @media (max-width: 1023px) {
    background-image: url('~assets/mobile/background_know_mobile.png');
    background-position: center top;
    background-repeat: no-repeat;
    max-width: 480px;
    height: 804px;
  }
  &-title {
    padding: 120px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
      flex-direction: column;
      max-width: 375px;
    }
    &--title, &--subtitle {
      font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
      font-weight: bold;
      color: #ffffff;
      text-transform: uppercase;
      margin: 0 25px 0 25px;
    }
    &--title {
      font-size: 45px;
      @media (max-width: 1023px) {
        font-size: 25px;
      }
    }
    &--subtitle {
      font-size: 17px;
      width: 350px;
      @media (max-width: 1023px) {
        white-space: nowrap;
        overflow: hidden;
        max-height: 20px;
        text-align: center;
      }
    }
  }
  &-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 950px;
    margin: 20px 0 0 0;
    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      max-width: 375px;
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1023px) {
      height: 41px;
      width: 90%;
      max-width: 326px;
      background-color: #ffffff;
      border-radius: 20px;
      margin: 0 0 20px 0;
    }

    &--text {
      color: #ffffff;
      font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
      font-weight: bold;
      font-size: 13px;
      line-height: 13px;
      text-transform: uppercase;
      text-align: center;
      max-width: 150px;
      @media (max-width: 1023px) {
        color: #31afa4;
      }
    }
    &--img {
      @media (max-width: 1023px) {
        display: none;
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
    }
  }
}
</style>
