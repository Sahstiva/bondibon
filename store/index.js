export const state = () => ({
  error: false,
  message: '',
});

export const mutations = {
  setError(state, payload) {
    state.error = true;
    state.message = payload;
  },
  setMessage(state, payload) {
    state.error = false;
    state.message = payload;
  },
  clearMessage(state) {
    state.error = false;
    state.message = null;
  },
};

export const getters = {
  error(state) {
    return state.error;
  },
  message(state) {
    return state.message;
  },
};
