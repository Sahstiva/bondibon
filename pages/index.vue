<template>
  <div class="site-wrapper">
    <h1 class="visually-hidden">Игрушки, развивающие и развлекательные игры - BONDIBON</h1>
    <transition name="fade">
      <BBheader v-show="showHeader" @goToNextPage="nextPage($event)"/>
    </transition>
    <BBtitle id="title" @goToNextPage="nextPage($event)"/>
    <BBideas id="ideas"
             v-if="linksPages.get('ideas')"
             :links="linksPages.get('ideas')"
             :show="showModal.get('ideas')"
             @goToNextPage="nextPage($event)" />
    <BBgift id="gift" @goToNextPage="nextPage($event)"/>
    <BBnewyear
        v-if="linksPages.get('newyear')"
        id="newyear"
        :links="linksPages.get('newyear')"
        :show="showModal.get('newyear')"
        @goToNextPage="nextPage($event)"/>
    <BBteachers id="teachers" @goToNextPage="nextPage($event)"/>
    <BBslider id="slider" @goToNextPage="nextPage($event)"/>
    <BBknow
        v-if="linksPages.get('know')"
        id="know"
        :links="linksPages.get('know')"
        :show="showModal.get('know')"
        @goToNextPage="nextPage($event)"/>
    <BBscience
        v-if="linksPages.get('science')"
        id="science"
        :links="linksPages.get('science')"
        :show="showModal.get('science')"
        @goToNextPage="nextPage($event)"/>
    <BBmosaic
        v-if="linksPages.get('mosaic')"
        id="mosaic"
        :links="linksPages.get('mosaic')"
        :show="showModal.get('mosaic')"
        @goToNextPage="nextPage($event)"/>
    <BBconstructor
        v-if="linksPages.get('constructor')"
        id="constructor"
        :links="linksPages.get('constructor')"
        :show="showModal.get('constructor')"
        @goToNextPage="nextPage($event)"/>
    <BBevamoda
        v-if="linksPages.get('evamoda')"
        id="evamoda"
        :links="linksPages.get('evamoda')"
        :show="showModal.get('evamoda')"
        @goToNextPage="nextPage($event)"/>
    <BBtablegames
        v-if="linksPages.get('tablegames')"
        id="tablegames"
        :links="linksPages.get('tablegames')"
        :show="showModal.get('tablegames')"
        @goToNextPage="nextPage($event)"/>
    <BBlinks id="links" @goToNextPage="nextPage($event)"/>
    <div id="map"></div>
    <BBmap
        :shops="shops"
        :showMap="showMap"
        @goToNextPage="nextPage($event)"/>
  </div>
</template>

<script>

import '~/assets/style/style.scss';

import BBheader from '../components/BBheader.vue';
import BBtitle from '../components/BBtitle.vue';
import BBideas from '../components/BBideas.vue';
import BBslider from '../components/BBslider.vue';
import BBknow from '../components/BBknow.vue';
import BBscience from '../components/BBscience.vue';
import BBmosaic from '../components/BBmosaic.vue';
import BBconstructor from '../components/BBconstructor.vue';
import BBevamoda from '../components/BBevamoda.vue';
import BBtablegames from '../components/BBtablegames.vue';
import BBgift from '../components/BBgift.vue';
import BBnewyear from '../components/BBnewyear.vue';
import BBteachers from '../components/BBteachers.vue';
import BBlinks from '../components/BBlinks.vue';
import BBmap from '../components/BBmap.vue';

