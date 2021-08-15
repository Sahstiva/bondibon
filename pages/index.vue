<template>
  <div class="site-wrapper">
    <h1 class="visually-hidden">Игрушки, развивающие и развлекательные игры - BONDIBON</h1>
    <LazyBBheader @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">5000 наименований игр и игрушек</h2>
    <LazyBBtitle @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Полезные игры</h2>
    <LazyBBslider id="BBslider" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Знания - сила!</h2>
    <LazyBBknow id="BBknow" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Хочу всё знать</h2>
    <LazyBBmicroscope id="BBmicroscope" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Интеллект на кончиках пальцев</h2>
    <LazyBBmosaic id="BBmosaic" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Мысли конструктивно</h2>
    <LazyBBconstructor id="BBconstructor" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Красота спасёт мир!</h2>
    <LazyBBevamoda id="BBevamoda" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Делу время - потехе час</h2>
    <LazyBBtablegames id="BBtablegames" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Подарки своими руками</h2>
    <LazyBBgift id="BBgift" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Новый год к нам мчится</h2>
    <LazyBBnewyear id="BBnewyear" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Полезно педагогам</h2>
    <LazyBBteachers id="BBteachers" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Подписывайтесь на наш инстаграм, смотрите видео на канале</h2>
    <LazyBBlinks id="BBlinks" @goToNextPage="nextPage($event)"/>
    <h2 class="visually-hidden">Где купить</h2>
    <LazyBBmap id="BBmap" @goToNextPage="nextPage($event)"/>
  </div>
</template>

<script>

import '~/assets/style/style.scss';

import BBheader from '../components/BBheader.vue';
import BBtitle from '../components/BBtitle.vue';
import BBslider from '../components/BBslider.vue';
import BBknow from '../components/BBknow.vue';
import BBmicroscope from '../components/BBmicroscope.vue';
import BBmosaic from '../components/BBmosaic.vue';
import BBconstructor from '../components/BBconstructor.vue';
import BBevamoda from '../components/BBevamoda.vue';
import BBtablegames from '../components/BBtablegames.vue';
import BBgift from '../components/BBgift.vue';
import BBnewyear from '../components/BBnewyear.vue';
import BBteachers from '../components/BBteachers.vue';
import BBlinks from '../components/BBlinks.vue';
import BBmap from '../components/BBmap.vue';

const VueScrollTo = require('vue-scrollto');

export default {
  name: 'Bondibon',
  title: 'Bondibon landing',

  components: {
    BBheader,
    BBtitle,
    BBslider,
    BBknow,
    BBmicroscope,
    BBmosaic,
    BBconstructor,
    BBevamoda,
    BBtablegames,
    BBgift,
    BBnewyear,
    BBteachers,
    BBlinks,
    BBmap,
  },
  data() {
    return {
    };
  },
  methods: {
    nextPage(page) {
      const el = document.querySelector(`#${page}`);
      VueScrollTo.scrollTo(el);
    },
  },
  // handleScroll: function (evt, el) {
  // console.log('scrolling', el.className);
  // console.log(window.scrollY);
  // console.log(evt);
  // if(!this.isScrolling && el.className === 'slider' && window.scrollY < 680) {
  //   const _done = this.doneScrolling;
  //   const options = { offset: -20, onDone: _done };
  //   this.$scrollTo(el, 500, options);
  //   this.isScrolling = true;
  // }
  // else if(!this.isScrolling && el.className === 'knowledge' && window.scrollY > 680) {
  //   const _done = this.doneScrolling;
  //   const options = { offset: 0, onDone: _done };
  //   this.$scrollTo(el, 500, options);
  //   this.isScrolling = true;
  // }
  //   if (window.scrollY > 50 && el.className === 'slider') {
  //     el.setAttribute(
  //         'style',
  //         'opacity: 1; transform: translate3d(0, -10px, 0)'
  //     );
  //     //window.scrollY = 250;
  //   } else if(window.scrollY > 680 && el.className === 'knowledge') {
  //     el.setAttribute(
  //         'style',
  //         'opacity: 1; transform: translate3d(0, -10px, 0)'
  //     );
  //   }
  //   return window.scrollY > 1000
  // },
  // doneScrolling: function(el) {
  //   this.isScrolling = false;
  //   console.log('scrolling',this.isScrolling);
  // }
  // },
};
</script>
