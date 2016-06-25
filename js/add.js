'use strict';

define(['./edit'], function(getEdit) {

  function setAdd() {
    var template = document.querySelector('#template');
    var inputName = document.querySelector('.template-name');
    var inputCount = document.querySelector('.template-count');
    var inputPrice = document.querySelector('.template-price');

    var nameValue = inputName.value;
    var countValue = inputCount.value;
    var priceValue = inputPrice.value;

    console.log(nameValue);
    var editBtn = document.querySelector('.edit');
    editBtn.addEventListener('click', getEdit);
  }

  return setAdd;
});