export default {
  name: 'Bondibon',
  title: 'Bondibon landing',

  components: {
    BBheader,
    BBtitle,
    BBideas,
    BBslider,
    BBknow,
    BBscience,
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
      showModal: new Map(),
      isMobile: false,
    };
  },
  async fetch({ store }) {
    await store.dispatch('pages/getPages');
    await store.dispatch('shops/getShops');
  },
  computed: {
    linksPages() {
      return this.$store.getters['pages/pages'];
    },
    shops() {
      return this.$store.getters['shops/shops'];
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  created() {
    // this.$fire.database.goOffline();
    // console.log(`isDesktop: ${this.$device.isDesktop}`);
    // console.log(`isMobile: ${this.$device.isMobile}`);
    // console.log(`isTablet: ${this.$device.isTablet}`);
    if (this.$route.query?.page && this.$route.query?.section) {
      const { page } = this.$route.query;
      const { section } = this.$route.query;
      if (this.linksPages && this.linksPages.get(page)) {
        this.showModal.set(page, section);
      }
    }
  },
  mounted() {
    const { page } = this.$route.query;
    this.scrollPosition = document.body.scrollTop;
    this.isMobile = window.innerWidth < 1024;
    if (this.linksPages && this.linksPages.get(page)) {
      this.nextPage(page);
    }
  },
  methods: {
    nextPage(page) {
      const el = document.getElementById(page);
      window.history.pushState(
        null,
        document.title, `${window.location.pathname}?page=${page}`,
      );
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    },
    handleScroll() {
      let showOffset = 0;
      const screenWidth = document.body.clientWidth;
      this.scrollPosition = window.scrollY;
      if (screenWidth < 768) {
        showOffset = 2400;
      } else if (screenWidth < 1024) {
        showOffset = 1400;
      } else if (screenWidth < 1280) {
        showOffset = 200;
      }
      if (this.scrollPosition > 6800 && !this.showMap) {
        this.showMap = true;
      }
      if (this.isMobile) {
        if (
          (this.scrollPosition > 50 && this.scrollPosition < 750)
            || (this.scrollPosition > 820 && this.scrollPosition < 4180)
            || (this.scrollPosition > 4380 && this.scrollPosition < 4980)
            || (this.scrollPosition > 5180 && this.scrollPosition < 6560)
            || (this.scrollPosition > 6760 && this.scrollPosition < 7360)
            || (this.scrollPosition > 7560 && this.scrollPosition < 8140)
            || (this.scrollPosition > 8340 && this.scrollPosition < 8960)
            || (this.scrollPosition > 9160 && this.scrollPosition < 9750)
            || (this.scrollPosition > 9950 && this.scrollPosition < 10550)
            || (this.scrollPosition > 10750 && this.scrollPosition < 11350)
            || (this.scrollPosition > 11550 && this.scrollPosition < 12150)
            || (this.scrollPosition > 12350 && this.scrollPosition < 12950)
            || (this.scrollPosition > 13150 && this.scrollPosition < 13880)
            || (this.scrollPosition > 14080 && this.scrollPosition < 20000)
        ) this.showHeader = false;
        else this.showHeader = true;
      } else if (
        (this.scrollPosition > 50 && this.scrollPosition < 600)
          || (this.scrollPosition > 750 && this.scrollPosition < (2750 + showOffset))
          || (this.scrollPosition > (2850 + showOffset) && this.scrollPosition < (3430 + showOffset))
          || (this.scrollPosition > (3550 + showOffset) && this.scrollPosition < (4130 + showOffset))
          || (this.scrollPosition > (4250 + showOffset) && this.scrollPosition < (4830 + showOffset))
          || (this.scrollPosition > (4950 + showOffset) && this.scrollPosition < (5510 + showOffset))
          || (this.scrollPosition > (5650 + showOffset) && this.scrollPosition < (6220 + showOffset))
          || (this.scrollPosition > (6315 + showOffset) && this.scrollPosition < (6920 + showOffset))
          || (this.scrollPosition > (7050 + showOffset) && this.scrollPosition < (7630 + showOffset))
          || (this.scrollPosition > (7750 + showOffset) && this.scrollPosition < (8300 + showOffset))
          || (this.scrollPosition > (8400 + showOffset) && this.scrollPosition < (8980 + showOffset))
          || (this.scrollPosition > (9180 + showOffset) && this.scrollPosition < (9680 + showOffset))
          || (this.scrollPosition > (9880 + showOffset) && this.scrollPosition < (10380 + showOffset))
          || (this.scrollPosition > (10580 + showOffset))
      ) this.showHeader = false;
      else this.showHeader = true;
    },
  },
};
</script>
