<template>
  <div :class="dark ? 'dark' : 'light'">
    <div @click="handleClick" class="fixed w-full h-full top-0 left-0 bg-zn-400 dark:bg-zn-800 transition duration-500">
      <!--Create a nav bar with tailwindcss-->
      <div class="fixed w-full h-startup inset-0 p-2 grid grid-cols-12 gap-1.5 transform -skew-y-12 scale-125">
        <div v-for="(item, index) in grid" :key="index" class="grid-item bg-zn-300 rounded dark:bg-zn-900 opacity-70 animate-pulse" :class="`col-span-${item.span} duration-500`"></div>
      </div>
      <nav style="backdrop-filter: blur(0.2vh);" class="fixed w-full flex items-center justify-between flex-wrap h-16 text-zn-900 dark:text-white z-50">
        <!--Reload the page when the logo is clicked-->
        <button @click.self="refreshPage" class="focus:border-green-600 dark:focus:border-green-400 hover:text-green-600 dark:hover:text-green-400 border-b border-zn-900 dark:border-zn-50 text-lg font-mont font-semibold ml-3 transition duration-150 h-7">IHS  {{ $t('title') }}</button>
        <button @click="setSidebar(true)" class="focus:ring-3 focus:ring-green-500 flex items-center justify-center mr-3 transition duration-150 rounded bg-zn-450 hover:bg-zn-500 dark:bg-zn-800 dark:hover:bg-zn-700 w-9 h-9">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
      <div class="relative w-full h-startup flex flex-col items-center justify-center">
        <h1 style="font-family: 'Playfair Display', 'serif';" class="lg:text-8xl text-title text-center font-extrabold text-zn-900 mr-24 ml-24 mb-5 dark:text-zn-100 animate-fade transition duration-500">Irvington {{ $t('title') }}</h1>
        <p class="lg:text-xl font-mont text-center mr-4 ml-4 font-medium text-zn-800 dark:text-zn-400 animate-fadeIn transition duration-500">{{ $t('about') }}</p>
        <button class="lg:text-lg lg:pr-7 lg:pl-7 transition duration-500 bg-green-500 hover:bg-green-400 rounded-md pl-5 pr-5 h-9 font-mont font-semibold text-zn-800 text-sm mt-6 shadow-md border-none animate-fadeBottom"> {{ $t('meet') }}</button>
      </div>
      <DarkMode class="fixed bottom-2 right-2"/>
    </div>
    <transition name="slide-fade">
      <div v-show="sidebarState" class="fixed flex justify-center items-center w-full h-48 mt-12">
        <div class="w-full pl-3 pr-3 pt-4 pb-4 bg-zn-600 dark:bg-zn-900 rounded-lg mr-2.5 ml-2.5 shadow-md">
          <div class="w-full flex justify-between items-center mb-2">
            <span class="text-zn-100 font-semibold font-mont text-md ml-3">Irvington High School</span>
            <button @ @click="setSidebar(false)" class="focus:ring-3 focus:ring-green-500 flex items-center justify-center mr-3 transition duration-150 rounded bg-zn-450 hover:bg-zn-500 dark:bg-zn-800 dark:hover:bg-zn-700 w-9 h-9">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <LongButton class="text-zn-900 dark:text-zn-200">
            <NuxtLink class="w-full h-full text-left" to="/artists">{{ $t('artists') }}</NuxtLink>
          </LongButton>
          <LongButton class="text-zn-900 dark:text-zn-200" @event="setLangState(true)">{{ $t('language') }}</LongButton>
          <LongButton class="text-zn-900 dark:text-zn-200">
            <NuxtLink class="w-full h-full text-left" to="/support">{{ $t('support') }}</NuxtLink>
          </LongButton>
          <LongButton class="text-green-500 dark:text-green-400">{{ $t('login') }}</LongButton>
          <LongButton  class="text-green-500 dark:text-green-400">{{ $t('signup') }}</LongButton>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="langState" class="transition duration-300 z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center h-64 w-72 rounded lg:w-144 bg-zn-600 dark:bg-zn-800 shadow-md">
        <p class="transition duration-150 text-shadow-black text-xl mt-3 font-mont w-full text-center h-10 font-bold text-zn-100 dark:text-zn-100">{{ $t('pickalanguage') }}</p>
        <div class="flex flex-col justify-content items-center w-full overflow-hidden h-60 mb-2 mt-2 lg:flex-row lg:flex-1 lg:justify-around lg:flex-wrap lg:w-5/6 lg:m-3 lg:h-48 lg:h-full scrollbar scrollbar-thin">
          <button
            @click="setLanguage(locale.lang)"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";
import DarkMode from '../components/DarkMode.vue'
import LongButton from '../components/LongButton.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    DarkMode,
    LongButton
  },
  data() {
    return {
      grid: [
        {span: 2, duration: '1000'},
        {span: 5, duration: '150'},
        {span: 1, duration: '500'},
        {span: 4, duration: '300'},
        {span: 4, duration: '500'},
        {span: 5, duration: '1000'},
        {span: 3, duration: '350'},
        {span: 2, duration: '500'},
        {span: 1, duration: '300'},
        {span: 2, duration: '250'},
        {span: 4, duration: '350'},
        {span: 2, duration: '300'},
        {span: 3, duration: '1000'},
        {span: 5, duration: '350'},
        {span: 3, duration: '500'},
        {span: 2, duration: '150'},
        {span: 3, duration: '350'},
        {span: 1, duration: '250'},
        {span: 5, duration: '1000'},
        {span: 3, duration: '300'},
        {span: 6, duration: '200'},
        {span: 3, duration: '450'},
      ],
      sidebarState: false,
      langState: false,
      locales: [
        {lang: 'en', name: 'English'},
        {lang: 'es', name: 'Español'},
      ]
    }
  },
  computed: {
    ...mapGetters(['dark'])
  },
  mounted() {
    const items = document.querySelectorAll<HTMLElement>('.grid-item')
    for (let i = 0; i < items.length; i++) {
      items[i].style.animationDelay = `${this.grid[i].duration}ms`
    }

    const lang = localStorage.getItem('lang')
    if (lang !== null) {
      // @ts-ignore
      this.$i18n.locale = lang
    }
  },
  methods: {
    refreshPage() {
      window.location.reload()
    },
    handleClick(e : MouseEvent) {
      const target = e.target as HTMLElement
      if (target.tagName === 'DIV' || target.tagName === 'SPAN' ||target.tagName === 'P' || target.tagName === 'H1') {
        if (this.sidebarState) {
          this.sidebarState = false
        }
        if (this.langState) {
          this.langState = false
        }
      }
    },
    setSidebar(bool : boolean) {
      this.sidebarState = bool
      if (this.langState) {
        this.langState = false
      }
    },
    setLangState(bool : boolean) {
      console.log('test')
      this.langState = bool
      if (this.sidebarState) {
        this.sidebarState = false
      }
    },
    setLanguage(lang : string) {
      localStorage.setItem('lang', lang)
      // @ts-ignore
      this.$i18n.locale = lang
      this.langState = false
    }
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&family=Playfair+Display:wght@800&display=swap');

.slide-fade-enter-active,
.slide-fade-leave-active{
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
