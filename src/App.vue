<template>
  <div id="app" class="">
    <MainHeader v-if="!member_view" />
    <MemberHeader v-else />
    <LoginDialog />
    <SignupDialog />
    <MainDialog />
    <router-view />
  </div>
</template>

<style src="@/assets/css/output.css"></style>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MemberHeader from '@/components/MemberHeader.vue';
import LoginDialog from '@/components/LoginDialog.vue';
import SignupDialog from '@/components/SignupDialog.vue';
import MainDialog from '@/components/MainDialog.vue';
export default {
  name: 'app',
  components: {
    MainHeader,
    LoginDialog,
    SignupDialog,
    MainDialog,
    MemberHeader,
  },
  data() {
    return {
      member_view: false,
    };
  },
  watch: {
    $route() {
      this.member_view = this.$route.meta.requiresAuth;
    },
  },
  mounted() {
    this.member_view = this.$route.meta.requiresAuth;
  },
};
</script>
