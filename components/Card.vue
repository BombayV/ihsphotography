<template>
  <div @mouseenter="hover = true" @mouseleave="hover = false" class="relative flex items-center justify-center">
    <img :src="src" class="rounded-md shadow w-full" alt="Image">
    <div v-show="hover" class="absolute bg-zn-900 opacity-50 inset-0 w-full h-full rounded-md transition duration-500"></div>
    <div v-show="hover" class="absolute top-0 w-full h-full flex flex-col justify-between transition duration-200">
      <button @click="downloadImage" class="bg-zn-300 opacity-70 hover:opacity-90 rounded-full w-8 h-8 ml-2 mt-2 flex items-center justify-center transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-zn-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
      <div class="w-full flex items-center justify-center">
        <button @click="$emit('open')" class="opacity-80 bg-green-600 pl-5 pr-5 pt-1 pb-1 mb-2 rounded-md font-mont font-medium text-sm hover:opacity-90 hover:bg-green-500 transition duration-200">Open</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props: {
    src: {
      type: String,
      required: false,
      default: 'https://th.bing.com/th/id/R.fd47f061aa83b06592d867e8928389ca?rik=cEhve2t22B%2bPlA&riu=http%3a%2f%2fblog.ioxu.com%2fwp-content%2fuploads%2f2009%2f08%2fdist_02_01_randomsizedartthrow_01.jpg&ehk=%2bd2cLZE4SWFzkiYyKqJ9SrqcHoisqvryam4YYBXfGxI%3d&risl=&pid=ImgRaw&r=0'
    }
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    async downloadImage() {
      // Download image and save it
      const image = await fetch(this.src)
      const imageBlog = await image.blob()
      const imageURL = URL.createObjectURL(imageBlog)

      const link = document.createElement('a')
      link.href = imageURL
      link.download = 'image'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
})
</script>
