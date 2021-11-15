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
          <picture>
            <source data-srcset="~/assets/images/links_instagram.jpg?webp" type="image/webp">
              <img
                  class="lazyload"
                  loading="lazy"
                  width="92"
                  height="92"
                  data-src="~/assets/images/links_instagram.jpg"
                  alt="Подписывайтесь на наш инстаграм!"
              >
          </picture>
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
            <picture>
              <source data-srcset="~/assets/images/links_youtube.png?webp" type="image/webp">
              <img
                  class="lazyload"
                  loading="lazy"
                  width="89"
                  height="63"
                  data-src="~/assets/images/links_youtube.png"
                  alt="Cмотрите отзывы практикующих педагогов"
              >
            </picture>
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
            <picture>
              <source data-srcset="~/assets/images/links_bondibongames.png?webp" type="image/webp">
            </picture>
              <img
                loading="lazy"
                width="120"
                height="41"
                class="links-item__img lazyload"
                data-src="~/assets/images/links_bondibongames.png"
                alt="Заходите на наш youtube канал"
              >
          </div>
        </div>
      </a>
      <a href="https://gratwest.ru"
         onclick="ym(85182334,'reachGoal','gratwest_link');return true;"
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
      <button class="links-item__button" @click="$emit('goToNextPage', 'map')">
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
    <button class="links-down" @click="$emit('goToNextPage', 'map')">
      <img src="~/assets/images/arrow_white.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBlinks',
};
</script>
