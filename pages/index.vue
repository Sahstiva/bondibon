<template>
  <div class="site-wrapper">
    <h1 class="visually-hidden">Игрушки, развивающие и развлекательные игры - BONDIBON</h1>
    <BBtitle id="title"
             @goToNextPage="nextPage($event)"
    />
    <BB20gifts id="20gifts"
               v-if="linksPages.get('20gifts')"
               :links="linksPages.get('20gifts')"
               @showModal="showModal('20gifts', $event)"
               @goToNextPage="nextPage($event)"/>
    <BBgift id="gift" @goToNextPage="nextPage($event)"/>
    <BBnewyear
        v-if="linksPages.get('newyear')"
        id="newyear"
        :links="linksPages.get('newyear')"
        @showModal="showModal('newyear', $event)"
        @goToNextPage="nextPage($event)"/>
    <BBteachers id="teachers" @goToNextPage="nextPage($event)"/>
    <BBslider id="slider" @goToNextPage="nextPage($event)"/>
    <BBknow
        v-if="linksPages.get('know')"
        id="know"
        :links="linksPages.get('know')"
        @showModal="showModal('know', $event)"
        @goToNextPage="nextPage($event)"/>
    <BBscience
        v-if="linksPages.get('science')"
        id="science"
        :links="linksPages.get('science')"
        @showModal="showModal('science', $event)"
        @goToNextPage="nextPage($event)"/>
    <BBmosaic
        v-if="linksPages.get('mosaic')"
        id="mosaic"
        :links="linksPages.get('mosaic')"
        @showModal="showModal('mosaic', $event)"
        @goToNextPage="nextPage($event)"/>
    <BBconstructor
        v-if="linksPages.get('constructor')"
        id="constructor"
        :links="linksPages.get('constructor')"
        @showModal="showModal('constructor', $event)"
        @goToNextPage="nextPage($event)"/>
    <BBevamoda
        v-if="linksPages.get('evamoda')"
        id="evamoda"
        :links="linksPages.get('evamoda')"
        @showModal="showModal('evamoda', $event)"
        @goToNextPage="nextPage($event)"/>
    <BBtablegames
        v-if="linksPages.get('tablegames')"
        id="tablegames"
        :links="linksPages.get('tablegames')"
        @showModal="showModal('tablegames', $event)"
        @goToNextPage="nextPage($event)"/>
    <BBideas id="ideas"
         v-if="linksPages.get('ideas')"
         :links="linksPages.get('ideas')"
         @showModal="showModal('ideas', $event)"
         @goToNextPage="nextPage($event)" />
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

// import BBheader from '../components/BBheader.vue';
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
import BB20gifts from '../components/BB20gifts.vue';
import modal from '../components/modal.vue';

export default {
  name: 'Bondibon',
  title: 'Bondibon landing',

  components: {
    BB20gifts,
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
      showMap: false,
      // showModal: new Map(),
      isMobile: false,
      currentPage: '',
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
  mounted() {
    if (this.$route.query?.page) {
      const { page } = this.$route.query;
      this.scrollPosition = document.body.scrollTop;
      this.isMobile = window.innerWidth < 1024;
      if (this.linksPages && this.linksPages.get(page)) {
        this.nextPage(page);
      }
      if (this.$route.query?.section) {
        const { section } = this.$route.query;
        if (this.linksPages && this.linksPages.get(page)) {
          const links = this.linksPages.get(page);
          Object.values(links.sections)
            .forEach((sec) => {
              if ('sections' in sec) {
                const showSection = Object.values(sec.sections)
                  .find((item) => item.id === section);
                if (showSection) {
                  this.showModal(page, showSection);
                }
              } else if (sec) {
                this.showModal(page, sec);
              }
            });
        }
      }
    }
  },
  methods: {
    showModal(page, section) {
      this.currentPage = page;
      this.$modal.show(
        modal,
        {
          title: section.text,
          image: section.image,
          links: section.links,
          id: section.id,
          page,
        },
        {
          height: 'auto',
          adaptive: true,
        },
        {
          'before-close': this.OnModalClose,
        },
      );
    },
    OnModalClose() {
      window.history.pushState(
        null,
        document.title, `${window.location.pathname}?page=${this.currentPage}`,
      );
      this.nextPage(this.currentPage);
    },
    nextPage(page) {
      const el = document.getElementById(page);
      window.history.pushState(
        null,
        document.title, `${window.location.pathname}?page=${page}`,
      );
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      // if (offset > 0) { window.scrollBy(0, offset); }
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 10000 && !this.showMap) {
        this.showMap = true;
      }
    },
  },
};
</script>
