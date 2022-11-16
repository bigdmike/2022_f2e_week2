<template>
  <div
    ref="MainContent"
    class="fixed top-0 left-full w-screen bottom-0 z-30 flex items-center justify-center"
  >
    <div
      data-dialog-box
      class="w-[480px] max-w-full p-10 rounded-3xl bg-white relative z-10 text-center"
    >
      <button @click="Close" class="absolute top-5 left-5 z-10 p-2">
        <img src="/2022_f2e_week2/img/icon/icon_close.svg" class="w-3 h-3" />
      </button>
      <h4 class="text-2xl font-bold mb-5 text-center">重新命名文件</h4>
      <div class="w-full mb-5">
        <input
          v-model="title"
          type="text"
          placeholder="請輸入文件標題"
          class="py-3 px-5 border border-black rounded-md w-full"
        />
        <p v-if="GetError('title')" class="text-xs text-primary_red">
          請輸入文件標題
        </p>
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="Validate"
          class="px-4 py-2 mr-2 text-sm rounded-full bg-primary_blue text-white transition-colors duration-200 hover:bg-primary_blue_light"
        >
          儲存
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
  name: 'RenameDialog',
  data() {
    return {
      dialog_animation: null,
      status: false,
      title: '',
      errors: [],
    };
  },
  methods: {
    Validate() {
      this.errors = [];
      this.title == '' ? this.errors.push('title') : '';
      if (this.errors.length <= 0) {
        this.$emit('update-action', this.title);
        this.Close();
      }
    },
    GetError(key) {
      return this.errors.indexOf(key) != -1;
    },
    Open(title) {
      this.title = title;
      this.status = true;
    },
    Close() {
      this.status = false;
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
