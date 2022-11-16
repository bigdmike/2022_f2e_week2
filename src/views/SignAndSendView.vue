<template>
  <main
    class="w-full relative z-10 bg-primary_blue_dark pt-24 min-h-screen flex md:flex-col"
  >
    <p>選擇簽名</p>
    <button class="download">download PDF</button>
    <img
      ref="SignImg"
      class="sign"
      src="/2022_f2e_week2/img/logo.png"
      style="border: 1px solid #000"
      width="250"
      height="150"
    />
    <div>
      <input
        ref="FileInput"
        type="file"
        accept="application/pdf"
        placeholder="選擇PDF檔案"
      />
    </div>
    <canvas ref="MainCanvas" id="canvas" style="border: 1px solid #000">
    </canvas>
  </main>
</template>

<script>
import jsPDF from 'jspdf';
export default {
  name: 'PreviewPdf',
  components: {},
  data() {
    return {
      pdfList: [],
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
    async printPDF(pdfData) {
      const Base64Prefix = 'data:application/pdf;base64,';

      // 將檔案處理成 base64
      pdfData = await this.readBlob(pdfData);

      // 將 base64 中的前綴刪去，並進行解碼
      const data = atob(pdfData.substring(Base64Prefix.length));

      // 利用解碼的檔案，載入 PDF 檔及第一頁
      const pdfDoc = await window.pdfjsLib.getDocument({ data }).promise;
      const pdfPage = await pdfDoc.getPage(1);

      // 設定尺寸及產生 canvas
      const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

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
  mounted() {
    // const add = document.querySelector(".add");
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

    // 此處 canvas 套用 fabric.js
    const canvas = new window.fabric.Canvas('canvas');

    this.$refs.FileInput.addEventListener('change', async (e) => {
      canvas.requestRenderAll();
      const pdfData = await this.printPDF(e.target.files[0]);
      const pdfImage = await this.pdfToImage(pdfData);

      // 透過比例設定 canvas 尺寸
      canvas.setWidth(pdfImage.width / window.devicePixelRatio);
      canvas.setHeight(pdfImage.height / window.devicePixelRatio);

      // 將 PDF 畫面設定為背景
      canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
    });

    this.$refs.SignImg.addEventListener('click', () => {
      if (!this.$refs.SignImg.src) return;

      window.fabric.Image.fromURL(this.$refs.SignImg.src, function (image) {
        image.top = 400;
        image.scaleX = 0.5;
        image.scaleY = 0.5;
        canvas.add(image);
      });
    });

    // 引入套件所提供的物件
    const pdf = new jsPDF();

    const download = document.querySelector('.download');

    download.addEventListener('click', () => {
      // 將 canvas 存為圖片
      const image = canvas.toDataURL('image/png');

      // 設定背景在 PDF 中的位置及大小
      const width = pdf.internal.pageSize.width;
      const height = pdf.internal.pageSize.height;
      pdf.addImage(image, 'png', 0, 0, width, height);

      // 將檔案取名並下載
      pdf.save('download.pdf');
    });
  },
};
</script>
