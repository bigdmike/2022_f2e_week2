<template>
  <div class="w-full">
    <div class="flex items-center justify-between py-2 px-4 bg-primary_white">
      <p class="sm:text-sm text-xs text-primary_black text-opacity-60 flex-1">
        檔案名稱
      </p>
      <p class="sm:text-sm text-xs text-primary_black text-opacity-60 w-28">
        上傳日期
      </p>
      <p class="text-sm text-primary_black text-opacity-60 w-28"></p>
    </div>
    <ol>
      <li
        class="w-full flex items-center justify-between p-4"
        v-for="(item, item_index) in history_file_list"
        :key="`file_${item_index}`"
      >
        <p class="font-bold sm:text-base text-sm flex-1">{{ item.title }}</p>
        <p class="sm:text-sm text-xs font-any-body w-28 font-semibold">
          {{ item.created_date }}
        </p>
        <div class="text-sm text-primary_black text-opacity-60 w-28">
          <button
            @click="
              $router.push(`/sign_and_send?type=history&id=${item.file_id}`)
            "
            class="sm:py-2 py-1 sm:px-4 px-3 sm:text-sm text-xs font-semibold text-primary_blue border border-primary_blue sm:rounded-lg rounded-full transition-colors duration-200 hover:bg-primary_blue hover:text-white"
          >
            選擇文件
          </button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'FileList',
  computed: {
    history_file_list() {
      return this.$store.state.history_file_list;
    },
  },
};
</script>
