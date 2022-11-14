<template>
  <header class="fixed top-0 left-0 right-0 z-30 h-20 p-2">
    <div
      class="w-full max-w-screen-xl mx-auto flex items-center justify-between h-full xl:px-0 px-5"
    >
      <router-link class="inline-block h-full" to="/">
        <img
          src="/2022_f2e_week2/img/white_logo.svg"
          class="h-full w-36 object-contain"
        />
      </router-link>

      <div class="flex-1 relative md:mx-20 mx-5 sm:block hidden">
        <img
          src="/2022_f2e_week2/img/icon/icon_search.svg"
          class="absolute top-1/2 left-5 transform -translate-y-1/2"
        />
        <input
          type="text"
          name="search"
          placeholder="搜尋文件"
          class="w-full py-3 pl-14 pr-10 md:rounded-xl rounded-2xl bg-primary_white bg-opacity-40 relative z-0 placeholder-gray-300"
        />
      </div>

      <div class="flex items-center">
        <button class="font-bold text-white">我的簽名</button>
        <button @click="OpenSignupDialog" class="md:mx-5 mx-3">
          <img src="/2022_f2e_week2/img/icon/icon_bell.svg" class="w-6" />
        </button>
        <button
          @click="OpenLoginDialog"
          class="px-2 py-1 flex items-center bg-white rounded-full font-bold transition-colors duration-200 hover:bg-primary_blue hover:text-white"
        >
          <img
            class="md:mr-3 mr-1"
            src="/2022_f2e_week2/img/icon/icon_menu.svg"
          />
          <span
            class="flex items-center justify-center md:w-8 md:h-8 w-6 h-6 bg-primary_blue_light text-white rounded-full"
            >F</span
          >
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
