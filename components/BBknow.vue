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
          alt="игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          играй, думай, учись<br>играй, думай, твори
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_smartowl.png"
          alt="игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          умная сова
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_learneasy.png"
          alt="игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          обучение легко и интересно
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_smartgames.png"
          alt="игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          smartgames
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_cultivategames.png"
          alt="игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          развивающие и обучающие игры
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_roadgames.png"
          alt="игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          мини-игры в дорогу
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_bondilogika.png"
          alt="игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          серия бондилогика
        </p>
      </div>
      <div class="knowledge-item">
        <img
          src="~/assets/images/grid_familygames.png"
          alt="игры из дерева"
          class="knowledge-item--img"
        >
        <p class="knowledge-item--text">
          настольные семейные игры
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
          мозаики и пазлы<br>baby you
        </p>
      </div>
    </div>
    <div class="knowledge-button--wrapper">
      <button
        class="knowledge-button"
        @click="$emit('goToNextPage', 'BBmicroscope')"
      >
        <img src="~/assets/images/arrow_white.svg" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BBknow',
};
</script>

<style lang="scss" scoped>
@import "~assets/style/style.scss";
.knowledge {
  background-image: url('~assets/images/background_knowledge.png');
  background-position: center top;
  background-repeat: no-repeat;
  width: 1920px;
  height: 700px;
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
    margin: 100px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
      flex-direction: column;
      max-width: 375px;
    }
    &--title, &--subtitle {
      @include font-Rotonda;
      color: #ffffff;
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
      width: 90%;
      max-width: 330px;
      grid-template-columns: 1fr;
      grid-row-gap: 10px;
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1023px) {
      height: 45px;
      background-color: #ffffff;
      border-radius: 20px;
      margin: 0;
      justify-content: center;
    }

    &--text {
      color: #ffffff;
      @include font-desktop;
      max-width: 200px;
      @media (max-width: 1023px) {
        color: #31afa4;
        margin: 0;
        max-width: 330px;
        @include font-mobile;
      }
    }
    &--img {
      @media (max-width: 1023px) {
        display: none;
        visibility: hidden;
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

    &--wrapper {
      margin: 0 200px 0 0;
      @media (max-width: 1023px) {
        margin: 10px 0 0 0;
      }
    }
  }
}
</style>
