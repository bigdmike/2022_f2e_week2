<template>
  <div ref="PageCanvas" class="w-full h-full overflow-auto">
    <div
      v-for="(item, item_index) in page_list"
      :key="`page_${item_index}`"
      v-show="item_index == page"
      class="canvas_page w-full h-full"
    >
      <canvas></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PDFCanvas',
  props: {
    page_list: {
      require: true,
      type: Array,
    },
    canvas_list: {
      require: true,
      type: Array,
    },
    page: {
      require: true,
      type: Number,
    },
  },
  methods: {
    async CreateAllPage(pdfData) {
      let page_list = [];

      // 將 base64 中的前綴刪去，並進行解碼
      const Base64Prefix = 'data:application/pdf;base64,';
      const data = atob(pdfData.substring(Base64Prefix.length));

      // 利用解碼的檔案，載入 PDF
      const pdfDoc = await window.pdfjsLib.getDocument({ data }).promise;

      // 讀取 PDF 頁數並依序將頁面讀取後存入清單
      const pdfPageCount = await pdfDoc.numPages;
      for (let i = 1; i <= pdfPageCount; i++) {
        const page_data = await this.CreatePDFCanvas(pdfDoc, i);
        page_list.push(page_data);
      }
      // 更新畫面清單
      this.$emit('update-page-list', page_list);
      // 製作畫面
      this.$nextTick(async () => {
        for (let i in this.page_list) {
          await this.CreateCanvasView(i);
        }
      });
    },
    async CreatePDFCanvas(pdfDoc, page) {
      // 取得指定的頁面
      const pdfPage = await pdfDoc.getPage(page);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // 設定解析度
      var viewport = pdfPage.getViewport({
        scale: window.devicePixelRatio,
      });
      // 設定放大比例
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
      // 抓出全部的canvas element
      const page_canvas =
        this.$refs.PageCanvas.querySelectorAll('.canvas_page');

      // 建立 fabric canvas
      let new_canvas = new window.fabric.Canvas(
        page_canvas[page].querySelector('canvas')
      );
      // 製作圖片
      const pdfImage = await this.pdfToImage(this.page_list[page]);
      // 設定尺寸
      new_canvas.setWidth(pdfImage.width * pdfImage.scaleX);
      new_canvas.setHeight(pdfImage.height * pdfImage.scaleY);

      // 將 PDF 畫面設定為背景
      new_canvas.setBackgroundImage(
        pdfImage,
        new_canvas.renderAll.bind(new_canvas)
      );
      //   更新canvas清單
      this.$emit('create-canvas-list', new_canvas);
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
  },
};
</script>
