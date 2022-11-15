<template>
  <main
    class="w-full relative z-10 bg-primary_blue_dark pt-24 min-h-screen flex md:flex-col"
  >
    <div
      class="w-full max-w-screen-xl md:flex-row flex-col mx-auto xl:px-0 md:px-5 flex md:items-stretch md:flex-1"
    >
      <NavTabs
        :tab_list="tab_list"
        :active_tab="active_tab"
        :task_list="task_list"
        @update-action="active_tab = $event"
        class="md:w-1/4 w-full relative z-0"
      />
      <TaskList
        :task_data="task_data"
        :show_type="show_type"
        @update-type="show_type = $event"
      />
    </div>
  </main>
</template>

<script>
import NavTabs from '@/components/Dashboard/NavTabs.vue';
import TaskList from '@/components/Dashboard/TaskList.vue';
export default {
  name: 'DashboardView',
  components: {
    NavTabs,
    TaskList,
  },
  data() {
    return {
      active_tab: '待自己簽署',
      tab_list: [
        {
          title: '待自己簽署',
          type: 'free',
        },
        {
          title: '待他人簽署',
          type: 'pro',
        },
        {
          title: '已加星號',
          type: 'free',
        },
        {
          title: '已完成',
          type: 'free',
        },
        {
          title: '已取消',
          type: 'free',
        },
      ],
      show_type: 'grid',
    };
  },
  methods: {
    InitTaskList() {
      let tmp_list = JSON.parse(JSON.stringify(this.task_list));
      tmp_list[0].end_date = this.getLaterDate(7);
      tmp_list[1].end_date = this.getLaterDate(2);
      tmp_list[2].end_date = this.getLaterDate(1);
      this.$store.commit('SetTaskData', tmp_list);
    },
    getLaterDate(dayNum) {
      let dateTime = +new Date();
      if (dateTime.toString().length == 10) dateTime *= 1000;
      const timestamp = +new Date(Number(dateTime));

      const one_day = 86400000; // 24 * 60 * 60 * 1000;
      const addVal = dayNum * one_day + timestamp;
      const date = new Date(addVal);

      const filters = (n) => {
        return n < 10 ? (n = '0' + n) : n;
      };
      const month = filters(date.getMonth() + 1);
      const day = filters(date.getDate());

      const lastTime = `${date.getFullYear()}/${month}/${day}`;

      return lastTime;
    },
  },
  computed: {
    task_list() {
      return this.$store.state.task_list;
    },
    task_data() {
      if (this.active_tab == '已加星號') {
        return this.task_list.filter((item) => item.favorite == true);
      } else if (this.active_tab == '已封存') {
        return this.$store.state.archive_task_list;
      } else if (this.active_tab == '垃圾桶') {
        return this.$store.state.removed_task_list;
      } else {
        return this.task_list.filter((item) => item.status == this.active_tab);
      }
    },
  },
  created() {
    this.InitTaskList();
  },
};
</script>
