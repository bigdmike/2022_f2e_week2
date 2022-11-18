import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_dialog: false,
    signup_dialog: false,
    main_dialog: {
      status: false,
      content: '',
    },
    task_list: [
      {
        task_id: 1,
        title: '會議通知單',
        created_date: '2022/11/11',
        end_date: '2022/11/20',
        cover_image: '/2022_f2e_week2/img/泥作報價單_工作區域 1 1.jpg',
        file: '/2022_f2e_week2/files/sample.pdf',
        favorite: true,
        status: '待自己簽署',
      },
      {
        task_id: 2,
        title: '泥作估價單',
        created_date: '2022/11/02',
        end_date: '2022/11/17',
        cover_image: '/2022_f2e_week2/img/泥作報價單_工作區域 1 1.jpg',
        file: '/2022_f2e_week2/files/sample.pdf',
        favorite: false,
        status: '待自己簽署',
      },
      {
        task_id: 3,
        title: '專案驗收單',
        created_date: '2022/11/02',
        end_date: '2022/11/22',
        cover_image: '/2022_f2e_week2/img/泥作報價單_工作區域 1 1.jpg',
        file: '/2022_f2e_week2/files/sample.pdf',
        favorite: false,
        status: '已完成',
      },
    ],
    archive_task_list: [],
    removed_task_list: [],
    history_file_list: [
      {
        file_id: 1,
        title: '會議通知單',
        created_date: '2022/11/11',
        file: '/2022_f2e_week2/files/dummy.pdf',
      },
      {
        file_id: 2,
        title: '油漆估價單',
        created_date: '2022/11/11',
        file: '/2022_f2e_week2/files/Get_Started_With_Smallpdf.pdf',
      },
    ],
  },
  getters: {},
  mutations: {
    SetLoginDialog(state, action) {
      state.login_dialog = action;
    },
    SetSignupDialog(state, action) {
      state.signup_dialog = action;
    },
    SetMainDialog(state, { action, content }) {
      state.main_dialog.status = action;
      state.main_dialog.content = content;
    },
    SetTaskData(state, task_data) {
      state.task_list = task_data;
    },
    SetArchiveTaskData(state, task_data) {
      state.archive_task_list.push(task_data);
    },
    SetRemoveTaskData(state, task_data) {
      state.removed_task_list.push(task_data);
    },
  },
  actions: {},
  modules: {},
});
