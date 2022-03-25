<template>
  <div :class="dark ? 'dark' : 'light'">
    <div @click="handleClick" class="fixed w-full h-full top-0 left-0 bg-zn-400 dark:bg-zn-800 transition duration-500">
      <!--Create a nav bar with tailwindcss-->
      <div class="fixed w-full h-startup inset-0 p-2 grid grid-cols-12 gap-1.5 transform -skew-y-12 scale-125">
        <div v-for="(item, index) in grid" :key="index" class="grid-item bg-zn-300 rounded dark:bg-zn-900 opacity-70 animate-pulse" :class="`col-span-${item.span} duration-500`"></div>
      </div>
      <nav style="backdrop-filter: blur(0.2vh);" class="fixed w-full flex items-center justify-between flex-wrap h-16 text-zn-900 dark:text-white z-50">
        <!--Reload the page when the logo is clicked-->
        <button @click.self="refreshPage" class="focus:border-green-600 dark:focus:border-green-400 hover:text-green-600 dark:hover:text-green-400 border-b border-zn-900 dark:border-zn-50 text-lg font-mont font-semibold ml-3 transition duration-150 h-7">IHS Photography</button>
        <button @click="setSidebar(true)" class="focus:ring-3 focus:ring-green-500 flex items-center justify-center mr-3 transition duration-150 rounded bg-zn-450 hover:bg-zn-500 dark:bg-zn-700 dark:hover:bg-zn-800 w-9 h-9">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
      <div class="relative w-full h-startup flex flex-col items-center justify-center">
        <h1 style="font-family: 'Playfair Display', 'serif';" class="text-title text-center font-extrabold text-zn-900 mr-24 ml-24 mb-5 dark:text-zn-100 animate-fade transition duration-500">Irvington Photography</h1>
        <p class="font-mont text-center mr-4 ml-4 font-medium text-zn-800 dark:text-zn-400 animate-fadeIn transition duration-500">Where artists create their future. Start sharing your creativity with others around you. Let the world know who you are.</p>
        <button class="transition duration-500 bg-green-500 hover:bg-green-400 rounded-md pl-5 pr-5 h-9 font-mont font-semibold text-zn-800 text-sm mt-6 shadow-md border-none animate-fadeBottom">Meet our artists</button>
      </div>
      <DarkMode class="fixed bottom-2 right-2"/>
    </div>
    <transition name="slide-fade">
      <div v-if="sidebarState" class="fixed flex justify-center items-center w-full h-48 mt-5">
        <div class="w-full pl-3 pr-3 pt-4 pb-4 bg-zn-600 dark:bg-zn-900 rounded-lg mr-2.5 ml-2.5 shadow-md">
          <div class="w-full flex justify-between items-center mb-1">
            <span class="text-zn-100 font-semibold font-mont text-md ml-3">Irvington High School</span>
            <button @click="setSidebar(false)" class="focus:ring-3 focus:ring-green-500 flex items-center justify-center mr-3 transition duration-150 rounded bg-zn-450 hover:bg-zn-500 dark:bg-zn-700 dark:hover:bg-zn-800 w-9 h-9">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <LongButton text="Language" class="text-zn-900 dark:text-zn-200"/>
          <LongButton text="Support" class="text-zn-900 dark:text-zn-200"/>
          <LongButton text="Log In" class="text-green-500 dark:text-green-400"/>
          <LongButton text="Sign Up" class="text-green-500 dark:text-green-400"/>
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
      }
    },
    setSidebar(bool : boolean) {
      this.sidebarState = bool
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
</style>
