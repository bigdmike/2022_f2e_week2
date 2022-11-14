<template>
  <div
    class="min-h-screen w-full relative z-10 bg-primary_white flex items-center pt-52"
  >
    <div
      class="w-full max-w-screen-xl mx-auto flex md:flex-row flex-col-reverse md:items-center"
    >
      <div
        class="md:w-1/2 w-full transform lg:-translate-x-5 md:translate-x-0 sm:-translate-x-16 -translate-x-5"
      >
        <img
          src="/2022_f2e_week2/img/cover_logo.svg"
          class="sm:w-[600px] w-11/12"
        />
      </div>
      <div
        class="md:w-1/2 w-full flex items-center justify-center md:mb-0 sm:mb-36 mb-20 xl:px-0 px-10"
      >
        <div class="w-full">
          <h2
            class="lg:text-5xl text-4xl lg:leading-none leading-normal font-bold text-primary_blue mb-5"
          >
            行動簽署<br class="sm:hidden block" /><span
              class="sm:inline-block hidden"
              >，</span
            >流程更簡易、快速
          </h2>
          <p class="font-bold mb-10 sm:text-base text-sm">
            最快速、安全、效率的電子簽名服務，線上文件簽署即簽即傳，讓業務推展順暢無阻
          </p>
          <button
            @click="OpenLoginDialog"
            class="bg-primary_blue inline-block text-white px-10 py-3 rounded-full transition-colors duration-200 hover:bg-primary_blue_dark"
          >
            立即免費試用
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
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
