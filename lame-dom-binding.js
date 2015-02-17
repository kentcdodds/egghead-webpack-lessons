var LameDomBinding = {
  bindEls: function(el1, el2) {
    el1.addEventListener('keyup', function() {
      el2.value = el1.value;
    });
    el2.addEventListener('keyup', function() {
      el1.value = el2.value;
    });
  }
};
