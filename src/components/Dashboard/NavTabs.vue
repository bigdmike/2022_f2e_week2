<template>
  <div>
    <div
      class="absolute top-0 left-2/3 right-0 bottom-0 z-10 pointer-events-none tab_cover md:hidden block"
    ></div>
    <div class="lg:pr-14 pr-5 mb-10 md:block hidden">
      <div class="relative w-full">
        <span
          class="w-14 h-14 rounded-full md:bg-primary_blue_dark bg-primary_blue_light flex items-center justify-center absolute left-4 top-0 transform -translate-y-1/2"
        >
          <img src="/2022_f2e_week2/img/icon/icon_plus.svg" class="w-6" />
        </span>
        <button
          class="block bg-primary_blue_light rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-white py-4 lg:pl-24 pl-20 text-left w-full"
        >
          新增文件
        </button>
      </div>
    </div>
    <div
      ref="MainTab"
      class="w-full scrollbar-hide relative z-0 md:block flex items-stretch md:whitespace-normal whitespace-nowrap md:overflow-x-hidden overflow-x-auto md:pr-0 pr-20"
    >
      <ol class="md:block flex items-stretch md:mb-10">
        <li class="md:w-full" v-for="item in tab_list" :key="item.title">
          <button
            @click="$emit('update-action', item.title)"
            v-if="item.type == 'free'"
            class="md:p-5 md:h-auto h-full px-5 pt-2 pb-5 md:w-full w-auto flex items-center justify-between text-left md:rounded-l-2xl rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl font-bold md:text-base text-sm transition-colors duration-200 hover:text-primary_blue_light"
            :class="
              active_tab == item.title
                ? 'bg-primary_white text-primary_blue'
                : ' bg-transparent text-white'
            "
          >
            {{ item.title }}
            <span class="font-any-body md:ml-0 ml-3">{{
              GetTabCount(item.title)
            }}</span>
          </button>
          <button
            v-else
            class="md:p-5 px-5 pt-2 pb-5 w-full md:text-base text-sm flex items-center text-left rounded-l-2xl font-bold text-primary_white text-opacity-50"
          >
            {{ item.title }}
            <span
              class="text-xs rounded-full md:ml-4 ml-3 border flex-shrink-0 border-primary_white text-white py-1 font-semibold md:px-2 px-1 flex items-center"
            >
              <img
                src="/2022_f2e_week2/img/icon/icon_pro.svg"
                class="md:w-4 w-3 md:mr-1 block"
              />
              <p class="md:block hidden">立即升級</p>
            </span>
          </button>
        </li>
      </ol>

      <ol class="md:border-t border-primary_blue_light md:block flex pt-5">
        <li class="md:w-full">
          <button
            @click="$emit('update-action', '已封存')"
            class="md:p-5 md:h-auto h-full px-5 pt-2 pb-5 md:w-full w-auto flex items-center justify-between text-left md:rounded-l-2xl rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl font-bold md:text-base text-sm transition-colors duration-200 hover:text-primary_blue_light"
            :class="
              active_tab == '已封存'
                ? 'bg-primary_white text-primary_blue'
                : ' bg-transparent text-white'
            "
          >
            已封存
            <span class="font-any-body md:ml-0 ml-3">{{
              GetTabCount('已封存')
            }}</span>
          </button>
        </li>
        <li class="md:w-full">
          <button
            @click="$emit('update-action', '垃圾桶')"
            class="md:p-5 md:h-auto h-full px-5 pt-2 pb-5 md:w-full w-auto flex items-center justify-between text-left md:rounded-l-2xl rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl font-bold md:text-base text-sm transition-colors duration-200 hover:text-primary_blue_light"
            :class="
              active_tab == '垃圾桶'
                ? 'bg-primary_white text-primary_blue'
                : ' bg-transparent text-white'
            "
          >
            垃圾桶
            <span class="font-any-body md:ml-0 ml-3">{{
              GetTabCount('垃圾桶')
            }}</span>
          </button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavTabs',
  props: {
    tab_list: {
      require: true,
      type: Array,
    },
    active_tab: {
      require: true,
      type: String,
    },
    task_list: {
      require: true,
      type: Array,
    },
  },
  data() {
    return {
      tab_pos: { top: 0, left: 0, x: 0, y: 0 },
    };
  },
  methods: {
    GetTabCount(key) {
      if (key == '已加星號') {
        return this.task_list.filter((item) => item.favorite == true).length;
      } else if (key == '已封存') {
        return this.$store.state.archive_task_list.length;
      } else if (key == '垃圾桶') {
        return this.$store.state.removed_task_list.length;
      } else {
        return this.task_list.filter((item) => item.status == key).length;
      }
    },
    mouseDownHandler(e) {
      this.tab_pos = {
        // The current scroll
        left: this.$refs.MainTab.scrollLeft,
        top: this.$refs.MainTab.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };
      this.$refs.MainTab.addEventListener('mousemove', this.mouseMoveHandler);
      this.$refs.MainTab.addEventListener('mouseup', this.mouseUpHandler);
    },
    mouseMoveHandler(e) {
      // How far the mouse has been moved
      const dx = e.clientX - this.tab_pos.x;
      const dy = e.clientY - this.tab_pos.y;

      // Scroll the element
      this.$refs.MainTab.scrollTop = this.tab_pos.top - dy;
      this.$refs.MainTab.scrollLeft = this.tab_pos.left - dx;
    },
    mouseUpHandler() {
      this.$refs.MainTab.removeEventListener(
        'mousemove',
        this.mouseMoveHandler
      );
      this.$refs.MainTab.removeEventListener('mouseup', this.mouseUpHandler);

      this.$refs.MainTab.style.cursor = 'grab';
      this.$refs.MainTab.style.removeProperty('user-select');
    },
  },
  mounted() {
    this.$refs.MainTab.addEventListener('mousedown', this.mouseDownHandler);
  },
};
</script>

<style scoped>
.tab_cover {
  background-image: linear-gradient(
    270deg,
    #16219c 0%,
    rgba(22, 33, 156, 0) 102.33%
  );
}
</style>
