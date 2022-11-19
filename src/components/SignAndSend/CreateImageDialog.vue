<template>
  <div
    ref="MainContent"
    class="fixed top-0 left-full w-full bottom-0 z-30 flex items-center justify-center"
  >
    <div
      data-dialog-box
      class="w-full md:max-w-screen-md max-w-[90%] p-10 rounded-3xl bg-white relative z-10 text-center"
    >
      <button @click="Close" class="absolute top-5 left-5 z-10 p-2">
        <img src="/2022_f2e_week2/img/icon/icon_close.svg" class="w-3 h-3" />
      </button>
      <h2 class="text-2xl font-bold mb-5">創建簽名</h2>

      <div
        v-show="view_mode == 'upload'"
        class="w-full rounded-3xl border border-dashed border-primary_blue aspect-[5/2] mb-5 flex items-center justify-center"
      >
        <input
          hidden
          type="file"
          ref="FileUploader"
          accept=".jpg,.jpeg, .pdf, .png"
          @change="UploadFile($event.target.files)"
        />
        <div class="text-center">
          <button
            @click="OpenUpload"
            class="flex mb-3 mx-auto sm:text-base text-sm items-center font-bold text-white px-8 py-3 rounded-full bg-primary_blue transition-colors duration-200 hover:bg-opacity-70"
          >
            <img
              src="/2022_f2e_week2/img/icon/icon_file_upload.svg"
              class="sm:w-6 w-5 mr-3"
            />
            選擇檔案
          </button>
          <p class="text-sm font-bold text-primary_blue mb-3">或</p>
          <p class="text-sm font-bold text-primary_blue mb-5">
            直接拖曳檔案至此區塊
          </p>
          <p
            class="text-primary_black text-opacity-60 md:text-base text-sm font-bold"
          >
            檔案大小不得超過10MB且檔案類型需為PDF/JPG/PNG
          </p>
        </div>
      </div>
      <div
        v-show="view_mode == 'edit'"
        ref="CanvasBox"
        class="w-full rounded-3xl border border-dashed border-primary_blue aspect-[5/2] mb-5"
      >
        <canvas ref="MainCanvas" class="w-full h-full"></canvas>
      </div>
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center">
          <button
            @click="reset"
            class="font-bold text-primary_black text-opacity-50 transition-colors duration-200 mr-5 hover:text-opacity-100"
          >
            清除
          </button>
        </div>
        <div class="flex items-center">
          <button
            @click="SaveSign"
            class="px-4 py-2 mr-2 text-sm rounded-full bg-transparent text-primary_blue transition-colors duration-200 hover:bg-primary_blue_light hover:text-white"
          >
            加入我的簽名
          </button>
          <button
            @click="UseSign"
            class="px-4 py-2 text-sm rounded-full bg-primary_blue text-white transition-colors duration-200 hover:bg-primary_blue_light"
          >
            使用簽名
          </button>
        </div>
      </div>
    </div>
    <div
      data-dialog-bg
      class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-primary_white bg-opacity-80"
    ></div>
  </div>
</template>

<script>
import { dialog_animation } from '@/gsap/dialog';
import { getLocalStorage, setLocalStorage } from '@/common/localstorage';
import { readBlob } from '@/common/common';
export default {
  name: 'CreateSignDialog',
  data() {
    return {
      dialog_animation: null,
      status: false,
      isPainting: false,
      active_color: 'black',
      view_mode: 'upload',
    };
  },
  methods: {
    Close() {
      this.status = false;
    },
    Open() {
      this.reset();
      this.view_mode = 'upload';
      this.status = true;
    },
    UseSign() {
      const newImg = this.$refs.MainCanvas.toDataURL('image/png');
      this.$emit('create-action', newImg);
      this.status = false;
    },
    SaveSign() {
      const newImg = this.$refs.MainCanvas.toDataURL('image/png');
      let sign_list = getLocalStorage('sign_list');
      if (sign_list) {
        sign_list = JSON.parse(sign_list);
      } else {
        sign_list = [];
      }

      sign_list.push(newImg);
      setLocalStorage('sign_list', JSON.stringify(sign_list));
      this.$emit('read-sign');
      this.status = false;
    },
    // 重新設定畫布
    reset() {
      const ctx = this.$refs.MainCanvas.getContext('2d');
      ctx.clearRect(
        0,
        0,
        this.$refs.MainCanvas.width,
        this.$refs.MainCanvas.height
      );
    },

    async UploadFile(files) {
      const base64_file = await readBlob(files[0]);
      const canvas = this.$refs.MainCanvas;
      let ctx = canvas.getContext('2d');

      const image = new Image();
      image.src = base64_file;

      image.onload = () => {
        let newHeight, newWidth;

        canvas.width = canvas.clientWidth * 2;
        canvas.height = canvas.clientHeight * 2;
        var f = image.height / image.width;
        if (image.height > image.width) {
          newHeight = canvas.height;
          newWidth = canvas.height / f;
        } else {
          newHeight = canvas.width * f;
          newWidth = canvas.width;
        }
        var destY = (canvas.height - newHeight) / 2;
        var destX = (canvas.width - newWidth) / 2;

        //And then draw using the recalculated height of image for destination:
        ctx.drawImage(
          image,
          0,
          0,
          image.width,
          image.height, // source size
          destX,
          destY,
          newWidth,
          newHeight
        ); // destination size
      };
      this.view_mode = 'edit';
    },
    OpenUpload() {
      this.$refs.FileUploader.click();
    },
  },
  mounted() {
    this.dialog_animation = new dialog_animation(this.$refs.MainContent);
  },
  watch: {
    status() {
      if (this.status) {
        this.dialog_animation.open();
      } else {
        this.dialog_animation.close();
      }
    },
  },
};
</script>
