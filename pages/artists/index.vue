<template>
  <div :class="dark ? 'dark' : 'light'">
    <div @click="handleClick" class="fixed w-full h-full bg-zn-400 dark:bg-zn-800 transition duration-500 z-0"></div>
    <div class="absolute w-full mt-16 flex flex-col justify-start items-center">
      <h1 class="font-playfair lg:text-8xl text-title tracking-wide dark:text-zn-100">Artists</h1>
      <span class="text-center mr-2.5 ml-2.5 font-mont lg:mt-5 lg:mr-5 lg:ml-5 lg:text-xl dark:text-zn-400">Meet our artists! Here you will find any person that has registered and was accepted into the gallery. You can press on any of the names below to open their gallery and check their photos.</span>
      <div class="mt-5 flex flex-row flex-wrap items-center justify-center gap-5 lg:gap-x-52 font-mont font-semibold text-center w-full mb-5 px-10">
        <NuxtLink v-for="(person, index) in users" :to="`/artists/${person.id}`" :key="index" style="flex-basis: 10em" class="text-xl text-zn-900 dark:text-zn-450 hover:text-green-600 dark:hover:text-green-500 hover:underline transition duration-200">
          - {{ person.name }}
        </NuxtLink>
      </div>
    </div>
    <Navbar class="z-10" @setSidebar="setSidebar">
      <Sidebar class="fixed z-30 mt-56" :sidebar-state="sidebarState" @setLangState="setLangState" @closeSidebar="setSidebar"/>
    </Navbar>
    <Langs :lang-state="langState" @setLanguage="setLanguage"/>
    <DarkMode class="fixed bottom-2 right-2"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from "vuex";
import DarkMode from "../../components/DarkMode.vue";
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar.vue";
import Langs from "../../components/Langs.vue";

export default Vue.extend({
  name: 'SupportPage',
  components: {
    DarkMode,
    Sidebar,
    Navbar,
    Langs
  },
  data  () {
    return {
      sidebarState: false,
      langState: false,
      users: [
        {
          name: 'Mauricio Rivera',
          id: 'Mauricio_Rivera',
        },
        {
          name: 'Ian B',
          id: 'Ian_B',
        },
        {
          name: 'Izzy',
          id: 'Izzy',
        },
        {
          name: 'Mauricio Rivera',
          id: 'Mauricio_Rivera',
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['dark'])
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
    },
    async test() {
      const resp = await this.$axios.get('/test')
      console.log(resp)
    }
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&family=Playfair+Display:wght@800&display=swap');
</style>
