<template>
  <div
    class="w-full xl:pl-0 md:pl-5 md:pr-0 px-5 md:block flex items-end flex-wrap"
  >
    <div
      class="pb-4 border-b border-primary_blue_light md:mb-10 md:w-full sm:w-1/3 w-full sm:m-0 mb-5"
    >
      <p class="text-sm text-disable_gray mb-1">文件名稱</p>
      <div class="flex relative pr-5">
        <label class="block w-full">
          <input
            :value="title"
            @input="$emit('update-title', $event.target.value)"
            type="text"
            class="text-xl md:w-auto w-full font-bold text-white bg-transparent focus:outline-none"
          />
          <img
            src="/2022_f2e_week2/img/icon/icon_edit.svg"
            class="absolute top-1/2 right-5 transform -translate-y-1/2"
          />
        </label>
      </div>
    </div>
    <div
      class="relative md:w-full sm:w-[22.2222%] w-1/3 xl:pr-16 lg:pr-14 md:pr-10 mb-4"
    >
      <span
        class="lg:w-14 lg:h-14 w-8 h-8 rounded-full bg-primary_blue_dark flex items-center justify-center absolute lg:left-4 left-2 top-0 transform -translate-y-1/2"
      >
        <img src="/2022_f2e_week2/img/icon/icon_plus.svg" class="lg:w-6 w-4" />
      </span>
      <button
        @click="$emit('open-create-dialog')"
        class="bg-primary_blue_light lg:rounded-l-3xl rounded-l-xl rounded-tr-xl lg:rounded-tr-3xl text-white py-4 md:py-3 lg:py-5 lg:pl-24 sm:pl-10 flex items-center sm:justify-start justify-center text-left w-full"
      >
        <p class="font-bold leading-none">加入簽名</p>
      </button>
    </div>
    <div class="w-full mb-4 md:block hidden">
      <ol class="w-full">
        <li
          v-for="(item, item_index) in sign_list"
          :key="`sign_${item_index}`"
          class="xl:pr-16 lg:pr-14 pr-10 w-full relative mb-4"
        >
          <div
            @click="$emit('create-action', item)"
            class="h-16 w-full bg-white rounded-lg border-dashed border border-primary_blue_light"
          >
            <img :src="item" class="w-full h-full object-contain" />
          </div>
          <button
            @click="DeleteSign(item_index)"
            class="w-5 h-5 absolute top-1/2 lg:right-5 right-2 transform -translate-y-1/2 rounded-full border-2 border-white flex items-center justify-center"
          >
            <IconClose class="w-2 h-2 text-white" />
          </button>
        </li>
      </ol>
    </div>
    <div class="pb-10 border-b border-primary_blue_light md:block hidden">
      <ol class="w-full relative mb-4">
        <li>
          <button
            @click="$emit('open-create-dialog')"
            class="flex items-center lg:text-base text-sm xl:pr-16 lg:pr-14 pr-10 lg:pl-5 font-bold py-4 text-white w-full relative"
          >
            <IconPen class="lg:w-6 lg:h-6 w-4 h-4 mr-3" />
            創建簽名

            <IconPlus
              class="lg:w-4 lg:h-4 h-3 w-3 absolute top-1/2 lg:right-5 right-3 transform -translate-y-1/2"
            />
          </button>
        </li>
        <li>
          <button
            @click="$emit('open-create-image')"
            class="flex items-center lg:text-base text-sm xl:pr-16 lg:pr-14 pr-10 lg:pl-5 font-bold py-4 text-white w-full relative"
          >
            <ImagePlus class="lg:w-6 lg:h-6 w-4 h-4 mr-3" />
            上傳圖片

            <IconPlus
              class="lg:w-4 lg:h-4 h-3 w-3 absolute top-1/2 lg:right-5 right-3 transform -translate-y-1/2"
            />
          </button>
        </li>
      </ol>
    </div>
    <div class="md:w-full sm:w-[44.4444%] w-2/3 block">
      <ol class="w-full relative mb-4 md:block flex items-end">
        <li class="md:w-full w-1/2">
          <button
            class="flex md:justify-start justify-center lg:pl-5 font-bold lg:text-base text-sm md:py-4 py-2 text-disable_gray text-opacity-50 w-full relative"
          >
            加入日期
            <span
              class="text-xs rounded-full md:ml-4 ml-3 border flex-shrink-0 border-primary_white text-white py-1 font-semibold md:px-2 px-1 flex items-center"
            >
              <img
                src="/2022_f2e_week2/img/icon/icon_pro.svg"
                class="md:w-4 w-3 md:mr-1 block"
              />
              <p class="md:block hidden">立即升級</p>
            </span>
          </button>
        </li>
        <li class="md:w-full w-1/2">
          <button
            class="flex md:justify-start justify-center lg:pl-5 font-bold lg:text-base text-sm md:py-4 py-2 text-disable_gray text-opacity-50 w-full relative"
          >
            加入文字
            <span
              class="text-xs rounded-full md:ml-4 ml-3 border flex-shrink-0 border-primary_white text-white py-1 font-semibold md:px-2 px-1 flex items-center"
            >
              <img
                src="/2022_f2e_week2/img/icon/icon_pro.svg"
                class="md:w-4 w-3 md:mr-1 block"
              />
              <p class="md:block hidden">立即升級</p>
            </span>
          </button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import IconClose from '@/components/svg/icon_close.vue';
import IconPen from '@/components/svg/icon_pen.vue';
import IconPlus from '@/components/svg/icon_plus.vue';
import ImagePlus from '@/components/svg/icon_image.vue';
import { setLocalStorage } from '@/common/localstorage';
export default {
  name: 'LeftMenu',
  props: {
    sign_list: {
      require: true,
      type: Array,
    },
    title: {
      requrie: true,
      type: String,
    },
  },
  components: {
    IconClose,
    IconPen,
    IconPlus,
    ImagePlus,
  },
  methods: {
    DeleteSign(index) {
      let tmp_list = JSON.parse(JSON.stringify(this.sign_list));
      tmp_list.splice(index, 1);
      setLocalStorage('sign_list', JSON.stringify(tmp_list));
      this.$emit('read-sign');
    },
  },
};
</script>
