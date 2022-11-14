<template>
  <div
    ref="MainContent"
    class="fixed top-0 left-full w-screen bottom-0 z-[31] flex sm:items-center items-end justify-center sm:pt-0 pt-20"
  >
    <div
      data-dialog-box
      class="w-[480px] max-w-full p-5 rounded-3xl relative z-10 bg-white sm:h-auto h-full"
    >
      <button @click="Close" class="absolute top-5 left-5 z-10 p-2">
        <img src="/2022_f2e_week2/img/icon/icon_close.svg" class="w-3 h-3" />
      </button>
      <div class="text-center mb-5">
        <img src="/2022_f2e_week2/img/logo.svg" class="w-32 mx-auto" />
      </div>
      <h3 class="text-2xl font-bold text-center mb-5">註冊</h3>
      <ol class="mb-5">
        <li class="w-full mb-3">
          <button
            class="flex w-full items-center px-5 py-4 border border-black rounded-md transition-colors duration-200 hover:bg-primary_blue_dark hover:text-white"
          >
            <img
              src="/2022_f2e_week2/img/icon/icon_facebook.svg"
              class="w-6 mr-3"
            />
            <p class="text-sm font-medium">使用 Facebook 註冊</p>
          </button>
        </li>
        <li class="w-full">
          <button
            class="flex w-full items-center px-5 py-4 border border-black rounded-md transition-colors duration-200 hover:bg-primary_blue_dark hover:text-white"
          >
            <img
              src="/2022_f2e_week2/img/icon/icon_google.svg"
              class="w-6 mr-3"
            />
            <p class="text-sm font-medium">使用 Google 註冊</p>
          </button>
        </li>
      </ol>
      <div class="flex items-center mb-5">
        <span class="flex-1 h-[1px] bg-disable_gray"></span>
        <p class="text-sm font-bold text-disable_gray px-5">
          或使用電子信箱註冊
        </p>
        <span class="flex-1 h-[1px] bg-disable_gray"></span>
      </div>
      <div class="mb-5">
        <div class="w-full mb-3">
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="請輸入您的電子郵件"
            class="py-4 px-5 border border-black rounded-md w-full"
          />
          <p v-if="GetError('email')" class="text-xs text-primary_red">
            請輸入您的電子郵件
          </p>
        </div>
        <div class="w-full mb-5">
          <div class="relative">
            <input
              v-model="password"
              :type="!password_visibility ? 'password' : 'text'"
              name="password"
              placeholder="請輸入您的密碼"
              class="py-4 pl-5 pr-14 border border-black rounded-md w-full relative z-0"
            />
            <button
              @click="password_visibility = !password_visibility"
              class="absolute right-5 top-1/2 transform -translate-y-1/2 z-10"
            >
              <img
                v-if="password_visibility"
                src="/2022_f2e_week2/img/icon/icon_visibility_off.svg"
                class="w-6"
              />
              <img
                v-else
                src="/2022_f2e_week2/img/icon/icon_visibility.svg"
                class="w-6"
              />
            </button>
          </div>
          <p v-if="GetError('password')" class="text-xs text-primary_red">
            請輸入您的密碼
          </p>
        </div>
        <div class="w-full mb-5">
          <div class="relative">
            <input
              v-model="re_password"
              :type="!re_password_visibility ? 'password' : 'text'"
              name="re_password"
              placeholder="再次輸入您的密碼"
              class="py-4 pl-5 pr-14 border border-black rounded-md w-full relative z-0"
            />
            <button
              @click="re_password_visibility = !re_password_visibility"
              class="absolute right-5 top-1/2 transform -translate-y-1/2 z-10"
            >
              <img
                v-if="re_password_visibility"
                src="/2022_f2e_week2/img/icon/icon_visibility_off.svg"
                class="w-6"
              />
              <img
                v-else
                src="/2022_f2e_week2/img/icon/icon_visibility.svg"
                class="w-6"
              />
            </button>
          </div>
          <p v-if="GetError('re_password')" class="text-xs text-primary_red">
            請再次輸入相同的密碼
          </p>
        </div>
        <div>
          <button
            @click="ValidateForm"
            :class="
              validate
                ? 'bg-primary_blue hover:bg-primary_blue_light'
                : 'bg-disable_gray'
            "
            class="w-full block rounded-full py-3 text-white transition-colors duration-200"
          >
            註冊
          </button>
        </div>
      </div>
      <div class="mb-5">
        <p class="font-bold text-sm text-center">
          註冊表示您以詳閱並同意
          <a class="underline text-primary_blue">服務條款</a> 及
          <a class="underline text-primary_blue">隱私權政策</a>
        </p>
      </div>
      <div class="border-t border-disable_gray pt-3">
        <p class="font-bold text-sm">
          已有帳戶?
          <a
            @click="OpenLogin"
            class="cursor-pointer underline text-primary_blue"
            >登入</a
          >
        </p>
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
import { validEmail } from '@/common/validate.js';
export default {
  name: 'SignupDialog',
  data() {
    return {
      email: 'example@gmail.com',
      password: 'example12345',
      re_password: 'example12345',
      password_visibility: false,
      re_password_visibility: false,
      errors: [],
      dialog_animation: null,
    };
  },
  methods: {
    GetError(key) {
      return this.errors.indexOf(key) != -1;
    },
    ValidateForm() {
      this.errors = [];
      !validEmail(this.email) ? this.errors.push('email') : '';
      this.password == '' ? this.errors.push('password') : '';
      this.re_password != this.password ? this.errors.push('re_password') : '';
      if (this.errors.length <= 0) {
        this.Sinup();
      }
    },
    Sinup() {
      this.OpenLogin();
      this.$store.commit('SetMainDialog', {
        action: true,
        content: '已成功註冊!請從登入畫面進行登入',
      });
    },
    Close() {
      this.errors = [];
      this.password_visibility = false;
      this.re_password_visibility = false;
      this.$store.commit('SetSignupDialog', false);
    },
    OpenLogin() {
      this.Close();
      this.$store.commit('SetLoginDialog', true);
    },
  },
  watch: {
    signup_dialog() {
      if (this.signup_dialog) {
        this.dialog_animation.open();
      } else {
        this.dialog_animation.close();
      }
    },
  },
  computed: {
    validate() {
      return this.email != '' && this.password != '';
    },
    signup_dialog() {
      return this.$store.state.signup_dialog;
    },
  },
  mounted() {
    this.dialog_animation = new dialog_animation(this.$refs.MainContent);
  },
};
</script>
