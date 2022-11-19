<template>
  <header class="fixed top-0 left-0 right-0 z-30 h-20 p-2 bg-primary_blue_dark">
    <div
      class="w-full max-w-screen-xl mx-auto flex items-center justify-between h-full xl:px-0 px-5"
    >
      <router-link class="inline-block h-full" to="/tasks">
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
        <div class="relative">
          <button
            @click="OpenAccountMenu"
            ref="AccountMenuBtn"
            class="px-2 py-1 flex items-center bg-white rounded-full font-bold transition-colors duration-200 hover:bg-primary_blue hover:text-white"
          >
            <IconMenu class="md:mr-3 mr-1" />
            <span
              class="flex items-center justify-center md:w-8 md:h-8 w-6 h-6 bg-primary_blue_light text-white rounded-full"
              >F</span
            >
          </button>
          <ol
            ref="AccountMenu"
            :class="account_menu_open ? 'block' : 'hidden'"
            class="absolute right-0 top-full w-[200px] bg-white text-sm rounded-md drop-shadow-xl"
          >
            <li class="border-b border-zinc-300 px-4 py-2">
              <h4 class="font-bold text-sm text-primary_black">Fio Lee</h4>
              <p class="font-medium text-xs text-primary_black text-opacity-50">
                fiolee0909@gmail.com
              </p>
            </li>
            <li class="border-b border-zinc-300 flex items-center px-4 py-2">
              <p class="text-sm font-bold">Free</p>
              <span
                class="text-xs rounded-full md:ml-4 ml-3 border flex-shrink-0 border-primary_blue text-primary_blue py-1 font-semibold md:px-2 px-1 flex items-center"
              >
                <img
                  src="/2022_f2e_week2/img/icon/icon_pro.svg"
                  class="md:w-4 w-3 md:mr-1 block"
                />
                <p class="md:block hidden">立即升級</p>
              </span>
            </li>
            <li class="border-b border-zinc-300">
              <button
                @click="Logout"
                class="block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue"
              >
                登出
              </button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconMenu from '@/components/svg/icon_menu.vue';
import { delLocalStorage } from '@/common/localstorage';
export default {
  name: 'MainHeader',
  components: {
    IconMenu,
  },
  data() {
    return {
      account_menu_open: false,
    };
  },
  methods: {
    OpenLoginDialog() {
      this.$store.commit('SetLoginDialog', true);
    },
    OpenSignupDialog() {
      this.$store.commit('SetSignupDialog', true);
    },
    StopBubble(event) {
      if (event && event.stopPropagatioin) {
        event.stopPropagatioin();
      } else {
        window.event.cancelBubble = true;
      }
    },
    OpenAccountMenu(event) {
      this.account_menu_open = true;
      this.StopBubble(event);
      document.onclick = () => {
        this.account_menu_open = false;
        document.onclick = null;
      };
    },
    Logout() {
      delLocalStorage('member_token');
      delLocalStorage('upload_file');
      delLocalStorage('sign_list');
      this.$router.push('/');
    },
  },
  mounted() {
    this.$refs.AccountMenu.onclick = (event) => {
      this.StopBubble(event);
    };
  },
};
</script>
