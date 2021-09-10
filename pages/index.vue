<template>
  <div class="site-wrapper">
    <h1 class="visually-hidden">Игрушки, развивающие и развлекательные игры - BONDIBON</h1>
    <transition name="fade">
      <BBheader v-show="showHeader" @goToNextPage="nextPage($event)"/>
    </transition>
    <BBtitle id="title" @goToNextPage="nextPage($event)"/>
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
    <BBgift id="gift" @goToNextPage="nextPage($event)"/>
    <BBnewyear
        v-if="linksPages.get('newyear')"
        id="newyear"
        :links="linksPages.get('newyear')"
        :show="showModal.get('newyear')"
        @goToNextPage="nextPage($event)"/>
    <BBteachers id="teachers" @goToNextPage="nextPage($event)"/>
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
      shops: [],
      linksPages: new Map(),
    };
  },
  async asyncData({ $axios, $config: { LINKS_URL, ADDRESS_URL } }) {
    const { shops } = await $axios.$get(ADDRESS_URL);
    const { pages } = await $axios.$get(LINKS_URL);
    const links = new Map();
    if (pages.length > 0) {
      pages.forEach((page) => {
        links.set(page.id, { title: page.title, sections: page.sections });
      });
    }
    return { shops, linksPages: links };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  created() {
    console.log(`isDesktop: ${this.$device.isDesktop}`);
    console.log(`isMobile: ${this.$device.isMobile}`);
    console.log(`isTablet: ${this.$device.isTablet}`);
    if (this.$route.query?.page && this.$route.query?.section) {
      const { page } = this.$route.query;
      const { section } = this.$route.query;
      if (this.linksPages.get(page)) {
        this.showModal.set(page, section);
      }
    }
  },
  mounted() {
    const { page } = this.$route.query;
    this.scrollPosition = document.body.scrollTop;
    this.isMobile = window.innerWidth < 1024;
    if (this.linksPages.get(page)) {
      this.nextPage(page);
    }
  },
  methods: {
    nextPage(page) {
      const el = document.getElementById(page);
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
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
};
</script>
