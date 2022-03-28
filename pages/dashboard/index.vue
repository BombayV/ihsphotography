<template>
  <div :class="dark ? 'dark' : 'light'">
    <div class="fixed w-full h-full top-0 left-0 bg-zn-400 flex flex-col items-center justify-center dark:bg-zn-800 transition duration-500">
      <img class="h-28 w-28 mb-1" src="../static/bulldog.png" alt="bulldog">
      <h1 class="font-mont font-semibold text-zn-900 dark:text-zn-50 text-xl mb-5 duration-300 transition">{{ $t('register_header') }}</h1>
      <form class="w-80 flex flex-col" name="register" method="post" onsubmit="return false;">
        <input type="text" @blur="checkName" maxlength="20" v-model.trim="userData.displayName" ref="name" class="mb-3 rounded pt-1.5 pb-1.5 pl-3 pr-3 outline-none bg-zn-100 dark:bg-zn-900 shadow-md border-zn-600 focus:border-green-500 border text-zn-800 dark:text-zn-200 text-sm font-mont focus:ring-green-500 focus:ring-2 transition duration-300" :placeholder="$t('display_name')" pattern="[a-zA-Z]{3,20}" title="Name must be at least 3 to 20 characters" required>
        <input type="text" @blur="checkEmail" v-model.trim="userData.email" ref="email" class="mb-3 rounded pt-1.5 pb-1.5 pl-3 pr-3 outline-none bg-zn-100 dark:bg-zn-900 shadow-md border-zn-600 focus:border-green-500 border text-zn-800 dark:text-zn-200 text-sm font-mont focus:ring-green-500 focus:ring-2 transition duration-300" :placeholder="$t('email')" pattern="([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$" title="Email must follow a correct format. Ex: emailname@gmail.com" required>
        <input type="text" @blur="checkPassword" v-model.trim="userData.password" ref="password" class="mb-3 rounded pt-1.5 pb-1.5 pl-3 pr-3 outline-none bg-zn-100 dark:bg-zn-900 shadow-md border-zn-600 focus:border-green-500 border text-zn-800 dark:text-zn-200 text-sm font-mont focus:ring-green-500 focus:ring-2 transition duration-300" :placeholder="$t('password')" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required>
        <div class="flex justify-between">
          <button @click="registerUser" type="submit" value="Submit" class="text-zn-50 font-mont font-semibold text-sm bg-green-700 shadow-md rounded pt-1.5 pb-1.5 w-full hover:bg-green-600 transition duration-200 focus:ring-3 focus:ring-green-800">{{ $t('create_account') }}</button>
        </div>
      </form>
    </div>
    <NuxtLink class="fixed top-2 left-2 flex flex-row items-center justify-evenly gap-2" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-zn-900 dark:text-zn-100 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span class="font-mont font-semibold text-zn-900 dark:text-zn-100 hover:underline hover:text-green-600 dark:hover:text-green-500 transition duration-200">Back</span>
    </NuxtLink>
    <DarkMode class="fixed bottom-2 right-2"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from "vuex";
import DarkMode from '../components/DarkMode.vue'

export default Vue.extend({
  name: 'RegisterPage',
  components: {
    DarkMode,
  },
  data() {
    return {
      sidebarState: false,
      langState: false,
      userData: {
        displayName: '',
        email: '',
        password: ''
      }
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
