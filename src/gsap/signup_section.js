import { gsap, ScrollTrigger } from '@/gsap/gsap_loader';

export class signup_section_animation {
  constructor(el) {
    this.el = el;
    this.timeline = null;
    this.background = el.querySelector('[data-background]');
    this.seal = el.querySelector('[data-seal]');
    this.right_ghost = el.querySelector('[data-ghost-right]');
    this.top_ghost = el.querySelector('[data-ghost-top]');
    this.bottom_ghost = el.querySelector('[data-ghost-bottom]');
    this.cat = el.querySelector('[data-cat]');
    this.text_body = el.querySelector('[data-text-body]');
    this.text_shadow = el.querySelector('[data-text-shadow]');
    this.content = el.querySelector('[data-content]');
  }

  reset() {
    this.timeline != null ? this.timeline.kill() : '';
    this.timeline = null;
  }

  open() {
    this.reset();
    this.timeline = gsap.timeline();
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': () => {
        this.timeline
          .fromTo(
            this.background,
            {
              scale: 0,
            },
            {
              scale: 1.5,
              duration: 0.6,
              ease: 'back.out(4)',
            },
            0
          )
          .to(
            this.seal,
            {
              y: '0%',
              duration: 0.4,
              ease: 'back.out(4)',
            },
            0
          )
          .to(
            this.right_ghost,
            {
              x: '15%',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.top_ghost,
            {
              y: '-15%',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.bottom_ghost,
            {
              y: '0%',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.cat,
            {
              x: '-30%',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.text_body,
            {
              color: '#6633FF',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.text_shadow,
            {
              color: '#52C4CC',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.content,
            {
              color: '#6633FF',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          );
      },
      '(max-width: 640px)': () => {
        this.timeline
          .fromTo(
            this.background,
            {
              scale: 0,
            },
            {
              scale: 1.5,
              duration: 0.6,
              ease: 'back.out(4)',
            },
            0
          )
          .to(
            this.seal,
            {
              y: '0%',
              duration: 0.4,
              ease: 'back.out(4)',
            },
            0
          )
          .to(
            this.right_ghost,
            {
              x: '25%',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.top_ghost,
            {
              y: '-32%',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.bottom_ghost,
            {
              y: '0%',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.cat,
            {
              x: '-40%',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.text_body,
            {
              color: '#6633FF',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.text_shadow,
            {
              color: '#52C4CC',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          )
          .to(
            this.content,
            {
              color: '#6633FF',
              duration: 0.4,
              ease: 'back.out(3)',
            },
            0
          );
      },
    });
  }

  close() {
    this.timeline != null ? this.timeline.reverse() : '';
  }
}
