<template>
  <main
    class="w-full relative z-10 bg-primary_blue_dark md:pt-[80px] pt-24 h-screen md:flex-col"
  >
    <Teleport to="#app">
      <CreateImageDilaog
        ref="CreateImageDilaog"
        @create-action="CreateSign"
        @read-sign="ReadSignList"
    /></Teleport>
    <Teleport to="#app">
      <CreateSignDialog
        ref="CreateSignDialog"
        @create-action="CreateSign"
        @read-sign="ReadSignList"
    /></Teleport>
    <div
      class="w-full max-w-screen-xl h-full md:flex-row flex-col mx-auto flex"
    >
      <div class="md:w-1/4 w-full relative z-0">
        <LeftMenu
          :title="title"
          @update-title="title = $event"
          @open-create-dialog="OpenSignDialog"
          @open-create-image="OpenCreateImageDialog"
          :sign_list="sign_list"
          @create-action="CreateSign"
          @read-sign="ReadSignList"
        />
      </div>
      <div
        id="SignArea"
        class="md:w-3/4 w-full h-full flex flex-col relative z-10 lg:p-14 p-7 md:rounded-tl-3xl rounded-tr-3xl bg-primary_white md:flex-auto flex-1"
      >
        <ProgressNav
          :view_mode="view_mode"
          @change-mode="view_mode = $event"
          @download="DownloadFile"
        />
        <PDFCanvas
          v-show="file_type == 'pdf'"
          ref="PDFCanvas"
          :class="view_mode == 'edit' ? 'block' : 'hidden'"
          :canvas_list="canvas_list"
          :page_list="page_list"
          :page="page"
          @update-page-list="UpdatePageList"
          @create-canvas-list="CreateCanvasList"
          @create-finish-image="CreateFinishImage"
        />
        <ImageCanvas
          ref="ImageCanvas"
          v-show="file_type == 'image'"
          :class="view_mode == 'edit' ? 'block' : 'hidden'"
          :canvas_list="canvas_list"
          @create-canvas-list="CreateCanvasList"
          @create-finish-image="CreateFinishImage"
        />
        <FinishBox
          ref="FinishBox"
          :page_list="page_list"
          :canvas_list="canvas_list"
          :file_type="file_type"
          :finish_image="finish_image"
          :page="page"
          :title="title"
          :class="view_mode == 'finish' ? 'block' : 'hidden'"
        />

        <div
          v-if="file_type == 'pdf'"
          class="md:flex hidden items-stretch absolute bottom-20 right-20 z-20 border border-zinc-300 bg-white py-1 px-1"
        >
          <button @click="ChangePage(-1)" class="text-black text-opacity-20">
            <IconArrowLeft class="w-6" />
          </button>
          <p class="mx-5 font-any-body font-semibold">
            {{ (this.page + 1) | number_format }}/{{
              page_list.length | number_format
            }}
          </p>
          <button @click="ChangePage(1)" class="text-black text-opacity-20">
            <IconArrowRight class="w-6" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Teleport from 'vue2-teleport';
