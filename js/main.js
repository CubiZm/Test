'use strict';

require(['./load', './add'], function(getLoad, createElement) {
  var loadBtn = document.querySelector('.load-btn');
  loadBtn.addEventListener('click', getLoad);

  var addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', createElement);


});
