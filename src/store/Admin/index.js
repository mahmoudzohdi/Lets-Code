export default {
  state: {
    navVisibility: true
  },
  mutations: {
    updateNavVisibility(state, visibility) {
      state.navVisibility = visibility;
    }
  }
}