<template>
  <div class="w-full h-full overflow-auto">
    <div class="w-full h-full">
      <canvas ref="PageCanvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCanvas',
  props: {
    canvas_list: {
      require: true,
      type: Array,
    },
  },
  methods: {
    async CreateCanvasView(image_data) {
      const image = new Image();
      image.src = image_data;
      let new_canvas = new window.fabric.Canvas(this.$refs.PageCanvas);

      image.onload = () => {
        var f_img = new window.fabric.Image(image, {
          scaleX: 848 / image.width,
          scaleY: 848 / image.width,
        });
        this.$refs.PageCanvas.width = 848;
        this.$refs.PageCanvas.height = (848 / image.width) * image.height;

        new_canvas.setWidth(848);
        new_canvas.setHeight((848 / image.width) * image.height);
        new_canvas.setBackgroundImage(f_img);
        new_canvas.renderAll();
        this.$emit('create-canvas-list', new_canvas);
      };
    },
    CreateImage() {
      let image_list = [];
      const image = this.$refs.PageCanvas.toDataURL('image/png');
      image_list.push(image);
      this.$emit('create-finish-image', image_list);
    },
  },
};
</script>
