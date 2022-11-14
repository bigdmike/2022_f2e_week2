import { gsap } from '@/gsap/gsap_loader';

export class quest_section_animation {
  constructor(el) {
    this.el = el;
    this.timeline = [];
    this.enter_timeline = null;
    // 畫面容器
    this.article_box = this.el.querySelector('[data-article-box]');
    // 畫面
    this.articles = this.el.querySelectorAll('[data-article]');
    // 背景容器
    this.background_box = this.el.querySelector('[data-background-box]');
    // 背景
    this.background_el = this.el.querySelectorAll('[data-background-el]');
    // 背景顏色列表
    this.background_color_list = ['#52C4CC', '#6633FF', '#FF7A00'];
    this.setup();
  }

  reset() {
    this.timeline.forEach((tl, tl_index) => {
      tl != null ? tl.kill() : '';
      this.timeline[tl_index] = null;
    });
    this.timeline = [];
    this.articles.forEach((item, item_index) => {
      gsap.set(item, {
        opacity: item_index == 0 ? 0.5 : (1 / Math.pow(2, item_index)) * 0,
        scale: item_index == 0 ? 0.5 : 1 / Math.pow(2, item_index),
      });
    });
    gsap.set(this.el, {
      backgroundColor: this.background_color_list[0],
    });
  }

  setup() {
    this.reset();
    this.enter_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: window.innerHeight + ' top',
        scrub: true,
      },
    });

    // 進場
    this.enter_timeline
      .fromTo(
        this.article_box,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        'same'
      )
      .fromTo(
        this.background_box,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        'same'
      );

    // 畫面動畫
    this.articles.forEach((item, step_index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.el,
          start:
            step_index * 2 * window.innerHeight + window.innerHeight + ' top',
          end:
            step_index * 2 * window.innerHeight +
            window.innerHeight * 2 +
            ' top',
          scrub: true,
        },
      });

      //   背景圖
      tl.to(
        this.background_el[step_index],
        {
          scale: 4,
        },
        'same'
      )
        .to(
          this.background_el[step_index + 1],
          {
            scale: 1,
          },
          'same'
        )
        .to(
          this.background_el[step_index + 2],
          {
            opacity: 1,
            scale: 0.25,
          },
          'same'
        );

      // 背景顏色
      if (step_index == 0) {
        tl.fromTo(
          this.el,
          {
            backgroundColor: this.background_color_list[step_index],
          },
          {
            backgroundColor: this.background_color_list[step_index],
            ease: 'none',
          },
          'same'
        );
      } else if (step_index <= this.background_color_list.length - 1) {
        tl.to(
          this.el,
          {
            backgroundColor: this.background_color_list[step_index],
            ease: 'none',
          },
          'same'
        );
      } else if (step_index == this.articles.length - 2) {
        tl.to(
          this.el,
          {
            backgroundColor: 'black',
            ease: 'none',
          },
          'same'
        );
      }

      //畫面
      this.articles.forEach((article, article_index) => {
        tl.to(
          article,
          {
            touchAction: article_index == step_index ? '' : 'none',
            userSelect: article_index == step_index ? '' : 'none',
            zIndex: article_index == step_index ? 10 : article_index,
            scale:
              article_index == step_index
                ? 1
                : article_index < step_index
                ? 2
                : 1 / Math.pow(2, article_index - step_index),
            opacity:
              article_index == step_index
                ? 1
                : article_index < step_index
                ? 0
                : (1 / Math.pow(2, article_index - step_index)) * 0.3,
            ease: 'none',
          },
          'same'
        );
      });

      this.timeline.push(tl);
    });

    // 固定畫面容器
    gsap.to(this.article_box, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.article_box,
      },
    });

    // 固定背景容器
    gsap.to(this.background_box, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.background_box,
      },
    });
  }
}
