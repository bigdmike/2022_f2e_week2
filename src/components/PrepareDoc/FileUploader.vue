<template>
  <div
    ref="FileDragZone"
    class="w-full py-24 sm:px-0 px-20 border border-dashed border-spacing-10 border-primary_blue rounded-3xl flex items-center justify-center"
  >
    <input
      hidden
      type="file"
      ref="FileUploader"
      accept=".jpg,.jpeg, .pdf, .png"
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
</template>

<script>
import { setLocalStorage } from '@/common/localstorage';
import { readBlob } from '@/common/common';
export default {
  name: 'FileUploader',
  data() {
    return {
      upload_file: null,
    };
  },
  methods: {
    OpenUpload() {
      this.$refs.FileUploader.click();
    },
    Init() {
      // file select
      this.$refs.FileUploader.addEventListener(
        'change',
        this.FileSelectHandler,
        false
      );

      // is XHR2 available?
      var xhr = new XMLHttpRequest();
      if (xhr.upload) {
        // file drop
        this.$refs.FileDragZone.addEventListener(
          'dragover',
          this.FileDragHover,
          false
        );
        this.$refs.FileDragZone.addEventListener(
          'dragleave',
          this.FileDragHover,
          false
        );
        this.$refs.FileDragZone.addEventListener(
          'drop',
          this.FileSelectHandler,
          false
        );
      }
    },
    FileDragHover(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    FileSelectHandler(e) {
      this.FileDragHover(e);

      var files = e.target.files || e.dataTransfer.files;

      this.ParseFile(files[0]);
      this.upload_file = files[0];
    },
    async ParseFile(file) {
      if (file.size > 10000000) {
        this.$store.commit('SetMainDialog', {
          action: true,
          content: '檔案大小不得超過10MB',
        });
        this.upload_file = null;
      } else {
        const base64_file = await readBlob(file);
        setLocalStorage('upload_file', base64_file);
        if (file.type == 'application/pdf') {
          this.$router.push('/sign_and_send?type=upload_file&file_type=pdf');
        } else {
          this.$router.push('/sign_and_send?type=upload_file&file_type=image');
        }
      }
    },
  },
  mounted() {
    this.Init();
  },
};
</script>
