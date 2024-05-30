const toggle = document.querySelector('[aria-pressed]');

toggle.addEventListener('click', () => {
  let pressed = toggle.getAttribute('aria-pressed') === 'true';
  toggle.setAttribute('aria-pressed', !pressed);
}); 



const toggles = document.querySelectorAll('[role="switch"]');

Array.prototype.forEach.call(toggles, toggle => {
  toggle.addEventListener('click', e => {
    let checked = toggle.getAttribute('aria-checked') === 'true';
    toggle.setAttribute('aria-checked', !checked);
  });
});
