<template>
  <div
    ref="MainContent"
    class="fixed top-0 left-full w-screen bottom-0 z-30 flex items-center justify-center"
  >
    <div
      data-dialog-box
      class="w-[553px] max-w-[90%] p-10 flex sm:flex-nowrap flex-wrap items-center rounded-3xl bg-white relative z-10 text-center"
    >
      <div class="w-full">
        <div
          class="border border-dashed border-primary_blue rounded-2xl overflow-hidden"
        >
          <img :src="image" class="w-full block" />
        </div>
      </div>
      <div class="sm:ml-14 sm:w-auto w-full flex-shrink-0">
        <img src="/2022_f2e_week2/img/check.svg" class="mx-auto mb-5" />
        <h3 class="mb-10 text-2xl font-bold text-primary_blue">下載完成</h3>
        <p class="font-bold mb-2">複製連結分享簽署</p>
        <div class="mb-10 flex items-center justify-center">
          <button
            class="w-9 h-9 rounded-md flex items-center justify-center mr-2 bg-primary_white transition-colors duration-200 hover:bg-disable_gray"
          >
            <img
              src="/2022_f2e_week2/img/icon/icon_copy_link.svg"
              class="w-5"
            />
          </button>
          <button
            class="w-9 h-9 rounded-md flex items-center justify-center bg-primary_white transition-colors duration-200 hover:bg-disable_gray"
          >
            <img src="/2022_f2e_week2/img/icon/icon_mail.svg" class="w-5" />
          </button>
        </div>
        <button
          @click="Close"
          class="px-4 py-2 text-sm rounded-full bg-primary_blue text-white transition-colors duration-200 hover:bg-primary_blue_light"
        >
          回主畫面
        </button>
      </div>
    </div>
    <div
      data-dialog-bg
      class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-primary_white bg-opacity-80"
    ></div>
  </div>
</template>

<script>
import { dialog_animation } from '@/gsap/dialog';
export default {
  name: 'LoginDialog',
  props: {
    image: {
      require: true,
    },
  },
  data() {
    return {
      dialog_animation: null,
      status: false,
    };
  },
  methods: {
    Open() {
      this.status = true;
    },
    Close() {
      this.status = false;
      this.$router.push('/tasks');
    },
  },
  watch: {
    status() {
      if (this.status) {
        this.dialog_animation.open();
      } else {
        this.dialog_animation.close();
      }
    },
  },
  mounted() {
    this.dialog_animation = new dialog_animation(this.$refs.MainContent);
  },
};
</script>
