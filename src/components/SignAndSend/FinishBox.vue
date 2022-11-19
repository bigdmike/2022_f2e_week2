<template>
  <div class="w-full h-full overflow-auto" ref="FinishCanvas">
    <Teleport to="#app">
      <FinishDialog ref="FinishDialog" :image="finish_image" />
    </Teleport>
    <img
      src=""
      class="w-full object-contain h-full"
      v-for="(item, item_index) in page_list"
      v-show="item_index == page"
      :key="`finish_image_${item_index}`"
    />
  </div>
</template>

<script>
import Teleport from 'vue2-teleport';
import FinishDialog from '@/components/SignAndSend/FinishDialog.vue';
import jsPDF from 'jspdf';
export default {
  name: 'FinishBox',
  props: {
    page_list: {
      require: true,
      type: Array,
    },
    canvas_list: {
      require: true,
      type: Array,
    },
    file_type: {
      require: true,
      type: String,
    },
    finish_image: {
      require: true,
      type: String,
    },
    page: {
      require: true,
      type: Number,
    },
    title: {
      require: true,
      type: String,
    },
  },
  components: {
    FinishDialog,
    Teleport,
  },
  methods: {
    DownloadFile() {
      if (this.file_type == 'pdf') {
        this.DownloadPDF();
      } else {
        this.DownloadImage();
      }
    },
    DownloadPDF() {
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
    DownloadImage() {
      const link = document.createElement('a');
      link.href = this.$refs.FinishCanvas.querySelectorAll('img')[0].src;
      link.download = this.title + '.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.$refs.FinishDialog.Open();
    },
    UpdateImagePath(image_list) {
      let image_el = this.$refs.FinishCanvas.querySelectorAll('img');
      image_list.forEach((item, item_index) => {
        image_el[item_index].src = item;
      });
    },
  },
};
</script>
