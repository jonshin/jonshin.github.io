/**
 * 44px is the height of the Safari overflow bar
 */
const SAFARI_MOBILE_BOTTOM_MENU_HEIGHT = 44;

/**
 * Import from a library such as lodash or implement your own. Scroll events
 * should always be throttled or debounced.
 */
const throttle = () => {};

/**
 * When bottom > window.innerHeight, we know for a fact that `element` is
 * outside the window bounds. Normally, `position: fixed` keeps the element
 * inside the window bounds.
 *
 * @param {Element} element
 * @param {Number} offsetBottom - in pixels
 */
const reactToSafariOverflowBar = (element, offsetBottom) => {
  const {bottom} = element.getBoundingClientRect();
  if (Math.floor(bottom) > window.innerHeight) {
    element.style.bottom = offsetBottom + SAFARI_MOBILE_BOTTOM_MENU_HEIGHT;
  } else {
    element.style.bottom = offsetBottom;
  }
};

const offsetBottom = 20;
const stuckToBottom = document.querySelector('.is-stuckToBottom');

/**
 * Handle scroll events. This listener should be removed if the component
 * is removed, but this serves its demo purposes.
 */
window.addEventListener('scroll', throttle(() => reactToSafariOverflowBar(stuckToBottom, offsetBottom), 200));
