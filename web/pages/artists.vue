<template>
  <div :class="dark ? 'dark' : 'light'">
    <div class="fixed flex flex-col items-center justify-center w-full h-full bg-zn-400 dark:bg-zn-800 transition duration-500">

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
