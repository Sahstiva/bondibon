export const state = () => ({
  pages: new Map(),
});

export const mutations = {
  setPages(state, pages) {
    Object.values(pages).forEach((page) => {
      state.pages.set(page.id, { title: page.title, sections: page.sections });
    });
  },
};

export const actions = {
  async getPages({ commit }) {
    try {
      const res = (await this.$fire.database.ref('/pages').once('value')).toJSON();
      // const res = await this.$axios.$get('data/pages.json');
      // console.log('Pages');
      // console.log(res);
      commit('setPages', res);
    } catch (error) {
      commit('setError', error, { root: true });
      throw error;
    }
  },
};

export const getters = {
  pages: (state) => state.pages,
};
