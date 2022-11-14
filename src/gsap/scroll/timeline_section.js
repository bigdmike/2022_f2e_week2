import { gsap, ScrollTrigger } from '@/gsap/gsap_loader';
export class timeline_section_animation {
  constructor(el) {
    this.el = el;
    this.main_timeline = null;
    this.progress = 0;
    this.article_timeline = [];
    this.progress_timeline = [];
    // 畫面
    this.articles = this.el.querySelectorAll('[data-article]');
    // 進度條
    this.progress_box = this.el.querySelector('[data-progress-box]');
    // 進度文字
    this.progress_title = this.el.querySelectorAll('[data-progress-title]');
    // 小精靈
    this.pacman = this.el.querySelector('[data-pacman]');
    this.setup();
  }

  reset() {
    this.main_timeline != null ? this.main_timeline.kill() : '';
    this.main_timeline = null;

    while (this.article_timeline.length) {
      let tween = this.article_timeline.pop();
      tween.scrollTrigger.kill(true);
      tween.kill();
      tween = null;
    }

    while (this.progress_timeline.length) {
      let tween = this.progress_timeline.pop();
      tween.scrollTrigger.kill(true);
      tween.kill();
      tween = null;
    }

    gsap.set(this.articles, { xPercent: 0 });
    this.articles.forEach((item) => {
      const dialog_box = item.querySelectorAll('.dialog_box');
      const image_box = item.querySelectorAll('.image_box');
      gsap.set(dialog_box, { scale: 1, y: 0 });
      gsap.set(image_box, { scale: 1, y: 0 });
    });
    gsap.set(this.progress_box, { top: '50%' });
    gsap.set(this.pacman, { left: '0%' });
  }

  setup() {
    this.reset();
    this.main_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.el,
        pin: true,
        scrub: 0,
        ease: 'none',
        snap: 1 / (this.articles.length - 1),
        end: () => '+=' + this.el.offsetWidth,
        onUpdate: (self) => {
          this.progress = self.progress.toFixed(2) * 100;
        },
      },
    });
    this.main_timeline.to(this.articles, {
      xPercent: -100 * (this.articles.length - 1),
      ease: 'none',
    });

    this.articles.forEach((item, item_index) => {
      const dialog_box = item.querySelectorAll('.dialog_box');
      const image_box = item.querySelectorAll('.image_box');

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          containerAnimation: this.main_timeline,
          start: 'left center',
          end: 'center center',
          scrub: true,
        },
      });
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          tl.from(dialog_box, {
            y: 120,
            ease: 'none',
          }).fromTo(
            image_box,
            {
              y: -120,
            },
            {
              y: 100,
              ease: 'none',
            }
          );
        },
        '(max-width: 768px)': () => {
          tl.from(
            dialog_box,
            {
              scale: 0,
              ease: 'none',
            },
            'same'
          ).fromTo(
            image_box,
            {
              y: 220,
              scale: 0.5,
            },
            {
              y: 100,
              scale: 1,
              ease: 'none',
            },
            'same'
          );
        },
      });

      this.article_timeline.push(tl);

      let progress_tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          containerAnimation: this.main_timeline,
          start: '80% center',
          end: 'center left',
          scrub: true,
        },
      });
      if (item_index == 0) {
        ScrollTrigger.matchMedia({
          '(min-width: 768px)': () => {
            progress_tl
              .fromTo(
                this.progress_box,
                {
                  top: '50%',
                },
                {
                  top: '15%',
                }
              )
              .to(this.pacman, {
                left: '10%',
              });
          },
          '(min-width: 640px) and (max-width: 768px)': () => {
            progress_tl
              .fromTo(
                this.progress_box,
                {
                  top: '50%',
                },
                {
                  top: '10%',
                }
              )
              .to(this.pacman, {
                left: '10%',
              });
          },
          '(max-width: 640px)': () => {
            progress_tl
              .fromTo(
                this.progress_box,
                {
                  top: '50%',
                },
                {
                  top: '13%',
                }
              )
              .to(this.pacman, {
                left: '13%',
              });
          },
        });
      } else {
        progress_tl.to(this.pacman, {
          left: (item_index * 2 + 1) * 10 + '%',
          ease: 'none',
        });
      }

      this.progress_timeline.push(progress_tl);
    });
  }
}
