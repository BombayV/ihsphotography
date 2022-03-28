<template>
  <div>
    <div @click="$emit('close')" class="sticky flex w-full h-full bg-zn-900 opacity-90"></div>
    <img style="transform: translate(-50%, -50%); top: 50%; left: 50%" class="fixed w-3/4 rounded shadow" :src="id" alt="img">
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CommentView',
  props: {
    id: {
      type: String,
      required: true
    },
  },
  mounted() {
    console.log('CommentView mounted')
  },
})
</script>

