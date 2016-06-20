'use strict';

require(['./load', './add'], function(getLoad, getEdit) {
  var loadBtn = document.querySelector('.load-btn');
  loadBtn.addEventListener('click', getLoad);

  var addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', getEdit);
});
