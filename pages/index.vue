<template>
  <div :class="dark ? 'dark' : 'light'">
    <div @click="handleClick" class="fixed w-full h-full top-0 left-0 bg-zn-400 dark:bg-zn-800 transition duration-500">
      <!--Create a nav bar with tailwindcss-->
      <div class="fixed w-full h-startup inset-0 p-2 grid grid-cols-12 gap-1.5 transform -skew-y-12 scale-125">
        <div v-for="(item, index) in grid" :key="index" class="grid-item bg-zn-300 rounded dark:bg-zn-900 opacity-70 animate-pulse" :class="`col-span-${item.span} duration-500`"></div>
      </div>
      <Navbar @setSidebar="setSidebar"/>
      <div class="relative w-full h-startup flex flex-col items-center justify-center">
        <h1 style="font-family: 'Playfair Display', 'serif';" class="lg:text-8xl text-title text-center font-extrabold text-zn-900 mr-24 ml-24 mb-5 dark:text-zn-100 animate-fade transition duration-500">Irvington {{ $t('title') }}</h1>
        <p class="lg:text-xl font-mont text-center mr-4 ml-4 font-medium text-zn-800 dark:text-zn-400 animate-fadeIn transition duration-500">{{ $t('about') }}</p>
        <NuxtLink to="/artists" class="lg:pr-10 lg:pl-10 lg:pt-2 lg:pb-2 pb-1.5 pt-1.5 pl-5 pr-5 bg-green-500 hover:bg-green-400 duration-500 lg:text-lg transition   rounded-md font-mont font-semibold text-zn-800 text-sm mt-6 shadow-md border-none animate-fadeBottom">{{ $t('meet') }}</NuxtLink>
      </div>
      <DarkMode class="fixed bottom-2 right-2"/>
    </div>
    <Sidebar :sidebar-state="sidebarState" @setLangState="setLangState" @closeSidebar="setSidebar"/>
    <Langs :lang-state="langState" @setLanguage="setLanguage"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from "vuex";
import DarkMode from '../components/DarkMode.vue'
import Sidebar from "../components/Sidebar.vue";
import Navbar from '../components/Navbar.vue';
import Langs from '../components/Langs.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    DarkMode,
    Sidebar,
    Navbar,
    Langs
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
      langState: false
    }
  },
  computed: {
    ...mapGetters(['dark'])
  },
  mounted() {
    const items = document.querySelectorAll('.grid-item')
    for (let i = 0; i < items.length; i++) {
      items[i].style.animationDelay = `${this.grid[i].duration}ms`
    }

    const lang = localStorage.getItem('lang')
    if (lang !== null) {
      // @ts-ignore
      this.$i18n.locale = lang
    } else if (navigator.language.includes('es')) {
        // @ts-ignore
        this.$i18n.locale = 'es'
      }
  },
  methods: {
    handleClick(e) {
      const target = e.target
      if (target.tagName === 'DIV' || target.tagName === 'SPAN' ||target.tagName === 'P' || target.tagName === 'H1') {
        if (this.sidebarState) {
          this.sidebarState = false
        }
        if (this.langState) {
          this.langState = false
        }
      }
    },
    setSidebar(bool) {
      this.sidebarState = bool
      if (this.langState) {
        this.langState = false
      }
    },
    setLangState(bool) {
      this.langState = bool
      if (this.sidebarState) {
        this.sidebarState = false
      }
    },
    setLanguage(lang) {
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
