<template>
  <div class="site-wrapper">
    <h1 class="visually-hidden">Игрушки, развивающие и развлекательные игры - BONDIBON</h1>
    <transition name="fade">
      <LazyBBheader v-show="showHeader" @goToNextPage="nextPage($event)"/>
    </transition>
    <h2 class="visually-hidden">5000 наименований игр и игрушек</h2>
    <LazyBBtitle id="BBtitle" @goToNextPage="nextPage($event)"/>
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
    <LazyBBmap v-if="showMap" id="BBmap" @goToNextPage="nextPage($event)"/>
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
      scrollPosition: 0,
      showHeader: true,
      showMap: false,
      isMobile: false,
    };
  },
  methods: {
    nextPage(page) {
      const el = document.querySelector(`#${page}`);
      VueScrollTo.scrollTo(el);
    },
    handleScroll () {
      //const scrollDirection = window.scrollY > this.scrollPosition ? 'down' : 'up';
      this.scrollPosition = window.scrollY;
      if(this.isMobile) {
        console.log(this.isMobile);
        if (
            (this.scrollPosition > 50 && this.scrollPosition < 850) ||
            (this.scrollPosition > 920 && this.scrollPosition < 1570) ||
            (this.scrollPosition > 1630 && this.scrollPosition < 2380) ||
            (this.scrollPosition > 2470 && this.scrollPosition < 3170) ||
            (this.scrollPosition > 3260 && this.scrollPosition < 3970) ||
            (this.scrollPosition > 4060 && this.scrollPosition < 4770) ||
            (this.scrollPosition > 4830 && this.scrollPosition < 5570) ||
            (this.scrollPosition > 5660 && this.scrollPosition < 6370) ||
            (this.scrollPosition > 6450 && this.scrollPosition < 7180) ||
            (this.scrollPosition > 7220 && this.scrollPosition < 8760) ||
            (this.scrollPosition > 8820 && this.scrollPosition < 9560) ||
            (this.scrollPosition > 9610 && this.scrollPosition < 10500)
        )
          this.showHeader = false;
        else
          this.showHeader = true;
      }
      else if(
          (this.scrollPosition > 50 && this.scrollPosition < 600) ||
          (this.scrollPosition > 750 && this.scrollPosition < 1350) ||
          (this.scrollPosition > 1415 && this.scrollPosition < 2030) ||
          (this.scrollPosition > 2150 && this.scrollPosition < 2750) ||
          (this.scrollPosition > 2850 && this.scrollPosition < 3430) ||
          (this.scrollPosition > 3550 && this.scrollPosition < 4130) ||
          (this.scrollPosition > 4250 && this.scrollPosition < 4830) ||
          (this.scrollPosition > 4950 && this.scrollPosition < 5510) ||
          (this.scrollPosition > 5650 && this.scrollPosition < 6220) ||
          (this.scrollPosition > 6315 && this.scrollPosition < 6920) ||
          (this.scrollPosition > 7050 && this.scrollPosition < 7630) ||
          (this.scrollPosition > 7750 && this.scrollPosition < 8400)
      )
        this.showHeader = false;
      else
        this.showHeader = true;
      //console.log(window.scrollY);
    }
  },
  mounted() {
    this.scrollPosition = document.body.scrollTop;
    this.isMobile = window.innerWidth < 1024 ? true : false;
    this.showMap = true;
    //console.log(window.screen.width, window.screen.height);
    //console.log(window.innerWidth, window.innerHeight);
    //console.log(`isMobile: ${this.isMobile}`);
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
