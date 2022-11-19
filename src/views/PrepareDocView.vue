<template>
  <main
    class="w-full relative z-10 bg-primary_blue_dark pt-24 min-h-screen flex md:flex-col"
  >
    <div class="w-full max-w-screen-xl mx-auto flex-1 flex md:flex-col">
      <div
        class="w-full bg-primary_white md:rounded-t-3xl rounded-tr-3xl flex-1 md:p-14 sm:px-10 px-8 py-16"
      >
        <div
          class="flex items-center justify-between pb-5 border-b border-zinc-300 sm:mb-20 mb-5"
        >
          <button
            @click="$router.push('/tasks')"
            class="flex flex-shrink-0 md:text-base text-sm items-centertransition-colors duration-200 hover:text-primary_blue_dark"
          >
            <IconArrowLeft class="w-6 h-6 sm:mr-2" />
            <span class="font-bold sm:block hidden">回主畫面</span>
          </button>

          <div class="flex items-center sm:mx-5 mx-3 flex-shrink w-auto">
            <span
              class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full bg-primary_blue text-white"
            >
              <b class="font-bold sm:block hidden">上傳文件</b>
              <b class="font-bold sm:hidden block font-any-body">1</b>
            </span>
            <i
              class="block h-[2px] sm:w-28 w-16 flex-shrink bg-primary_blue opacity-40"
            ></i>
            <span
              class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full bg-transparent text-primary_blue_light"
            >
              <b class="font-bold sm:block hidden">進行簽署</b>
              <b class="font-bold sm:hidden block font-any-body">2</b>
            </span>
            <i
              class="block h-[2px] sm:w-28 w-16 flex-shrink bg-primary_blue opacity-40"
            ></i>
            <span
              class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full bg-transparent text-primary_blue_light"
            >
              <b class="font-bold sm:block hidden">下載檔案</b>
              <b class="font-bold sm:hidden block font-any-body">3</b>
            </span>
          </div>

          <button
            @click="$router.push('/tasks')"
            class="sm:px-4 px-3 md:text-base sm:text-sm text-xs flex-shrink-0 sm:py-2 py-1 rounded-full border border-black font-bold"
          >
            取消簽署
          </button>
        </div>
        <div
          class="w-full max-w-screen-lg sm:p-10 rounded-3xl sm:bg-white mx-auto"
        >
          <div class="w-full border-b border-zinc-300 flex items-end mb-10">
            <button
              @click="active_tab = '上傳新文件'"
              :class="
                active_tab == '上傳新文件'
                  ? 'text-primary_blue border-primary_blue'
                  : 'border-transparent'
              "
              class="px-4 py-2 font-bold border-b-2"
            >
              上傳新文件
            </button>
            <button
              @click="active_tab = '歷史文件'"
              :class="
                active_tab == '歷史文件'
                  ? 'text-primary_blue border-primary_blue'
                  : 'border-transparent'
              "
              class="px-4 py-2 font-bold border-b-2"
            >
              歷史文件
            </button>
          </div>

          <FileUploader v-show="active_tab == '上傳新文件'" />
          <FileList v-show="active_tab == '歷史文件'" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import IconArrowLeft from '@/components/svg/icon_arrow_left.vue';
import FileUploader from '@/components/PrepareDoc/FileUploader.vue';
import FileList from '@/components/PrepareDoc/FileList.vue';
export default {
  name: 'PrepareDocView',
  components: {
    IconArrowLeft,
    FileUploader,
    FileList,
  },
  data() {
    return {
      active_tab: '上傳新文件',
    };
  },
};
</script>
