<template>
  <div class="flex items-center justify-between pb-5 border-b border-zinc-300">
    <button
      v-if="view_mode == 'edit'"
      @click="$router.push('/tasks')"
      class="flex flex-shrink-0 lg:text-base sm:text-sm text-xs items-centertransition-colors duration-200 hover:text-primary_blue_dark"
    >
      <IconArrowLeft class="w-6 h-6 sm:mr-2" />
      <span class="font-bold sm:block hidden">回主畫面</span>
    </button>

    <button
      v-if="view_mode == 'finish'"
      @click="$emit('change-mode', 'edit')"
      class="flex flex-shrink-0 lg:text-base sm:text-sm text-xs items-centertransition-colors duration-200 hover:text-primary_blue_dark"
    >
      <IconArrowLeft class="w-6 h-6 sm:mr-2" />
      <span class="font-bold sm:block hidden">上一步</span>
    </button>

    <div class="px-4 flex-1">
      <div class="flex items-center justify-between flex-1 w-auto relative">
        <span
          class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full bg-primary_blue_light text-white relative z-10"
        >
          <b class="font-bold sm:block hidden lg:text-base text-sm">上傳文件</b>
          <b class="font-bold sm:hidden block font-any-body">1</b>
        </span>

        <span
          :class="
            view_mode == 'edit' ? 'bg-primary_blue' : 'bg-primary_blue_light'
          "
          class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full text-white relative z-10"
        >
          <b class="font-bold sm:block hidden lg:text-base text-sm">進行簽署</b>
          <b class="font-bold sm:hidden block font-any-body">2</b>
        </span>

        <span
          :class="
            view_mode == 'finish'
              ? 'bg-primary_blue text-white'
              : 'bg-primary_white text-primary_blue_light'
          "
          class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full relative z-10"
        >
          <b class="font-bold sm:block hidden lg:text-base text-sm">下載檔案</b>
          <b class="font-bold sm:hidden block font-any-body">3</b>
        </span>

        <i
          class="block h-[2px] w-full absolute top-1/2 left-0 right-0 transform -translate-y-1/2 bg-primary_blue opacity-40"
        ></i>
      </div>
    </div>

    <div class="flex items-center">
      <button
        @click="$router.push('/tasks')"
        class="sm:px-4 px-3 mr-2 lg:text-base sm:text-sm text-xs flex-shrink-0 sm:py-2 py-1 rounded-full border border-black font-bold"
      >
        取消
      </button>
      <button
        v-if="view_mode == 'edit'"
        @click="$emit('change-mode', 'finish')"
        class="sm:px-4 px-3 lg:text-base sm:text-sm text-xs flex-shrink-0 sm:py-2 py-1 rounded-full bg-primary_blue text-white font-bold"
      >
        完成
      </button>
      <button
        v-if="view_mode == 'finish'"
        @click="$emit('download')"
        class="sm:px-4 px-3 lg:text-base sm:text-sm text-xs flex-shrink-0 sm:py-2 py-1 rounded-full bg-primary_blue text-white font-bold"
      >
        下載文件
      </button>
    </div>
  </div>
</template>

<script>
import IconArrowLeft from '@/components/svg/icon_arrow_left.vue';
export default {
  name: 'ProgressNav',
  props: {
    view_mode: {
      require: true,
      type: String,
    },
  },
  components: {
    IconArrowLeft,
  },
};
</script>
