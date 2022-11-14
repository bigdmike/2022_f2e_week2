import { gsap } from '@/gsap/gsap_loader';

export class dialog_animation {
  constructor(el) {
    this.el = el;
    this.background = el.querySelector('[data-dialog-bg]');
    this.dialog_box = el.querySelector('[data-dialog-box]');
    this.timelilne = null;
  }

  reset() {
    this.timelilne != null ? this.timelilne.kill() : '';
    this.timelilne = null;
    gsap.set(this.el, { x: 0 });
    gsap.set(this.background, { opacity: 0 });
    gsap.set(this.dialog_box, { y: '100px', opacity: 0 });
  }

  open() {
    this.reset();
    this.timelilne = gsap.timeline();
    this.timelilne
      .set(this.el, {
        x: '-100%',
      })
      .fromTo(
        this.background,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        this.dialog_box,
        {
          y: '100px',
          opacity: 0,
        },
        {
          y: '0px',
          opacity: 1,
        }
      );
  }

  close() {
    this.timelilne != null ? this.timelilne.reverse() : '';
  }
}
