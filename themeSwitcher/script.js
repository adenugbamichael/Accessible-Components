(
  function () {
  function isDeclarationSupported(property, value) {
    var prop = property + ':',
      el = document.createElement('test'),
      mStyle = el.style;
    el.style.cssText = prop + value;
    return mStyle[property];
  }

  const checkbox = document.getElementById('themer');
  const invertor = document.getElementById('inverter');

  if (!isDeclarationSupported('filter', 'invert(100%)')) {
    document.querySelector('.button').hidden = true;
    return;
  }

  checkbox.addEventListener('change', function () {
    // Triggers repaint in most browsers:
    invertor.setAttribute('media', this.checked ? 'screen' : 'none');
    // Forces repaint in Chrome:
    invertor.textContent = invertor.textContent.trim();
  });
}
)
();