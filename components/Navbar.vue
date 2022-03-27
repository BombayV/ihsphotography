<template>
  <nav style="backdrop-filter: blur(0.2vh);" class="fixed w-full flex items-center justify-between flex-wrap h-16 text-zn-900 dark:text-white z-50">
    <!--Reload the page when the logo is clicked-->
    <NuxtLink to="/" class="focus:border-green-600 dark:focus:border-green-400 hover:text-green-600 dark:hover:text-green-400 border-b border-zn-900 dark:border-zn-50 text-lg font-mont font-semibold ml-3 transition duration-150 h-7">IHS  {{ $t('title') }}</NuxtLink>
    <button @click="$emit('setSidebar', true)" class="focus:ring-3 focus:ring-green-500 flex items-center justify-center mr-3 transition duration-150 rounded bg-zn-450 hover:bg-zn-500 dark:bg-zn-800 dark:hover:bg-zn-700 w-9 h-9">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: 'Nav-bar'
})
</script>
