<template>
  <div :class="dark ? 'dark' : 'light'">
    <div class="fixed w-full h-full top-0 left-0 bg-zn-400 flex flex-col items-center justify-center dark:bg-zn-800 transition duration-500"><img class="h-28 w-28 mb-1" src="../static/bulldog.png" alt="bulldog">
      <h1 class="font-mont font-semibold text-zn-900 dark:text-zn-50 text-xl mb-5 duration-300 transition">{{ $t('sign_header') }}</h1>
      <form class="w-80 flex flex-col" name="login" method="post" onsubmit="return false;">
        <input ref="username" v-model.trim="userData.username" type="text" class="mb-3 rounded pt-1.5 pb-1.5 pl-3 pr-3 outline-none bg-zn-100 dark:bg-zn-900 shadow-md border-zn-600 focus:border-green-500 border text-zn-800 dark:text-zn-200 text-sm font-mont focus:ring-green-500 focus:ring-2 transition duration-300" required pattern="([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$" :placeholder="$t('email')" title="Email must follow a correct format. Ex: emailname@gmail.com" @blur="checkEmail">
        <input ref="password" v-model.trim="userData.password" type="text" class="mb-3 rounded pt-1.5 pb-1.5 pl-3 pr-3 outline-none bg-zn-100 dark:bg-zn-900 shadow-md border-zn-600 focus:border-green-500 border text-zn-800 dark:text-zn-200 text-sm font-mont focus:ring-green-500 focus:ring-2 transition duration-300"  title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" :placeholder="$t('password')" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}" required @blur="checkPassword">
        <div class="flex justify-between">
          <button @click="loginUser" type="submit" value="Submit" class="text-zn-50 font-mont font-semibold text-sm bg-green-700 shadow-md rounded pt-1 pb-1 pl-8 pr-8 hover:bg-green-600 transition duration-200 focus:ring-3 focus:ring-green-800">{{ $t('sign_in') }}</button>
          <button type="button" class="text-zn-700 dark:text-zn-500 font-mont font-medium text-sm hover:text-red-600 dark:hover:text-red-400 hover:underline duration-150 transition focus:text-red-700 dark:focus:text-red-500" @click="loginUser">{{ $t('forgot') }}</button>
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
  name: 'LoginPage',
  components: {
    DarkMode,
  },
  data() {
    return {
      sidebarState: false,
      langState: false,
      userData: {
        username: '',
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
  },
  methods: {
    checkEmail() {
      const username = this.userData.username
      const elem = this.$refs.username
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
        elem.classList.add('border-red-500', 'ring-2', 'ring-red-500')
        elem.classList.remove('border-zn-600')
        return false
      } else {
        elem.classList.remove('border-red-500', 'ring-2', 'ring-red-500')
        elem.classList.add('border-zn-600')
        return true
      }
    },
    checkPassword() {
      const password = this.userData.password
      const elem = this.$refs.password
      // Check if password is at least 6 characters long, and contains at least one number, one lowercase and one uppercase letter
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)) {
        elem.classList.add('border-red-500', 'ring-2', 'ring-red-500')
        elem.classList.remove('border-zn-600')
        return false
      } else {
        elem.classList.remove('border-red-500', 'ring-2', 'ring-red-500')
        elem.classList.add('border-zn-600')
        return true
      }
    },
    loginUser() {
      if (this.checkEmail() && this.checkPassword()) {
        console.log(this.userData)
      }
    }
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&family=Playfair+Display:wght@800&display=swap');
</style>
