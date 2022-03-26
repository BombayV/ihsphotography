<template>
  <button
    class="flex justify-center items-center w-9 h-9 rounded text-zn-50 cursor-pointer z-10 bg-zn-800 hover:bg-zn-900 focus:ring-3 focus:ring-green-500 transition duration-500 ease-in-out shadow-xl dark:bg-zn-300 dark:hover:bg-zn-450 dark:text-zn-900"
    @click="toggleDarkMode"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
  </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['dark']),
  },

  methods: {
    ...mapMutations(['SET_DARK']),

    toggleDarkMode() {
      localStorage.theme = this.dark ? 'light' : 'dark';
      this.SET_DARK(!this.dark);
    },
  },
  mounted() {
    if (localStorage.theme === undefined || localStorage.theme === null) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)')
          .matches
      ) {
        localStorage.theme = 'dark';
        this.SET_DARK(true);
      } else {
        localStorage.theme = 'light';
      }
    } else {
      this.SET_DARK(localStorage.theme === 'dark');
    }
  },
};
</script>
