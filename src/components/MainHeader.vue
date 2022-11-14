<template>
  <header class="fixed top-0 left-0 right-0 z-30 h-20 p-2">
    <div
      class="w-full max-w-screen-xl mx-auto flex items-center justify-between h-full xl:px-0 px-5"
    >
      <router-link class="inline-block h-full" to="/">
        <img src="/2022_f2e_week2/img/logo.svg" class="h-full" />
      </router-link>

      <div>
        <button
          @click="OpenSignupDialog"
          class="sm:px-6 px-4 sm:py-2 py-1 bg-white rounded-full font-bold sm:mr-5 mr-1 transition-colors duration-200 hover:bg-primary_blue hover:text-white"
        >
          註冊
        </button>
        <button
          @click="OpenLoginDialog"
          class="sm:px-6 px-4 sm:py-2 py-1 bg-white rounded-full font-bold transition-colors duration-200 hover:bg-primary_blue hover:text-white"
        >
          登入
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  methods: {
    OpenLoginDialog() {
      this.$store.commit('SetLoginDialog', true);
    },
    OpenSignupDialog() {
      this.$store.commit('SetSignupDialog', true);
    },
  },
};
</script>
