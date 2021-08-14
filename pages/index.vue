<template>
  <div class="site_wrapper">
    <BBheader @goToNextPage="nextPage($event)"/>
    <BBtitle @goToNextPage="nextPage($event)"/>
    <BBslider id="BBslider" @goToNextPage="nextPage($event)"/>
    <BBknow id="BBknow" @goToNextPage="nextPage($event)"/>
    <BBmicroscope id="BBmicroscope" @goToNextPage="nextPage($event)"/>
    <BBmosaic id="BBmosaic" @goToNextPage="nextPage($event)"/>
    <BBconstructor id="BBconstructor" @goToNextPage="nextPage($event)"/>
    <BBevamoda id="BBevamoda" @goToNextPage="nextPage($event)"/>
    <BBtablegames id="BBtablegames" @goToNextPage="nextPage($event)"/>
    <BBgift id="BBgift" @goToNextPage="nextPage($event)"/>
    <BBnewyear id="BBnewyear" @goToNextPage="nextPage($event)"/>
    <BBteachers id="BBteachers" @goToNextPage="nextPage($event)"/>
    <BBlinks id="BBlinks" @goToNextPage="nextPage($event)"/>
    <BBmap id="BBmap" @goToNextPage="nextPage($event)"/>
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
      // isScrolling: false,
      // currentComponent: 'BBtitle',
    };
  },
  methods: {
    nextPage(page) {
      console.log(`Event to scroll page ${page} emitted`);
      const el = document.querySelector('#' + page);
      VueScrollTo.scrollTo(el);
    }
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
