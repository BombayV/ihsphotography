<template>
  <div :class="dark ? 'dark' : 'light'">
    <div class="fixed flex flex-col items-center justify-center w-full h-full bg-zn-400 dark:bg-zn-800 transition duration-500">
      <span class="font-bold text-4xl text-zn-900 font-mont underline dark:text-zn-100 duration-500">Under construction</span>
      <NuxtLink to="/">Go back</NuxtLink>
      <DarkMode class="fixed bottom-2 right-2"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";
import DarkMode from "~/components/DarkMode.vue";

export default Vue.extend({
  name: 'SupportPage',
  components: {
    DarkMode
  },
  computed: {
    ...mapGetters(['dark'])
  },
})
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&family=Playfair+Display:wght@800&display=swap');
</style>
