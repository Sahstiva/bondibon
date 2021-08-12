<template>
  <div class="site_wrapper">
    <LazyBBheader />
    <LazyBBtitle />
    <LazyBBslider />
    <LazyBBknow />
    <LazyBBmicroscope/>
    <LazyBBmosaic/>
    <LazyBBconstructor/>
    <LazyBBevamoda/>
    <LazyBBtablegames/>
    <LazyBBgift/>
    <LazyBBnewyear/>
    <LazyBBteachers/>
    <LazyBBlinks/>
    <LazyBBmap/>
  </div>
</template>

<script>

import '~/assets/style/style.scss';

import BBheader from "../components/BBheader";
import BBtitle from "../components/BBtitle";
import BBslider from "../components/BBslider";
import BBknow from "../components/BBknow";
import BBmicroscope from "../components/BBmicroscope";
import BBmosaic from "../components/BBmosaic";
import BBconstructor from "../components/BBconstructor";
import BBevamoda from "../components/BBevamoda";
import BBtablegames from "../components/BBtablegames";
import BBgift from "../components/BBgift";
import BBnewyear from "../components/BBnewyear";
import BBteachers from "../components/BBteachers";
import BBlinks from "../components/BBlinks";
import BBmap from "../components/BBmap";

//const VueScrollTo = require('vue-scrollto');

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
      //isScrolling: false,
      currentComponent: 'BBtitle',
      }
    },
  methods: {
      nextPage(name) {
        console.log(`Go to page ${name}`);
        this.currentComponent = name;
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
    }
  }
</script>
