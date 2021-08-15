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
