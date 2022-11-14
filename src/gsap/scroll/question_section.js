import { gsap } from '@/gsap/gsap_loader';

export class question_section_animation {
  constructor(el) {
    this.el = el;
    this.timeline = null;
    this.question_line = el.querySelectorAll('[data-question-line]');
    this.question_box = el.querySelector('[data-question-box]');
    this.setup();
  }

  reset() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = null;
    gsap.set(this.question_line[0], { x: '-250%', y: '-50%' });
    gsap.set(this.question_line[1], { x: '250%', y: '-50%' });
    gsap.set(this.question_line[2], { x: '-250%', y: '-50%' });
  }

  setup() {
    this.reset();
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.el,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: this.question_box,
      },
    });

    this.timeline
      .fromTo(
        this.question_line[0],
        {
          y: '-50%',
          x: '-250%',
        },
        {
          y: '-50%',
          x: '-50%',
        }
      )
      .fromTo(
        this.question_line[1],
        {
          y: '-50%',
          x: '250%',
        },
        {
          y: '-50%',
          x: '-50%',
        }
      )
      .fromTo(
        this.question_line[2],
        {
          y: '-50%',
          x: '-250%',
        },
        {
          y: '-50%',
          x: '-50%',
        }
      );
  }
}
