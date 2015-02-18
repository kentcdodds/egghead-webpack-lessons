'use strict';
var AlertButtons = require('./alert-buttons');
var LameDomBinding = require('./lame-dom-binding');
require('./index.less');
require('./logo.styl');
document.addEventListener('DOMContentLoaded', function() {
  AlertButtons.setupButtons();
  LameDomBinding.bindEls(document.getElementById('textarea1'), document.getElementById('textarea2'));
});
