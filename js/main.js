'use strict';

require(['./load', './create', './create'], function(getLoad, createElement, add) {
  var loadBtn = document.querySelector('.load-btn');
  loadBtn.addEventListener('click', getLoad);

  var addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', createElement, add);
});
