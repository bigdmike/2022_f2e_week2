<template>
  <main
    class="w-full relative z-10 bg-primary_blue_dark md:pt-[80px] pt-24 min-h-screen md:flex-col"
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
    <Teleport to="#app">
      <FinishDialog ref="FinishDialog" :image="finish_image" />
    </Teleport>
    <div
      style="height: calc(100vh - 80px)"
      class="w-full max-w-screen-xl md:flex-row flex-col mx-auto flex"
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
        class="md:w-3/4 w-full h-full max-h-full flex flex-col relative z-10 lg:p-14 p-7 md:rounded-tl-3xl rounded-tr-3xl bg-primary_white md:flex-auto flex-1"
      >
        <div
          class="flex items-center justify-between pb-5 border-b border-zinc-300"
        >
          <button
            v-if="view_mode == 'edit'"
            @click="$router.push('/tasks')"
            class="flex flex-shrink-0 md:text-base text-sm items-centertransition-colors duration-200 hover:text-primary_blue_dark"
          >
            <IconArrowLeft class="w-6 h-6 sm:mr-2" />
            <span class="font-bold sm:block hidden">回主畫面</span>
          </button>

          <button
            v-if="view_mode == 'finish'"
            @click="view_mode = 'edit'"
            class="flex flex-shrink-0 md:text-base text-sm items-centertransition-colors duration-200 hover:text-primary_blue_dark"
          >
            <IconArrowLeft class="w-6 h-6 sm:mr-2" />
            <span class="font-bold sm:block hidden">上一步</span>
          </button>
          <div class="flex items-center sm:mx-5 mx-3 md:flex-shrink w-auto">
            <span
              class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full bg-primary_blue_light text-white"
            >
              <b class="font-bold sm:block hidden">上傳文件</b>
              <b class="font-bold sm:hidden block font-any-body">1</b>
            </span>
            <i
              class="block h-[2px] sm:w-28 w-16 flex-shrink bg-primary_blue opacity-40"
            ></i>
            <span
              :class="
                view_mode == 'edit'
                  ? 'bg-primary_blue'
                  : 'bg-primary_blue_light'
              "
              class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full text-white"
            >
              <b class="font-bold sm:block hidden">進行簽署</b>
              <b class="font-bold sm:hidden block font-any-body">2</b>
            </span>
            <i
              class="block h-[2px] sm:w-28 w-16 flex-shrink bg-primary_blue opacity-40"
            ></i>
            <span
              :class="
                view_mode == 'finish'
                  ? 'bg-primary_blue text-white'
                  : 'bg-transparent text-primary_blue_light'
              "
              class="sm:px-4 sm:py-2 sm:w-auto sm:h-auto w-8 h-8 flex items-center justify-center md:text-base text-sm flex-shrink-0 rounded-full"
            >
              <b class="font-bold sm:block hidden">下載檔案</b>
              <b class="font-bold sm:hidden block font-any-body">3</b>
            </span>
          </div>

          <div class="flex items-center">
            <button
              class="px-4 mr-2 md:text-base sm:text-sm text-xs flex-shrink-0 py-2 rounded-full border border-black font-bold"
            >
              取消
            </button>
            <button
              v-if="view_mode == 'edit'"
              @click="SetFinish"
              class="px-4 md:text-base sm:text-sm text-xs flex-shrink-0 py-2 rounded-full bg-primary_blue text-white font-bold"
            >
              完成
            </button>
            <button
              v-if="view_mode == 'finish'"
              @click="DownloadPDF"
              class="px-4 md:text-base sm:text-sm text-xs flex-shrink-0 py-2 rounded-full bg-primary_blue text-white font-bold"
            >
              下載文件
            </button>
          </div>
        </div>
        <div
          ref="PageCanvas"
          class="w-full h-full overflow-auto"
          :class="view_mode == 'edit' ? 'block' : 'hidden'"
        >
          <div
            v-for="(item, item_index) in page_list"
            :key="`page_${item_index}`"
            v-show="item_index == page"
            class="canvas_page w-full h-full"
          >
            <canvas></canvas>
          </div>
        </div>
        <div
          class="w-full h-full overflow-auto"
          :class="view_mode == 'finish' ? 'block' : 'hidden'"
          ref="FinishCanvas"
        >
          <img
            src=""
            class="w-full object-contain h-full"
            v-for="(item, item_index) in page_list"
            v-show="item_index == page"
            :key="`finish_image_${item_index}`"
          />
        </div>

        <div
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
import jsPDF from 'jspdf';
import Teleport from 'vue2-teleport';
import { getLocalStorage } from '@/common/localstorage';
import IconArrowLeft from '@/components/svg/icon_arrow_left.vue';
import IconArrowRight from '@/components/svg/icon_arrow_right.vue';
import LeftMenu from '@/components/SignAndSend/LeftMenu.vue';
import CreateSignDialog from '@/components/SignAndSend/CreateSignDialog.vue';
import CreateImageDilaog from '@/components/SignAndSend/CreateImageDialog.vue';
import FinishDialog from '@/components/SignAndSend/FinishDialog.vue';
export default {
  name: 'PreviewPdf',
  components: {
    IconArrowLeft,
    IconArrowRight,
    LeftMenu,
    CreateSignDialog,
    CreateImageDilaog,
    Teleport,
    FinishDialog,
  },
  data() {
    return {
      page_list: [],
      canvas_list: [],
      finish_image: '',
      page: 0,
      sign_list: [],
      file_type: 'pdf',
      view_mode: 'edit',
      title: '',
    };
  },
  props: {
    pdfData: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    readBlob(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.addEventListener('error', reject);
        reader.readAsDataURL(blob);
      });
    },
    async CreateAllPage(pdfData) {
      const Base64Prefix = 'data:application/pdf;base64,';
      let page_list = [];

      // 將 base64 中的前綴刪去，並進行解碼
      const data = atob(pdfData.substring(Base64Prefix.length));

      // 利用解碼的檔案，載入 PDF
      const pdfDoc = await window.pdfjsLib.getDocument({ data }).promise;

      // 讀取 PDF 頁數並依序將頁面讀取後存入清單
      const pdfPageCount = await pdfDoc.numPages;
      for (let i = 1; i <= pdfPageCount; i++) {
        const page_data = await this.CreatePDFCanvas(pdfDoc, i);
        page_list.push(page_data);
      }
      this.page_list = page_list;
      this.$nextTick(async () => {
        for (let i in this.page_list) {
          await this.CreateCanvasView(i);
        }
      });
    },
    async CreatePDFCanvas(pdfDoc, page) {
      const pdfPage = await pdfDoc.getPage(page);

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      var viewport = pdfPage.getViewport({
        scale: window.devicePixelRatio,
      });
      const scale = 848 / viewport.viewBox[2];
      viewport = pdfPage.getViewport({
        scale: window.devicePixelRatio * scale,
      });

      // 設定 PDF 所要顯示的寬高及渲染
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport,
      };
      const renderTask = pdfPage.render(renderContext);

      // 回傳做好的 PDF canvas
      return renderTask.promise.then(() => canvas);
    },
    async CreateCanvasView(page) {
      this.canvas_list.push(null);
      const page_canvas =
        this.$refs.PageCanvas.querySelectorAll('.canvas_page');
      this.canvas_list[page] = new window.fabric.Canvas(
        page_canvas[page].querySelector('canvas')
      );
      const pdfImage = await this.pdfToImage(this.page_list[page]);
      this.canvas_list[page].setWidth(pdfImage.width * pdfImage.scaleX);
      this.canvas_list[page].setHeight(pdfImage.height * pdfImage.scaleY);

      // 將 PDF 畫面設定為背景
      this.canvas_list[page].setBackgroundImage(
        pdfImage,
        this.canvas_list[page].renderAll.bind(this.canvas_list[page])
      );
    },
    async pdfToImage(pdfData) {
      // 設定 PDF 轉為圖片時的比例
      const scale = 1 / window.devicePixelRatio;

      // 回傳圖片
      return new window.fabric.Image(pdfData, {
        id: 'renderPDF',
        scaleX: scale,
        scaleY: scale,
      });
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
            const base64_file = await this.readBlob(blob);
            this.CreateAllPage(base64_file);
          });
      } else if (this.$route.query.type == 'task') {
        const file_data = this.task_list.filter(
          (item) => item.task_id == this.$route.query.id
        )[0];
        this.title = file_data.title;
        fetch(file_data.file)
          .then((response) => response.blob())
          .then(async (blob) => {
            const base64_file = await this.readBlob(blob);
            this.CreateAllPage(base64_file);
          });
      } else {
        this.title = '未命名文件';
        const base64_file = getLocalStorage('upload_file');
        this.CreateAllPage(base64_file);
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
      this.CreateImageDilaog();
    },
    ReadSignList() {
      let list = getLocalStorage('sign_list');
      if (list) {
        this.sign_list = JSON.parse(list);
      }
    },
    DownloadPDF() {
      // 引入套件所提供的物件
      const pdf = new jsPDF();
      this.canvas_list.forEach((item, item_index) => {
        // 將 canvas 存為圖片
        const image = item.toDataURL('image/png');
        // 設定背景在 PDF 中的位置及大小
        const width = pdf.internal.pageSize.width;
        const height = pdf.internal.pageSize.height;
        pdf.addImage(image, 'png', 0, 0, width, height);
        item_index == this.canvas_list.length - 1 ? '' : pdf.addPage();
      });

      // 將檔案取名並下載
      pdf.save(this.title + '.pdf');
      this.$refs.FinishDialog.Open();
    },
    SetFinish() {
      const canvas_page =
        this.$refs.PageCanvas.querySelectorAll('.canvas_page');
      const image_el = this.$refs.FinishCanvas.querySelectorAll('img');
      this.page_list.forEach((item, item_index) => {
        const image = canvas_page[item_index]
          .querySelectorAll('canvas')[0]
          .toDataURL('image/png');
        image_el[item_index].src = image;
        item_index == 0 ? (this.finish_image = image) : '';
      });
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
    this.ReadSignList();
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
    this.PrepareFile();
  },
  filters: {
    number_format(val) {
      return val >= 10 ? val : '0' + val;
    },
  },
};
</script>
