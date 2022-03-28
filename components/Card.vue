<template>
  <div class="relative flex items-center justify-center" @mouseenter="hover = true" @mouseleave="hover = false">
    <img :src="src" class="rounded-md shadow w-full" alt="Image">
    <div v-show="hover" class="absolute bg-zn-900 opacity-50 inset-0 w-full h-full rounded-md transition duration-500"></div>
    <button v-show="hover" class="absolute top-0 w-full h-full flex flex-col justify-end transition duration-200" @click="$emit('open')"></button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SimpleCard',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      hover: false
    }
  }
})
</script>
