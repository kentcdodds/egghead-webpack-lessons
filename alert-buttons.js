var _ = require('lodash');
module.exports = {
  setupButtons: function() {
    var alertButtons = document.querySelectorAll('[data-alert]');
    _.each(alertButtons, function(button) {
      button.addEventListener('click', function() {
        alert(button.innerText);
      });
    });
  }
};