import { getLocalStorage } from '@/common/localstorage';
import { readBlob } from '@/common/common.js';
import IconArrowLeft from '@/components/svg/icon_arrow_left.vue';
import IconArrowRight from '@/components/svg/icon_arrow_right.vue';
import LeftMenu from '@/components/SignAndSend/LeftMenu.vue';
import CreateSignDialog from '@/components/SignAndSend/CreateSignDialog.vue';
import CreateImageDilaog from '@/components/SignAndSend/CreateImageDialog.vue';
import ProgressNav from '@/components/SignAndSend/ProgressNav.vue';
import PDFCanvas from '@/components/SignAndSend/PDFCanvas.vue';
import ImageCanvas from '@/components/SignAndSend/ImageCanvas.vue';
import FinishBox from '@/components/SignAndSend/FinishBox.vue';
export default {
  name: 'PreviewPdf',
  components: {
    IconArrowLeft,
    IconArrowRight,
    LeftMenu,
    CreateSignDialog,
    CreateImageDilaog,
    Teleport,
    ProgressNav,
    PDFCanvas,
    ImageCanvas,
    FinishBox,
  },
  data() {
    return {
      page_list: [],
      canvas_list: [],
      sign_list: [],
      title: '',
      finish_image: '',
      page: 0,
      file_type: 'pdf',
      view_mode: 'edit',
    };
  },
  methods: {
    UpdatePageList(val) {
      this.page_list = val;
    },
    CreateCanvasList(val) {
      this.canvas_list.push(val);
    },
    async PrepareFile() {
      if (this.$route.query.type == 'history') {
        const file_data = this.history_file_list.filter(
          (item) => item.file_id == this.$route.query.id
        )[0];
        this.title = file_data.title;
        fetch(file_data.file)
          .then((response) => response.blob())
          .then(async (blob) => {
            const base64_file = await readBlob(blob);
            this.$refs.PDFCanvas.CreateAllPage(base64_file);
          });
      } else if (this.$route.query.type == 'task') {
        const file_data = this.task_list.filter(
          (item) => item.task_id == this.$route.query.id
        )[0];
        this.title = file_data.title;
        fetch(file_data.file)
          .then((response) => response.blob())
          .then(async (blob) => {
            const base64_file = await readBlob(blob);
            this.$refs.PDFCanvas.CreateAllPage(base64_file);
          });
      } else {
        this.title = '???????????????';
        const base64_file = getLocalStorage('upload_file');
        if (this.$route.query.file_type == 'pdf') {
          this.file_type = 'pdf';
          this.$nextTick(() => {
            this.$refs.PDFCanvas.CreateAllPage(base64_file);
          });
        } else {
          this.file_type = 'image';
          this.page_list = [];
          this.page_list.push(null);
          this.$nextTick(() => {
            this.$refs.ImageCanvas.CreateCanvasView(base64_file);
          });
        }
      }
    },
    CreateSign(img_data) {
      window.fabric.Image.fromURL(img_data, (image) => {
        image.top = 400;
        image.scaleX = 0.5;
        image.scaleY = 0.5;
        this.canvas_list[this.page].add(image);
      });
    },
    OpenSignDialog() {
      this.$refs.CreateSignDialog.Open();
    },
    OpenCreateImageDialog() {
      this.$refs.CreateImageDilaog.Open();
    },
    ReadSignList() {
      let list = getLocalStorage('sign_list');
      if (list) {
        this.sign_list = JSON.parse(list);
      }
    },
    DownloadFile() {
      this.$refs.FinishBox.DownloadFile();
    },
    SetFinish() {
      if (this.file_type == 'pdf') {
        this.$refs.PDFCanvas.CreateImage();
      } else {
        this.$refs.ImageCanvas.CreateImage();
      }

      this.view_mode = 'finish';
    },
    ChangePage(val) {
      if (this.page + val <= 0) {
        this.page = 0;
      } else if (this.page + val > this.page_list.length - 1) {
        this.page = this.page_list.length - 1;
      } else {
        this.page += val;
      }
    },
    CreateFinishImage(image_list) {
      this.finish_image = image_list[0];
      this.$refs.FinishBox.UpdateImagePath(image_list);
    },
  },
  watch: {
    view_mode() {
      if (this.view_mode == 'finish') {
        this.SetFinish();
      }
    },
  },
  computed: {
    history_file_list() {
      return this.$store.state.history_file_list;
    },
    task_list() {
      return this.$store.state.task_list;
    },
  },
  created() {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
    this.ReadSignList();
    this.PrepareFile();
  },
  filters: {
    number_format(val) {
      return val >= 10 ? val : '0' + val;
    },
  },
};
</script>

<style scoped>
#SignContainer {
  height: calc(100vh - 80px);
}
#SignArea {
  max-height: 100%;
}
@media (max-width: 768px) {
  #SignArea {
    max-height: calc(100% - 69px);
  }
}
@media (max-width: 640px) {
  #SignArea {
    max-height: calc(100% - 153px);
  }
}
</style>
