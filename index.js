(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    AlertButtons.setupButtons();
    LameDomBinding.bindEls(document.getElementById('textarea1'), document.getElementById('textarea2'));
  });
})();
