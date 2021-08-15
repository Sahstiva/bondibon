<template>
  <section class="knowledge">
    <div class="knowledge-title">
      <p class="knowledge-title__title">
        знания сила!
      </p>
      <p class="knowledge-title__subtitle">
        познавательные и обучающие игры<br>для развития и подготовки к школьным заданиям
      </p>
    </div>
    <div class="knowledge-grid">
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
            src="~/assets/images/grid_playthinklearn.png"
            alt="игры из дерева"
            class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          играй, думай, учись<br>играй, думай, твори
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_smartowl.png"
          alt="игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          умная сова
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_learneasy.png"
          alt="игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          обучение легко и интересно
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_smartgames.png"
          alt="игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          smartgames
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_cultivategames.png"
          alt="игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          развивающие и обучающие игры
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_roadgames.png"
          alt="игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          мини-игры в дорогу
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_bondilogika.png"
          alt="игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          серия бондилогика
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_familygames.png"
          alt="игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          настольные семейные игры
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_woodengames.png"
          alt="Игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          игры из дерева
        </p>
      </div>
      <div class="knowledge-item">
        <img
            width="176"
            height="173"
          src="~/assets/images/grid_mosaic.png"
          alt="Игры из дерева"
          class="knowledge-item__img"
        >
        <p class="knowledge-item__text">
          мозаики и пазлы<br>baby you
        </p>
      </div>
    </div>
    <div class="knowledge-button__wrapper">
      <button
        class="knowledge-button"
        @click="$emit('goToNextPage', 'BBmicroscope')"
      >
        <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BBknow',
};
</script>
