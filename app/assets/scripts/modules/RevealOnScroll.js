import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
//
class RevealOnScroll {
  constructor(elements, triggerOffsetPcent = 75) {
    //
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.itemsToReveal = elements;
    this.browserHeight = window.innerHeight;
    this.triggerOffsetPcent = triggerOffsetPcent;
    this.hideOnInit();
    this.events();
    //
  }
  //
  events() {
    // console.log('ran');
    window.addEventListener('scroll', this.scrollThrottle);
    // wait until resize complete
    window.addEventListener(
      'resize',
      debounce(() => {
        // console.log('resize ran', window.innerHeight)
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }
  calcCaller() {
    // console.log('scroll invoked');
    this.itemsToReveal.forEach(el => {
      // faster to find el.propert than looping thru classlist
      if (el.isRevealed === false) this.calculateIfScrolledTo(el);
    });
  }
  //
  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      //
      /* How far from the top of the window in pixels. + are above - is below
    el.getBoundingClientRect().y 
    */
      // was top for edge, maybe not now they chromium
      let scrollPcentOfRelativeViewport = el.getBoundingClientRect().y / this.browserHeight * 100;
      if (scrollPcentOfRelativeViewport < this.triggerOffsetPcent) {
        el.classList.add('reveal-item--is-visible');
        el.isRevealed = true;
        //
        if (el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle);
        }
      }
      //
    }
  }
  hideOnInit() {
    //
    this.itemsToReveal.forEach(el => {
      el.classList.add('reveal-item');
      el.isRevealed = false;
    });
    // apply property to last el to remove evt-listener
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll;
/**
 * 
 * Hello everyone, I have two quick notes:

1) The code from our previous lesson will work in Chrome and Firefox, but not the current version of Microsoft Edge. In order to get things working with Edge, all you need to do is find the following bit of code:

el.getBoundingClientRect().y
And instead change it to:

el.getBoundingClientRect().top
Essentially, Edge doesn't have the y property but does have the top property.

2) Shortly after filming this lesson I learned about a feature that only modern web browsers have named Intersection Observer. It would allow us to code this feature while using much less computing resources while scrolling. I'll work on using Intersection Observer in a future update to the lesson, but for now, it's not a dealbreaker; please continue on and enjoy working on the remainder of this feature!
 */
