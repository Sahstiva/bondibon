<template>
  <div class="site-wrapper">
    <h1 class="visually-hidden">Игрушки, развивающие и развлекательные игры - BONDIBON</h1>
    <transition name="fade">
      <BBheader v-show="showHeader" @goToNextPage="nextPage($event)"/>
    </transition>
    <BBtitle id="BBtitle" @goToNextPage="nextPage($event)"/>
    <BBslider id="BBslider" @goToNextPage="nextPage($event)"/>
    <BBknow
        v-if="linksPages.get('BBknow')"
        id="BBknow"
        :links="linksPages.get('BBknow')"
        @goToNextPage="nextPage($event)"/>
    <BBmicroscope
        v-if="linksPages.get('BBmicroscope')"
        id="BBmicroscope"
        :links="linksPages.get('BBmicroscope')"
        @goToNextPage="nextPage($event)"/>
    <BBmosaic
        v-if="linksPages.get('BBmosaic')"
        id="BBmosaic"
        :links="linksPages.get('BBmosaic')"
        @goToNextPage="nextPage($event)"/>
    <BBconstructor
        v-if="linksPages.get('BBconstructor')"
        id="BBconstructor"
        :links="linksPages.get('BBconstructor')"
        @goToNextPage="nextPage($event)"/>
    <BBevamoda
        v-if="linksPages.get('BBevamoda')"
        id="BBevamoda"
        :links="linksPages.get('BBevamoda')"
        @goToNextPage="nextPage($event)"/>
    <BBtablegames
        v-if="linksPages.get('BBtablegames')"
        id="BBtablegames"
        :links="linksPages.get('BBtablegames')"
        @goToNextPage="nextPage($event)"/>
    <BBgift id="BBgift" @goToNextPage="nextPage($event)"/>
    <BBnewyear
        v-if="linksPages.get('BBnewyear')"
        id="BBnewyear"
        :links="linksPages.get('BBnewyear')"
        @goToNextPage="nextPage($event)"/>
    <BBteachers id="BBteachers" @goToNextPage="nextPage($event)"/>
    <BBlinks id="BBlinks" @goToNextPage="nextPage($event)"/>
    <BBmap
        v-if="showMap"
        :shops="shops"
        id="BBmap"
        @YandexReady="YandexReady"
        @goToNextPage="nextPage($event)"/>
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
      shops: [],
      linksPages: new Map(),
      LinksUrl: '',
      AddressUrl: '',
      yandexLoaded: false,
      scrollToMap: false,
    };
  },
  watch: {
    yandexLoaded(isLoaded) {
      if (isLoaded) {
        this.scrollToMap = false;
        this.nextPage('BBmap');
      }
    },
  },
  async asyncData({ $config: { LINKS_URL, ADDRESS_URL } }) {
    const LinksUrl = LINKS_URL; const
      AddressUrl = ADDRESS_URL;
    return { LinksUrl, AddressUrl };
  },
  created() {
    this.loadAddress(this.AddressUrl);
    this.loadLinks(this.LinksUrl);
  },
  methods: {
    YandexReady(isReady) {
      if (isReady) this.yandexLoaded = true;
    },
    async loadAddress(url) {
      const response = await fetch(url);
      const result = await response.json();
      if (result) {
        this.shops = [...result.shops];
      }
    },
    async loadLinks(url) {
      const response = await fetch(url);
      const result = await response.json();
      if (result.pages.length > 0) {
        result.pages.forEach((page) => {
          this.linksPages.set(page.id, { title: page.title, sections: [...page.sections] });
        });
      }
    },
    nextPage(page) {
      if (page === 'BBmap' && !this.showMap && !this.scrollToMap) {
        this.showMap = true;
        this.scrollToMap = true;
      } else {
        const el = document.querySelector(`#${page}`);
        VueScrollTo.scrollTo(el);
      }
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      // console.log(this.scrollPosition);
      if (this.scrollPosition > 6800 && !this.showMap) {
        this.showMap = true;
      }
      if (this.isMobile) {
        if (
          (this.scrollPosition > 50 && this.scrollPosition < 850)
            || (this.scrollPosition > 920 && this.scrollPosition < 1570)
            || (this.scrollPosition > 1630 && this.scrollPosition < 2380)
            || (this.scrollPosition > 2470 && this.scrollPosition < 3170)
            || (this.scrollPosition > 3260 && this.scrollPosition < 3970)
            || (this.scrollPosition > 4060 && this.scrollPosition < 4770)
            || (this.scrollPosition > 4830 && this.scrollPosition < 5570)
            || (this.scrollPosition > 5660 && this.scrollPosition < 6370)
            || (this.scrollPosition > 6450 && this.scrollPosition < 7180)
            || (this.scrollPosition > 7220 && this.scrollPosition < 8760)
            || (this.scrollPosition > 8820 && this.scrollPosition < 9560)
            || (this.scrollPosition > 9610 && this.scrollPosition < 10500)
        ) this.showHeader = false;
        else this.showHeader = true;
      } else if (
        (this.scrollPosition > 50 && this.scrollPosition < 600)
          || (this.scrollPosition > 750 && this.scrollPosition < 1350)
          || (this.scrollPosition > 1415 && this.scrollPosition < 2030)
          || (this.scrollPosition > 2150 && this.scrollPosition < 2750)
          || (this.scrollPosition > 2850 && this.scrollPosition < 3430)
          || (this.scrollPosition > 3550 && this.scrollPosition < 4130)
          || (this.scrollPosition > 4250 && this.scrollPosition < 4830)
          || (this.scrollPosition > 4950 && this.scrollPosition < 5510)
          || (this.scrollPosition > 5650 && this.scrollPosition < 6220)
          || (this.scrollPosition > 6315 && this.scrollPosition < 6920)
          || (this.scrollPosition > 7050 && this.scrollPosition < 7630)
          || (this.scrollPosition > 7750 && this.scrollPosition < 8400)
      ) this.showHeader = false;
      else this.showHeader = true;
    },
  },
  mounted() {
    // this.nextPage('BBtitle');
    this.scrollPosition = document.body.scrollTop;
    this.isMobile = window.innerWidth < 1024;
    // this.showMap = true;
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
