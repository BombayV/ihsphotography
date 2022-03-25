<template>
  <button @click="$emit('event')" class="rounded flex justify-start items-center w-full transition duration-150 font-medium pl-3 pr-3 pt-1.5 pb-1.5 hover:shadow-md font-mont dark:hover:bg-zn-800 dark:hover:text-zn-200 dark:hover:border-zn-200 m-0.5 dark:hover:border-b-0 hover:bg-zn-700 hover:text-zn-200 hover:border-zn-200 hover:border-b-0 focus:bg-zn-700 dark:focus:bg-zn-800 focus:text-zn-200 focus:border-zn-200 focus:border-b-0">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LongButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'text-zn-200',
    },
  },
});
</script>
