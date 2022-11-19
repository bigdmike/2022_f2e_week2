<template>
  <div
    class="md:w-3/4 w-full flex flex-col relative z-10 lg:p-14 p-7 md:rounded-tl-3xl rounded-tr-3xl bg-primary_white md:flex-auto flex-1"
  >
    <button
      @click="$router.push('/prepare_doc')"
      class="w-14 h-14 rounded-full transition-colors duration-200 hover:bg-primary_blue bg-primary_blue_light flex items-center justify-center sm:absolute fixed right-10 sm:top-0 sm:bottom-auto bottom-0 z-10 transform -translate-y-1/2 md:hidden"
    >
      <img src="/2022_f2e_week2/img/icon/icon_plus.svg" class="w-6" />
    </button>

    <div
      class="pb-4 border-b border-zinc-300 w-full flex items-center justify-between md:mb-0 mb-5"
    >
      <div class="relative w-44">
        <img
          src="/2022_f2e_week2/img/icon/icon_arrow_down.svg"
          class="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 pointer-events-none"
        />
        <select
          class="relative z-0 appearance-none px-5 py-2 bg-white rounded-lg w-full font-bold"
        >
          <option>全部類別</option>
        </select>
      </div>

      <div class="flex items-center">
        <div class="flex items-stretch sm:mr-5 mr-2">
          <button
            @click="$emit('update-type', 'grid')"
            :class="
              show_type == 'grid'
                ? 'text-white bg-primary_blue_dark'
                : 'text-black bg-white'
            "
            class="p-2 rounded-l-md"
          >
            <IconGridShow class="w-4 h-4" />
          </button>
          <button
            @click="$emit('update-type', 'list')"
            :class="
              show_type == 'list'
                ? 'text-white bg-primary_blue_dark'
                : 'text-black bg-white'
            "
            class="p-2 rounded-r-md"
          >
            <IconListShow class="w-4 h-4" />
          </button>
        </div>
        <button
          class="p-2 sm:mr-5 mr-0 rounded-md bg-white text-black transition-colors duration-200 hover:bg-primary_blue_dark hover:text-white"
        >
          <IconRefresh class="w-4 h-4" />
        </button>
        <div class="md:flex hidden items-stretch bg-white py-1 px-1">
          <button class="text-black text-opacity-20">
            <IconArrowLeft class="w-6" />
          </button>
          <p class="mx-5 font-any-body font-semibold">01/01</p>
          <button class="text-black text-opacity-20">
            <IconArrowRight class="w-6" />
          </button>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end md:hidden">
      <div class="flex items-stretch py-1 px-1">
        <button class="text-black text-opacity-20">
          <IconArrowLeft class="w-6" />
        </button>
        <p class="mx-5 font-any-body font-semibold">01/01</p>
        <button class="text-black text-opacity-20">
          <IconArrowRight class="w-6" />
        </button>
      </div>
    </div>
    <div class="w-full flex-1 relative pt-10">
      <div
        v-if="task_data.length <= 0"
        class="absolute top-1/2 left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <img
          src="/2022_f2e_week2/img/icon/icon_empty_file.svg"
          class="w-28 mx-auto block mb-5"
        />
        <p class="font-bold text-primary_black opacity-40">
          目前尚無待簽署的文件
        </p>
      </div>
      <div v-else>
        <ol
          v-if="show_type == 'grid'"
          class="-mx-3 flex items-stretch flex-wrap"
        >
          <li
            class="px-3 xl:w-1/3 sm:w-1/2 w-full mb-6"
            v-for="(item, item_index) in task_data"
            :key="`task_${item_index}`"
          >
            <TaskCard :task_data="item" :task_index="item_index" />
          </li>
        </ol>
        <ol v-if="show_type == 'list'">
          <li
            class="px-3 w-full mb-6"
            v-for="(item, item_index) in task_data"
            :key="`task_${item_index}`"
          >
            <TaskListCard :task_data="item" :task_index="item_index" />
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import IconGridShow from '@/components/svg/icon_grid_show.vue';
import IconListShow from '@/components/svg/icon_list_show.vue';
import IconRefresh from '@/components/svg/icon_refresh.vue';
import IconArrowLeft from '@/components/svg/icon_arrow_left.vue';
import IconArrowRight from '@/components/svg/icon_arrow_right.vue';
import TaskCard from '@/components/Dashboard/TaskCard.vue';
import TaskListCard from '@/components/Dashboard/TaskListCard.vue';
export default {
  name: 'TaskList',
  props: {
    task_data: {
      require: true,
      type: Array,
    },
    show_type: {
      require: true,
      type: String,
    },
  },
  components: {
    IconGridShow,
    IconListShow,
    IconRefresh,
    IconArrowLeft,
    IconArrowRight,
    TaskCard,
    TaskListCard,
  },
  methods: {},
};
</script>
