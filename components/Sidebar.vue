<template>
  <transition name="slide-fade">
    <div v-show="sidebarState" class="fixed flex justify-center items-center w-full h-48 mt-12">
      <div class="w-full pl-3 pr-3 pt-4 pb-4 bg-zn-600 dark:bg-zn-900 rounded-lg mr-2.5 ml-2.5 shadow-md">
        <div class="w-full flex justify-between items-center mb-2">
          <span class="text-zn-100 font-semibold font-mont text-md ml-3">Irvington High School</span>
          <button @click="$emit('closeSidebar', false)" class="focus:ring-3 focus:ring-green-500 flex items-center justify-center mr-3 transition duration-150 rounded bg-zn-450 hover:bg-zn-500 dark:bg-zn-800 dark:hover:bg-zn-700 w-9 h-9">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <LongButton class="text-zn-900 dark:text-zn-200">
          <NuxtLink class="w-full h-full text-left" to="/artists">{{ $t('artists') }}</NuxtLink>
        </LongButton>
        <LongButton class="text-zn-900 dark:text-zn-200" @event="$emit('setLangState', true)">{{ $t('language') }}</LongButton>
        <LongButton class="text-zn-900 dark:text-zn-200">
          <NuxtLink class="w-full h-full text-left" to="/support">{{ $t('support') }}</NuxtLink>
        </LongButton>
        <LongButton class="text-green-500 dark:text-green-400">
          <NuxtLink class="w-full h-full text-left" to="/login">{{ $t('login') }}</NuxtLink>
        </LongButton>
        <LongButton  class="text-green-500 dark:text-green-400">
          <NuxtLink class="w-full h-full text-left" to="/register">{{ $t('signup') }}</NuxtLink>
        </LongButton>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import LongButton from "~/components/LongButton.vue";

export default Vue.extend({
  name: 'side-bar',
  components: {
    LongButton
  },
  props: {
    sidebarState: {
      type: Boolean,
      required: true
    }
  },
})
</script>
