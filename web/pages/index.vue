<template>
  <div class="fixed w-full h-full bg-gray-400 top-0 left-0">
    <!--Create a nav bar with tailwindcss-->
    <nav class="flex items-center justify-between flex-wrap bg-gray-700 border-b-2 p-6">
      <button class="flex items-center px-3 py-2 rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-5 w-5 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3
        h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="../static/ferris.png" alt="Bulldog" class="h-10 mr-3">
        <span class="font-medium text-xl tracking-tight font-spline">IHS Photography</span>
      </div>
    </nav>
    <div class="relative w-full h-startup bg-gray-300 flex flex-col items-center justify-center">
      <h1 style="font-family: 'Noto Serif', serif;" class="text-title w-5/6 text-center font-bold">Irvington High School Photography</h1>
      <p>Start sharing your creativity with others around you. Inspire others and get inspired!</p>
    </div>
    <button
      class="fixed flex justify-center items-center w-9 h-9 bg-atl-8 bottom-2 right-2 rounded cursor-pointer focus:ring-3 focus:ring-atl-3 hover:bg-atl-4 transition-all duration-200 z-10"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-atl-2"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    console.log('IndexPage mounted')
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');</style>
