<template>
  <div
    ref="MainContent"
    class="fixed top-0 left-full w-screen bottom-0 z-30 flex items-center justify-center"
  >
    <div
      data-dialog-box
      class="w-full max-w-screen-md p-10 rounded-3xl bg-white relative z-10 text-center"
    >
      <h2 class="text-2xl font-bold mb-5">創建簽名</h2>
      <div
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
          <div class="flex items-center">
            <button
              v-for="item in color_list"
              :key="item.title"
              :style="`border-color:${item.color}`"
              @click="active_color = item.title"
              :class="active_color == item.title ? 'border' : 'border-none'"
              class="w-6 h-6 rounded-full flex items-center justify-center border mr-3"
            >
              <span
                class="w-5 h-5 rounded-full bg-black block"
                :style="`background-color:${item.color}`"
              ></span>
            </button>
          </div>
        </div>
        <div class="flex items-center">
          <button
            @click="SaveSign"
            class="px-4 py-2 mr-2 text-sm rounded-full bg-transparent text-primary_blue transition-colors duration-200 hover:bg-primary_blue_light"
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
export default {
  name: 'CreateSignDialog',
  data() {
    return {
      dialog_animation: null,
      status: false,
      isPainting: false,
      active_color: 'black',
      color_list: [
        {
          title: 'black',
          color: '#000000',
        },
        {
          title: 'blue',
          color: '#16219C',
        },
        {
          title: 'red',
          color: '#FF0303',
        },
      ],
    };
  },
  methods: {
    Close() {
      this.status = false;
    },
    Open() {
      this.reset();
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
    // 取得滑鼠 / 手指在畫布上的位置
    getPaintPosition(e) {
      const canvasSize = this.$refs.MainCanvas.getBoundingClientRect();

      if (e.type === 'mousemove') {
        return {
          x: e.clientX - canvasSize.left,
          y: e.clientY - canvasSize.top,
        };
      } else {
        return {
          x: e.touches[0].clientX - canvasSize.left,
          y: e.touches[0].clientY - canvasSize.top,
        };
      }
    },

    // 開始繪圖時，將狀態開啟
    startPosition(e) {
      e.preventDefault();
      this.isPainting = true;
    },

    // 結束繪圖時，將狀態關閉，並產生新路徑
    finishedPosition() {
      const ctx = this.$refs.MainCanvas.getContext('2d');
      this.isPainting = false;
      ctx.beginPath();
    },

    // 繪圖過程
    draw(e) {
      const ctx = this.$refs.MainCanvas.getContext('2d');
      // 滑鼠移動過程中，若非繪圖狀態，則跳出
      if (!this.isPainting) return;

      // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
      const paintPosition = this.getPaintPosition(e);

      // 移動滑鼠位置並產生圖案
      ctx.strokeStyle = this.color_list.filter(
        (item) => item.title == this.active_color
      )[0].color;
      ctx.lineTo(paintPosition.x, paintPosition.y);
      ctx.stroke();
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
  },
  mounted() {
    this.dialog_animation = new dialog_animation(this.$refs.MainContent);
    if (this.status) {
      this.dialog_animation.open();
    } else {
      this.dialog_animation.close();
    }

    const canvas = this.$refs.MainCanvas;
    canvas.width = this.$refs.CanvasBox.clientWidth;
    canvas.height = this.$refs.CanvasBox.clientHeight;
    const ctx = canvas.getContext('2d');

    // 設定線條的相關數值
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    // 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中

    // event listener 電腦板
    canvas.addEventListener('mousedown', this.startPosition);
    canvas.addEventListener('mouseup', this.finishedPosition);
    canvas.addEventListener('mouseleave', this.finishedPosition);
    canvas.addEventListener('mousemove', this.draw);

    // event listener 手機板
    canvas.addEventListener('touchstart', this.startPosition);
    canvas.addEventListener('touchend', this.finishedPosition);
    canvas.addEventListener('touchcancel', this.finishedPosition);
    canvas.addEventListener('touchmove', this.draw);
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
