const system = {
  namespaced: true,
  state: {
    allInfo: {}
  },
  mutations: {
    SET_AllInfo: (state, allInfo) => {
      state.allInfo = allInfo;
    }
  }
};

export default system;
