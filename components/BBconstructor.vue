<template>
  <section class="constructor">
    <h2 class="visually-hidden">Мысли конструктивно</h2>
    <div class="constructor-think">
      <div class="constructor-think__wrapper">
        <p class="constructor-think__text">
          мысли<br>конструктивно
        </p>
        <p class="constructor-think__text constructor-think__nomobile">
          конструкторы и робототехника,<br>сборные модели, 3d пазлы
        </p>
      </div>
    </div>
    <div class="constructor-items">
      <button v-for="(section, index) in links.sections" @click="showModal(section)" class="constructor-items__item" :class="'constructor-items__' + styles[index]" v-html="section.text" :key="index"/>
<!--      <div class="constructor-items__item constructor-items__robots">-->
<!--        наборы робототехники-->
<!--      </div>-->
<!--      <div class="constructor-items__item constructor-items__magnit">-->
<!--        магнитные,<br>блочные и игольчатые конструкторы-->
<!--      </div>-->
<!--      <div class="constructor-items__item constructor-items__sqrew">-->
<!--        конструкторы с отвёрткой,<br>с шестеренками-->
<!--      </div>-->
<!--      <div class="constructor-items__item constructor-items__puzzles">-->
<!--        3d пазлы-->
<!--      </div>-->
<!--      <div class="constructor-items__item constructor-items__models">-->
<!--        сборные модели-->
<!--      </div>-->
    </div>
    <button
        class="constructor-button"
        @click="$emit('goToNextPage', 'BBevamoda')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
import modal from "@/components/modal";

export default {
  name: 'BBconstructor',
  props: ['links'],
  data() {
    return {
      styles: [
        'robots',
        'magnit',
        'sqrew',
        'puzzles',
        'models'
      ]
    }
  },
  methods: {
    showModal(section) {
      this.$modal.show(
          modal,
          {
            title: section.text,
            image: '',
            links: section.links
          },
          {
            height: 'auto',
            adaptive: true,
          }
      );
    }
  }
};
</script>
