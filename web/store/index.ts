export const state = () => ({
  dark: false,
});

export const getters = {
  // @ts-ignore
  dark: ({dark}: Object) => dark,
};

export const mutations = {
  SET_DARK: (state: any, bool: Boolean) => {
    state.dark = bool;
  },
};
