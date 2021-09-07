<template>
  <section class="links">
    <h2 class="visually-hidden">Подписывайтесь на наш инстаграм, смотрите видео на канале</h2>
    <div class="links-wrapper">
      <div class="links-item__opinion">
        интересует мнение<br>профессионалов?
      </div>
      <a href="https://www.instagram.com/bondibon_games/"
         class="links-item__instagram"
         target="_blank"
         rel="noreferrer"
      >
        <div class="links-item__wrapper">
          <img
              width="92"
              height="92"
            src="~/assets/images/links_instagram.jpg?webp"
            alt="Подписывайтесь на наш инстаграм!"
          >
        </div>
      </a>
      <div class="links-item__come">
        заходите на наш<br>youtube канал
      </div>
      <a class="links-item__feedback"
         href="https://www.youtube.com/playlist?list=PL7IgAu-GiRDDF7mZEouK9dKjwG_XkZT8y"
         target="_blank"
         rel="noreferrer"
      >
        cмотрите отзывы практикующих педагогов
      </a>
      <a class="links-item__youtube"
         href="https://www.youtube.com/playlist?list=PL7IgAu-GiRDDF7mZEouK9dKjwG_XkZT8y"
         target="_blank"
         rel="noreferrer"
      >
          <div class="links-item__wrapper">
              <img
                  width="89"
                  height="63"
                src="~/assets/images/links_youtube.png?webp"
                alt="Cмотрите отзывы практикующих педагогов"
              >
         </div>
      </a>
      <a href="https://www.instagram.com/bondibon_games/" class="links-item__subscribe">
        <p>подписывайтесь на наш инстаграм!</p>
      </a>
      <div class="links-item__learn">
        <p>Узнавайте первыми о новинках, акциях и розыгрышах призов от бренда</p>
      </div>
      <a href="https://www.youtube.com/channel/UC9F9bwqIL0xBrPL27MrIYvA"
         class="links-item__bgames"
         target="_blank"
         rel="noreferrer"
      >
        <div class="links-item__wrapper">
          <div class="links-item__redcircle">
            <img
                width="120"
                height="41"
              class="links-item__img"
              src="~/assets/images/links_bondibongames.png?webp"
              alt="Заходите на наш youtube канал"
            >
          </div>
        </div>
      </a>
      <a href="https://gratwest.ru"
         class="links-item__wholesale"
         target="_blank"
         rel="noreferrer"
      >
        <p class="links-item__text">
          оптовые закупки
        </p>
        <img
            class="links-item__right"
            src="~/assets/images/arrow_white.svg"
            width="49"  height="49" alt="Далее">
      </a>
      <button class="links-item__button" @click="$emit('goToNextPage', 'BBmap')">
        <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
      </button>
      <a href="https://www.youtube.com/channel/UC9F9bwqIL0xBrPL27MrIYvA"
         class="links-item__video"
         target="_blank"
         rel="noreferrer"
      >
        <p class="links-item__small">
          Веселые и увлекательные видео для детей, подростков и их родителей
        </p>
      </a>
    </div>
    <button class="links-down" @click="$emit('goToNextPage', 'BBmap')">
      <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBlinks',
};
</script>
