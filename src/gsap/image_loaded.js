import { gsap } from '@/gsap/gsap_loader';

export class image_loader {
  constructor(el) {
    this.timeline = null;
    this.loading_box = el.querySelector('[data-loading-box]');
    this.right_el = el.querySelectorAll('[data-right-el]');
    this.left_el = el.querySelectorAll('[data-left-el]');
  }

  loadImage() {
    //鎖住body
    document.body.style.overflow = 'hidden';

    // 開啟動畫
    this.open();

    //初始化
    const images = gsap.utils.toArray('img');
    // const loader = document.querySelector('.loader--text');

    //進度條
    // const updateProgress = (instance) => {
    //   loader.innerHTML = `${Math.round(
    //     (instance.progressedCount * 100) / images.length
    //   )}`;
    // };

    //完成事件
    const showDemo = () => {
      //復原body
      document.body.style.overflow = 'auto';
      window.scrollTo(0, 0);

      // 開啟動畫
      this.close();
      this.timeline != null ? this.timeline.kill() : '';

      //設定讀取完成
      console.log('all images have been loaded!');
      //關閉讀取畫面
    };

    window.imagesLoaded(images).on('always', showDemo);
    // .on('progress', updateProgress)
  }

  open() {
    gsap.set(this.el, {
      x: '-100%',
      onComplete: () => {
        this.loading('left');
      },
    });
  }

  close() {
    gsap.set(this.el, {
      x: '0%',
    });
  }

  loading(type) {
    this.timeline = gsap.timeline();
    if (type == 'left') {
      this.timeline
        .set(this.left_el, {
          opacity: 0,
        })
        .set(this.right_el, {
          opacity: 1,
        })
        .fromTo(
          this.loading_box,
          {
            x: '-300%',
            opacity: 1,
          },
          {
            x: '300%',
            opacity: 0,
            ease: 'none',
            duration: 10,
            onComplete: () => {
              this.loading('right');
            },
          }
        );
    } else {
      this.timeline
        .set(this.left_el, {
          opacity: 1,
        })
        .set(this.right_el, {
          opacity: 0,
        })
        .fromTo(
          this.loading_box,
          {
            x: '300%',
            opacity: 1,
          },
          {
            x: '-300%',
            opacity: 0,
            duration: 10,
            ease: 'none',
            onComplete: () => {
              this.loading('left');
            },
          }
        );
    }
  }
}
