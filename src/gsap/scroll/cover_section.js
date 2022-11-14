import { gsap } from '@/gsap/gsap_loader';

export class cover_section_animation {
  constructor(el) {
    this.el = el;
    this.timeline = null;
    // 背景方格
    this.bg_square = this.el.querySelectorAll('[data-bg-el]');
    // 背景方格透明度清單
    this.opacity_list = [
      0, 0, 0.4, 0.2, 0, 0, 0.4, 0.2, 0, 0, 0.4, 0, 0, 0.3, 0, 0.4, 0, 0.3, 0,
      0.4, 0, 0.3, 0, 0.4, 0.1, 0, 0.4, 0, 0.1, 0, 0.4, 0, 0.2, 0.2, 0.4, 0,
    ];
    // 報名組數
    this.count_box = this.el.querySelectorAll('[data-count_box]');
    // 標題
    this.title = this.el.querySelector('[data-title]');
    // 副標題
    this.sub_title = this.el.querySelector('[data-sub_title]');
    // 右邊鬼
    this.right_ghost = this.el.querySelector('[data-ghost-right]');
    // 上面鬼
    this.top_ghost = this.el.querySelector('[data-ghost-top]');
    // 左邊鬼
    this.left_ghost = this.el.querySelector('[data-ghost-left]');
    this.setup();
  }
  reset() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = null;
    gsap.set(this.bg_square, { opacity: 0 });
    gsap.set(this.title, { opacity: 0, scale: 0 });
    gsap.set(this.sub_title, { y: '105%' });
    gsap.set(this.count_box, { y: '105%' });
  }
  setup() {
    this.reset();
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.el,
      },
    });

    // 背景方塊隨機浮現
    this.bg_square.forEach((item, item_index) => {
      this.timeline.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: this.opacity_list[item_index],
          delay: gsap.utils.random(0.1, 0.6),
          duration: 0.6,
        },
        'first'
      );
    });

    this.timeline
      .fromTo(
        this.title,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.inOut(4)',
        },
        'second'
      )
      .fromTo(
        this.sub_title,
        {
          y: '105%',
        },
        {
          y: '0%',
          duration: 0.8,
          ease: 'back.inOut(4)',
          delay: 0.2,
        },
        'other'
      )
      .fromTo(
        this.count_box,
        {
          y: '105%',
        },
        {
          y: '0%',
          duration: 0.8,
          ease: 'back.inOut(4)',
          stagger: 0.1,
          delay: 0.2,
        },
        'other'
      )
      .from(
        this.top_ghost,
        {
          y: '-105%',
          ease: 'back.inOut(4)',
          delay: 0.4,
        },
        'other'
      )
      .from(
        this.left_ghost,
        {
          y: '105%',
          duration: 1,
          ease: 'back.inOut(2)',
          delay: 0.4,
        },
        'other'
      )
      .from(
        this.right_ghost,
        {
          y: '105%',
          duration: 1,
          ease: 'back.inOut(2)',
          delay: 0.4,
        },
        'other'
      );
  }
}
