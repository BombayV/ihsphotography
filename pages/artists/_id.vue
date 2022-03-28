<template>
  <div class="fixed w-full h-full" :class="dark ? 'dark' : 'light'">
    <div class="absolute w-full h-full bg-zn-400 dark:bg-zn-800 transition duration-500 z-0 flex flex-col items-center">
      <h1 class="font-playfair text-title text-center dark:text-zn-50 mt-5">{{name}}</h1>
      <p class="ml-2.5 mr-2.5 mt-1 text-center font-mont text-md font-md dark:text-zn-400">Some very long description from the user which will be fetch from the database or something along that.</p>
      <div class="relative w-full px-20 mt-5 mb-5 flex flex-col flex-wrap items-center justify-center md:hidden">
        <Card v-for="(card, index) in photos" :key="index" :src="card.src" class="w-4/5 mb-5" @open="activateInstance(card.id, card.src)"/>
      </div>
      <div class="relative hidden w-full px-20 mt-5 mb-5 flex-wrap md:flex">
        <div v-for="(col, i) in columns" :key="i" class="w-1/3">
          <div v-for="(card, index) in col" :key="index" class="w-full">
            <div class="w-full p-2">
              <Card :src="card.src" class="w-full" @open="activateInstance(card.id, card.src)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DarkMode class="fixed bottom-2 right-2"/>
    <NuxtLink class="fixed top-2 left-2 flex flex-row items-center justify-evenly gap-2" to="/artists">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-zn-900 dark:text-zn-100 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span class="font-mont font-semibold text-zn-900 dark:text-zn-100 hover:underline hover:text-green-600 dark:hover:text-green-500 transition duration-200">Back</span>
    </NuxtLink>
    <CommentView v-if="activeInstance" :id="activeInstance" @close="closeInstance" class="w-full h-full z-50"/>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from "vuex";
import DarkMode from "~/components/DarkMode.vue";
import Card from "~/components/Card.vue";
import CommentView from '~/components/CommentView.vue';

export default Vue.extend({
  name: 'ArtistId',
  components: {
    DarkMode,
    Card,
    CommentView
  },
  async asyncData({params, $http}) {
    // Replace underscores with spaces
    const name = await params.id.replace(/_/g, ' ');
    return {
      name
    }
  },
  data() {
    return {
      activeInstance: 'asxasdas',
      photos: [
        {
          id: 'asxasdas'
        }
      ],
    }
  },
  computed: {
    ...mapGetters(['dark']),
    columns() {
      const length = Math.ceil(this.photos.length / 3)
      const newPhotos = [...this.photos]
      return new Array(3)
      .fill(0)
      .map((i) => {
        return newPhotos.splice(0, length)
      })
    }
  },
  methods: {
    activateInstance(id, src) {
      this.activeInstance = id;
    },
    closeInstance() {
      this.activeInstance = null;
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&family=Playfair+Display:wght@800&display=swap');
</style>
