<template>
  <div :class="dark ? 'dark' : 'light'">
    <div class="fixed w-full h-full bg-zn-400 dark:bg-zn-800 transition duration-500">
      <Navbar @setSidebar="setSidebar"/>
      <DarkMode class="fixed bottom-2 right-2"/>
    </div>
    <Sidebar :sidebar-state="sidebarState" @setLangState="setLangState" @closeSidebar="setSidebar"/>
    <Langs :lang-state="langState" @setLanguage="setLanguage"/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";
import DarkMode from "~/components/DarkMode.vue";
import Sidebar from "~/components/Sidebar.vue";
import Navbar from "~/components/Navbar.vue";
import Langs from "~/components/Langs.vue";

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
    }
  },
  computed: {
    ...mapGetters(['dark'])
  },
  methods: {
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
</style>
