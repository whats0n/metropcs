import svg4everybody from 'svg4everybody';
svg4everybody();

import './components';

window.addEventListener('load', function() {
  //POLYFILLS
  (function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
      if (!this) return null;
      if (this.matches(selector)) return this;
      if (!this.parentElement) {return null;}
      else return this.parentElement.closest(selector);
    };
  }(Element.prototype));
  (function(arr) {
    arr.forEach(function(item) {
      if (item.hasOwnProperty('remove')) {
        return;
      }
      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          this.parentNode.removeChild(this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
  //UTILS
  const makeArray = collection => {
    const arr = [];
    for (let i = 0; i < collection.length; i++) arr.push(collection[i]);
    return arr;
  };
  //BEGIN MODALS
  (function() {
    const OPEN = 'is-open';
    const doc = document;
    const modals = makeArray(doc.querySelectorAll('[data-modal]'));
    const modalOpen = makeArray(doc.querySelectorAll('[data-modal-target]'));
    const modalClose = makeArray(doc.querySelectorAll('[data-modal-close]'));

    modalOpen.forEach(btn => {
      const target = btn.dataset.modalTarget;
      const currentModal = modals.filter(modal => modal.dataset.modal === target)[0];
    
      btn.addEventListener('click', e => {
        e.preventDefault();
        currentModal.classList.add(OPEN);
      });
    });

    modalClose.forEach(btn => {
      const target = btn.dataset.modalClose;
      const currentModal = modals.filter(modal => modal.dataset.modal === target)[0];

      btn.addEventListener('click', e => {
        e.preventDefault();
        currentModal.classList.remove(OPEN);
      });
    });

    modals.forEach(modal => modal.addEventListener('click', e => {
      const target = e.target;
      if (target.closest('[data-modal-container]')) return;
      modal.classList.remove(OPEN);
    }, false));
  })();
  //END MODALS

  //BEGIN STEPS
  (function() {

    const doc = document;
    const steps = makeArray(doc.querySelectorAll('[data-step-state]'));
    const buttons = makeArray(doc.querySelectorAll('[data-step-direction]'));
    const progressLine = doc.querySelector('[data-step="line"]');
    const progressIn = doc.querySelector('[data-step="in"]');
    const max = steps.length;
    const min = 1;
    const percent = 100/max;
    const defaultActive = 1;
    let current = defaultActive;

    if (!steps.length) return;

    const toggleButtonsState = (state) => buttons.forEach(button => button.disabled = state);
    const setProgress = () => {
      const lineX = `translateX(-${100 - (percent*current - percent/2)}%) translateX(13px)`;
      const inX = `translateX(${100 - (percent*current - percent/2)}%) translateX(-13px)`;
      progressLine.style.transform = lineX;
      progressLine.style.webkitTransform = lineX;
      progressIn.style.transform = inX;
      progressIn.style.webkitTransform = inX;
    };

    const setState = () => {
      setProgress();
      steps.forEach((step, i) => {
        const number = +step.dataset.step;
        if (number < current) step.dataset.stepState = 'done';
        if (number > current) step.dataset.stepState = 'disabled';
        if (number === current) step.dataset.stepState = 'active';
      });
    };

    const goTo = {
      next() {
        if (current >= max) return;
        current++;
        setState();
      },
      prev() {
        if (current <= min) return;
        current--;
        setState();
      },
      currentStep(step) {
        current = step;
        setState();
      }
    };

    //go to current step
    buttons.forEach(button => button.addEventListener('click', goTo[button.dataset.stepDirection], false));
    steps.forEach(step => {
      const target = +step.dataset.step;
      step.addEventListener('click', e => {
        e.preventDefault();
        goTo.currentStep(target);
      }, false);
    });
    setState(defaultActive);
  })();
  //END STEPS

  //BEGIN RIPPLE EFFECT
  (function() {

    const isTouch = () => 'touchstart' in window;
    const eventName = isTouch() ? 'touchstart' : 'mousedown';
    const properties = [
      'animationDuration',
      'webkitAnimationDuration',
      'msAnimationDuration',
      'mozAnimationDuration',
      'oAnimationDuration'
    ];
    const getDuration = (el) => {
      let style = window.getComputedStyle(el),
        duration = style.webkitTransitionDuration; 

      for (let i = 0; i <= properties.length; i++) {
        let property = style[properties[i]];

        if (!property) continue;

        duration = property;
        break;
      }

      // fix miliseconds vs seconds
      duration = (duration.indexOf('ms')>-1) ? parseFloat(duration) : parseFloat(duration)*1000;


      return duration;
    };

    const animation = (e, target) => {
      const width = target.offsetWidth;
      const height = target.offsetHeight;
      const size = width >= height ? width : height;
      const offset = target.getBoundingClientRect();
      const pageX = e.type !== 'touchstart' ? e.pageX : e.touches[0].clientX;
      const pageY = e.type !== 'touchstart' ? e.pageY : e.touches[0].clientY;
      const x = pageX - offset.left;
      const y = pageY - offset.top;
        
      const circle = document.createElement('span');
        
      circle.classList.add('ripple-circle');
      circle.style.top = `${y - size/2}px`;
      circle.style.left = `${x - size/2}px`;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      target.appendChild(circle);

      const duration = getDuration(circle);

      const deleteCircle = setTimeout(() => circle.remove(), duration + 50);
      const animationEnd = e => {
        circle.remove();
        clearTimeout(deleteCircle);
      };

      circle.addEventListener('animationend', animationEnd, false);
      circle.addEventListener('webkitAnimationEnd', animationEnd, false);

    };

    document.addEventListener(eventName, function(e) { 
      const target = e.target.closest('[data-animation*="ripple"]');
      if (target) animation(e, target);
    }, false);

  })();
  //END RIPPLE
});
