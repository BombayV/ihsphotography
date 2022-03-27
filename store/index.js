export const state = () => ({
  dark: false,
})

export const getters = {
  dark: ({ dark }) => dark,
}

export const mutations = {
  SET_DARK: (state, bool) => {
    state.dark = bool
  },
}
