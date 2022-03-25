<template>
  <transition name="fade">
    <div v-show="langState" class="transition duration-300 z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center h-64 w-72 rounded lg:w-144 bg-zn-600 dark:bg-zn-800 shadow-md">
      <p class="transition duration-150 text-shadow-black text-xl mt-3 font-mont w-full text-center h-10 font-bold text-zn-100 dark:text-zn-100">{{ $t('pickalanguage') }}</p>
      <div class="flex flex-col justify-content items-center w-full overflow-hidden h-60 mb-2 mt-2 lg:flex-row lg:flex-1 lg:justify-around lg:flex-wrap lg:w-5/6 lg:m-3 lg:h-48 lg:h-full scrollbar scrollbar-thin">
        <button
          @click="$emit('setLanguage', locale.lang)"
          class="flex flex-col justify-content items-center w-48 rounded transition-colors duration-250 lg:w-1/3 hover:bg-zn-800 group group-hover:text-zn-200 dark:hover:bg-zn-700 mb-1.5"
          v-for="locale in locales"
          :key="locale.lang"
        >
          <img
            :src="require(`../static/flags/${locale.lang}.svg`)"
            alt="Flag"
            class="w-24 mb-2 cursor-pointer mt-4"
          />
          <span class="transition duration-150 font-mont font-semibold group-hover:text-zn-200 dark:text-zn-200">{{ locale.name }}</span>
          <span class="transition duration-150 font-mont text-sm font-medium mb-2.5 text-zn-900 group-hover:text-zn-400 dark:text-zn-300">{{ `(${locale.lang.toUpperCase()})` }}</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'lang-change',
  props: {
    langState: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      locales: [
        {lang: 'en', name: 'English'},
        {lang: 'es', name: 'Español'},
      ]
    };
  },
})
</script>
