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
