'use strict';

require(['./load'], function(getLoad) {
  var loadBtn = document.querySelector('.load-btn');
  loadBtn.addEventListener('click', getLoad);
  //getLoad();
});
