<template>
  <section class="knowledge">
    <div class="knowledge-title">
      <p class="knowledge-title--title">знания сила!</p>
      <p class="knowledge-title--subtitle">познавательные и обучающие игры для развития и подготовки к школьным заданиям</p>
    </div>
    <div class="knowledge-grid">
      <div class="knowledge-item">
        <img src="~/assets/images/grid_playthinklearn.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">ИГРАЙ, ДУМАЙ, УЧИСЬ ИГРАЙ, ДУМАЙ, ТВОРИ</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_smartowl.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">УМНАЯ СОВА</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_learneasy.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">ОБУЧЕНИЕ ЛЕГКО И ИНТЕРЕСНО</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_smartgames.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">SMARTGAMES</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_cultivategames.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">РАЗВИВАЮЩИЕ И ОБУЧАЮЩИЕ ИГРЫ</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_roadgames.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">МИНИ-ИГРЫ В ДОРОГУ</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_bondilogika.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">СЕРИЯ БОНДИЛОГИКА</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_familygames.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">НАСТОЛЬНЫЕ СЕМЕЙНЫЕ ИГРЫ</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_woodengames.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">игры из дерева</p>
      </div>
      <div class="knowledge-item">
        <img src="~/assets/images/grid_mosaic.png" alt="Игры из дерева" class="knowledge-item--img">
        <p class="knowledge-item--text">МОЗАИКИ И ПАЗЛЫ BABY YOU</p>
      </div>
    </div>
    <button class="knowledge-button" @click="$emit('goToNextPage', 'BBmicroscope')">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56px" height="56px">
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M39.918,27.973 C40.776,28.859 40.776,30.296 39.918,31.182 L28.862,42.594 C28.003,43.480 26.611,43.480 25.753,42.594 C24.894,41.708 24.894,40.271 25.753,39.384 L36.808,27.973 C37.667,27.086 39.059,27.086 39.918,27.973 Z"/>
        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
              d="M14.114,28.070 C14.976,27.181 16.373,27.181 17.235,28.070 L28.335,39.527 C29.197,40.417 29.197,41.860 28.335,42.749 C27.473,43.639 26.075,43.639 25.213,42.749 L14.114,31.292 C13.252,30.403 13.252,28.960 14.114,28.070 Z"/>
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M27.169,13.124 C28.396,13.116 29.384,14.124 29.376,15.374 L29.276,31.474 C29.268,32.725 28.267,33.745 27.041,33.753 C25.814,33.761 24.825,32.754 24.833,31.503 L24.933,15.403 C24.941,14.152 25.942,13.132 27.169,13.124 Z"/>
        <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
              d="M27.000,2.812 C40.531,2.812 51.500,13.781 51.500,27.312 C51.500,40.843 40.531,51.812 27.000,51.812 C13.469,51.812 2.500,40.843 2.500,27.312 C2.500,13.781 13.469,2.812 27.000,2.812 Z"/>
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  name: "BBknow"
}
</script>

<style lang="scss" scoped>
.knowledge {
  background-image: url('~assets/images/background_knowledge.png');
  background-position: 50px top;
  background-repeat: no-repeat;
  width: 1920px;
  min-height: 880px;
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
    background-position: center top;
  }
  &-title {
    padding: 250px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &--title, &--subtitle {
      font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
      font-weight: bold;
      color: #ffffff;
      text-transform: uppercase;
      margin: 0 25px 0 25px;
    }
    &--title {
      font-size: 45px;
    }
    &--subtitle {
      font-size: 17px;
      width: 350px;
    }
  }
  &-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 950px;
    margin: 20px 0 0 0;
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
      max-width: 150px;
    }
  }
  &-button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>