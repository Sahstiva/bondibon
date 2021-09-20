import firebase from 'firebase';

export const state = () => ({
  authUser: null,
  email: null,
});

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user;
  },
  SET_EMAIL(state, value) {
    state.email = value;
  },
};

export const actions = {
  async login({ commit }, user) {
    firebase.default.auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((firebaseuser) => {
        commit('SET_USER', firebaseuser);
        commit('SET_EMAIL', firebaseuser.user.email);
      })
      .catch((error) => {
        commit('setError', error, { root: true });
        throw error;
      });
  },
  async logout({ commit }) {
    firebase.default.auth()
      .signOut()
      .then(() => {
        commit('SET_USER', null);
        commit('SET_EMAIL', null);
      })
      .catch((error) => {
        commit('setError', error, { root: true });
        throw error;
      });
  },
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser);
      req.session.cookie = `${req.session.authUser}`;
    }
  },
};
