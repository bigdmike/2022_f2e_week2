import { gsap } from '@/gsap/gsap_loader';

export class main_title_section_animation {
  constructor(el) {
    this.el = el;
    this.timeline = null;
    this.leave_timeline = null;
    // 畫面一標題圖片
    this.title = this.el.querySelector('[data-title]');
    // 背景框線容器
    this.background_box = this.el.querySelectorAll('[data-background-box]');
    // 背景框線
    this.background_el = this.el.querySelectorAll('[data-background-el]');
    // 畫面容器
    this.article_box = this.el.querySelector('[data-article-box]');
    this.setup();
  }

  reset() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = null;
    this.leave_timeline != null ? this.leave_timeline.kill() : '';
    this.leave_timeline = null;
  }

  setup() {
    this.reset();
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.el,
        start: '0 top',
        end: window.innerHeight + ' top',
        scrub: true,
        pin: this.title,
      },
    });

    // 畫面放大 背景前進
    this.timeline
      .fromTo(
        this.title,
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 2,
          opacity: 0,
        },
        'same'
      )
      .fromTo(
        this.article_box,
        {
          scale: 0.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
        },
        'same'
      )
      .to(
        this.background_el[0],
        {
          scale: 4,
        },
        'same'
      )
      .to(
        this.background_el[1],
        {
          scale: 1,
        },
        'same'
      );

    this.leave_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.el,
        start: window.innerHeight * 2 + ' top',
        end: window.innerHeight * 2.5 + ' top',
        scrub: true,
      },
    });

    // 畫面淡出 背景換色
    this.leave_timeline
      .fromTo(
        this.article_box,
        {
          opacity: 1,
          scale: 1,
        },
        {
          opacity: 0,
          scale: 3,
        },
        'same'
      )
      .to(
        this.el,
        {
          backgroundColor: '#52C4CC',
        },
        'same'
      )
      .to(
        this.background_box,
        {
          opacity: 0,
        },
        'same'
      );

    // 固定畫面 讓資訊停留
    gsap.timeline({
      scrollTrigger: {
        trigger: this.el,
        start: window.innerHeight + ' top',
        end: window.innerHeight * 2 + ' top',
        scrub: true,
      },
    });

    gsap.to(this.article_box, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: window.innerHeight * 2.5 + ' top',
        pin: this.article_box,
      },
    });

    gsap.to(this.background_box, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: window.innerHeight * 2.5 + ' top',
        pin: this.background_box,
      },
    });

    gsap.to(this.el, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: window.innerHeight * 2.5 + ' top',
        pin: this.el,
      },
    });
  }
}
