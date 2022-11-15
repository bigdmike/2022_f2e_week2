<template>
  <div class="block p-5 bg-white rounded-xl relative">
    <RenameDialog ref="RenameDialog" @update-action="RenameTask" />
    <div class="flex items-center absolute top-5 right-5 z-10">
      <button
        @click="TriggerFavorite"
        :class="task_data.favorite ? 'text-yellow-300' : 'text-disable_gray'"
        class="mr-3"
      >
        <IconStar />
      </button>
      <button ref="MoreBtn" class="text-disable_gray relative">
        <IconMore />

        <ol
          ref="Menu"
          :class="menu_open ? 'block' : 'hidden'"
          class="absolute right-0 top-full w-[200px] bg-white text-sm rounded-md drop-shadow-xl"
        >
          <li class="border-b border-zinc-300">
            <button
              @click="OpenRenameDialog"
              class="block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue"
            >
              重新命名
            </button>
          </li>
          <li class="border-b border-zinc-300">
            <button
              @click="DownloadFile"
              class="block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue"
            >
              下載檔案
            </button>
          </li>
          <li class="border-b border-zinc-300">
            <button
              @click="ArchiveData"
              class="block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue"
            >
              封存
            </button>
          </li>
          <li>
            <button
              @click="RemoveData"
              class="block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue"
            >
              移至垃圾桶
            </button>
          </li>
        </ol>
      </button>
    </div>
    <router-link
      to="/"
      class="flex pb-5 border-b border-zinc-300 relative z-0 mb-5"
    >
      <div class="w-14 mr-5">
        <img
          :src="task_data.cover_image"
          class="w-full block border border-zinc-300"
        />
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between mb-2 pr-12">
          <p
            v-if="task_data.status != '已完成'"
            class="text-xs font-medium"
            :class="days_between <= 3 ? 'text-primary_red' : ''"
          >
            到期日
            <span v-if="days_between <= 3">{{
              `${GetDateText(task_data.end_date)}天後`
            }}</span>
            <span v-else>{{ task_data.end_date }}</span>
          </p>
          <p v-else class="text-xs font-medium text-green-500">
            完成日期 {{ task_data.end_date }}
          </p>
        </div>
        <h4 class="truncate text-xl font-bold mb-1">
          {{ task_data.title }}
        </h4>

        <p
          class="text-xs font-medium text-primary_black opacity-40 font-any-body"
        >
          {{ task_data.created_date }}
        </p>
      </div>
    </router-link>

    <div>
      <div class="flex items-center justify-between mb-2">
        <p class="text-xs font-bold text-primary_black opacity-40">已傳送</p>
        <p
          :class="status_colors[GetStatus(task_data.status)]"
          class="text-xs font-bold"
        >
          {{ GetStatus(task_data.status) }}
        </p>
      </div>
      <div class="flex items-center mb-2">
        <span
          class="flex items-center justify-center w-10 h-10 rounded-full text-2xl font-bold text-white bg-primary_blue_light"
        >
          F
        </span>
        <span class="flex-1 h-[1.5px] bg-primary_blue"></span>
        <span
          class="flex items-center justify-center w-10 h-10 rounded-full text-2xl font-bold text-white bg-primary_blue_light"
        >
          F
        </span>
      </div>
      <div class="flex items-center justify-between">
        <p
          class="text-sm w-10 text-center font-bold font-any-body text-primary_black opacity-40 mb-3"
        >
          Me
        </p>
        <p
          class="text-sm w-10 text-center font-bold font-any-body text-primary_black mb-3"
        >
          Me
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconStar from '@/components/svg/icon_star.vue';
import IconMore from '@/components/svg/icon_more.vue';
import RenameDialog from '@/components/Dashboard/RenameDialog.vue';
export default {
  name: 'TaskCard',
  components: {
    IconStar,
    IconMore,
    RenameDialog,
  },
  props: {
    task_data: {
      require: true,
      type: Object,
    },
    task_index: {
      require: true,
      type: Number,
    },
  },
  data() {
    return {
      status_colors: {
        已完成: 'text-green-500',
        已取消: 'text-red-500',
        處理中: 'text-primary_blue',
      },
      menu_open: false,
    };
  },
  methods: {
    OpenRenameDialog() {
      this.$refs.RenameDialog.Open(this.task_data.title);
    },
    RenameTask(val) {
      let tmp_data = JSON.parse(JSON.stringify(this.task_data));
      tmp_data.title = val;
      this.UpdateData(tmp_data);
    },
    GetStatus(val) {
      return val == '已完成' ? '已完成' : val == '已取消' ? '已取消' : '處理中';
    },
    GetDateText(val) {
      let difference = Math.abs(new Date(val) - new Date());
      let days = difference / (1000 * 3600 * 24);
      return Math.ceil(days);
    },
    TriggerFavorite() {
      let tmp_data = JSON.parse(JSON.stringify(this.task_data));
      tmp_data.favorite = !tmp_data.favorite;
      this.UpdateData(tmp_data);
    },
    UpdateData(tmp_data) {
      let tmp_list = JSON.parse(JSON.stringify(this.task_list));
      tmp_list.forEach((item, item_index) => {
        if (item.task_id == tmp_data.task_id) {
          tmp_list[item_index] = tmp_data;
        }
      });
      this.$store.commit('SetTaskData', tmp_list);
    },
    StopBubble(event) {
      if (event && event.stopPropagatioin) {
        event.stopPropagatioin();
      } else {
        window.event.cancelBubble = true;
      }
    },
    DownloadFile() {
      var element = document.createElement('a');
      element.setAttribute(
        'href',
        window.location.origin + this.task_data.file
      );
      element.setAttribute('download', this.task_data.title + '.pdf');
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    ArchiveData() {
      const tmp_data = JSON.parse(JSON.stringify(this.task_data));
      this.$store.commit('SetArchiveTaskData', tmp_data);
      let tmp_list = JSON.parse(JSON.stringify(this.task_list));
      tmp_list.forEach((item, item_index) => {
        if (item.task_id == this.task_data.task_id) {
          tmp_list.splice(item_index, 1);
        }
      });
      this.$store.commit('SetTaskData', tmp_list);
      this.menu_open = false;
    },
    RemoveData() {
      const tmp_data = JSON.parse(JSON.stringify(this.task_data));
      this.$store.commit('SetRemoveTaskData', tmp_data);
      let tmp_list = JSON.parse(JSON.stringify(this.task_list));
      tmp_list.forEach((item, item_index) => {
        if (item.task_id == this.task_data.task_id) {
          tmp_list.splice(item_index, 1);
        }
      });
      this.$store.commit('SetTaskData', tmp_list);
      this.menu_open = false;
    },
  },
  mounted() {
    this.$refs.MoreBtn.onclick = (event) => {
      this.menu_open = true;
      this.StopBubble(event);
      document.onclick = () => {
        this.menu_open = false;
        document.onclick = null;
      };
    };
    this.$refs.Menu.onclick = (event) => {
      this.StopBubble(event);
    };
  },
  computed: {
    task_list() {
      return this.$store.state.task_list;
    },
    days_between() {
      let difference = Math.abs(new Date(this.task_data.end_date) - new Date());
      let days = difference / (1000 * 3600 * 24);
      return Math.ceil(days);
    },
  },
  filters: {
    status(val) {
      return val == '已完成' ? '已完成' : val == '已取消' ? '已取消' : '處理中';
    },
  },
};
</script>
