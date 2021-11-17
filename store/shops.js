export const state = () => ({
  shops: [],
});

export const mutations = {
  setShops(state, shops) {
    state.shops = shops;
  },
};

export const actions = {
  async getShops({ commit }) {
    try {
      const res = Object.values((await this.$fire.database.ref('/shops').once('value')).toJSON());
      // const res = this.$axios.$get('data/shops.json');
      // console.log(res);
      commit('setShops', res);
    } catch (error) {
      commit('setError', error, { root: true });
      throw error;
    }
  },
};

export const getters = {
  shops: (state) => state.shops,
};
