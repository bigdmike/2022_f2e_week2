<template>
  <div
    ref="MainContent"
    class="fixed top-0 left-full w-screen bottom-0 z-30 flex items-center justify-center"
  >
    <div
      data-dialog-box
      class="w-[480px] max-w-full px-20 py-14 rounded-3xl bg-white relative z-10 text-center"
    >
      <p v-html="content" class="font-bold mb-12"></p>
      <button
        @click="Close"
        class="px-4 py-2 text-sm rounded-full bg-primary_blue text-white transition-colors duration-200 hover:bg-primary_blue_light"
      >
        我知道了
      </button>
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
  data() {
    return {
      dialog_animation: null,
    };
  },
  methods: {
    Close() {
      this.$store.commit('SetMainDialog', {
        action: false,
        content: this.content,
      });
    },
  },
  watch: {
    main_dialog() {
      if (this.main_dialog) {
        this.dialog_animation.open();
      } else {
        this.dialog_animation.close();
      }
    },
  },
  computed: {
    main_dialog() {
      return this.$store.state.main_dialog.status;
    },
    content() {
      return this.$store.state.main_dialog.content;
    },
  },
  mounted() {
    this.dialog_animation = new dialog_animation(this.$refs.MainContent);
  },
};
</script>
