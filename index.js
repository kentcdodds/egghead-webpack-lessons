require('./index.styl');
require('./index.less');
var AlertButtons = require('./alert-buttons');
var LameDomBinding = require('./lame-dom-binding');
document.addEventListener('DOMContentLoaded', function() {
  AlertButtons.setupButtons();
  LameDomBinding.bindEls(document.getElementById('textarea1'), document.getElementById('textarea2'));
});
