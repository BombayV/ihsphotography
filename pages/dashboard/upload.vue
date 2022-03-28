<template>
  <div :class="dark ? 'dark' : 'light'">
    <DarkMode class="fixed bottom-2 right-2"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from "vuex";
import DarkMode from '../../components/DarkMode.vue'

export default Vue.extend({
  name: 'UploadDashboard',
  components: {
    DarkMode,
  },
  data() {
    return {
      sidebarState: false,
    }
  },
  computed: {
    ...mapGetters(['dark'])
  },
  mounted() {
    const lang = localStorage.getItem('lang')
    if (lang !== null) {
      // @ts-ignore
      this.$i18n.locale = lang
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&family=Playfair+Display:wght@800&display=swap');
</style>
