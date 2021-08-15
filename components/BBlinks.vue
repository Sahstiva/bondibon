<template>
  <section class="links">
    <div class="links-wrapper">
      <div class="links-item--opinion">
        интересует мнение<br>профессионалов?
      </div>
      <a href="https://www.instagram.com/bondibon_games/" class="links-item--instagram">
        <div class="links-item--wrapper">
          <img
            src="~/assets/images/links_instagram.jpg"
            alt="Подписывайтесь на наш инстаграм!"
          >
        </div>
      </a>
      <div class="links-item--come">
        заходите на наш<br>youtube канал
      </div>
      <div class="links-item--feedback">
        cмотрите отзывы практикующих педагогов
      </div>
      <div class="links-item--youtube">
        <div class="links-item--wrapper">
          <img
            src="~/assets/images/links_youtube.png"
            alt="Cмотрите отзывы практикующих педагогов"
          >
        </div>
      </div>
      <a href="https://www.instagram.com/bondibon_games/" class="links-item--subscribe">
        <p>подписывайтесь на наш инстаграм!</p>
      </a>
      <div class="links-item--learn">
        <p>Узнавайте первыми о новинках, акциях и розыгрышах призов от бренда</p>
      </div>
      <a href="https://www.youtube.com/channel/UC9F9bwqIL0xBrPL27MrIYvA" class="links-item--bgames">
        <div class="links-item--wrapper">
          <div class="links-item--redcircle">
            <img
              class="links-item--img"
              src="~/assets/images/links_bondibongames.png"
              alt="Заходите на наш youtube канал"
            >
          </div>
        </div>
      </a>
      <a href="https://gratwest.ru" class="links-item--wholesale">
        <p class="links-item--text">
          оптовые закупки
        </p>
        <img class="links-item--right" src="~/assets/images/arrow_white.svg" alt="Далее">
      </a>
      <button class="links-item--button" @click="$emit('goToNextPage', 'BBmap')">
        <img src="~/assets/images/arrow_white.svg" alt="Далее">
      </button>
      <a href="https://www.youtube.com/channel/UC9F9bwqIL0xBrPL27MrIYvA" class="links-item--video">
        <p class="links-item--small">
          Веселые и увлекательные видео для детей, подростков и их родителей
        </p>
      </a>
    </div>
    <button class="links-down" @click="$emit('goToNextPage', 'BBmap')">
      <img src="~/assets/images/arrow_white.svg" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBlinks',
};
</script>

