'use strict';

define(function() {

  function createElement() {
    var arr = [];
    var nameValue = document.querySelector('.add-name').value;
    var countValue = document.querySelector('.add-count').value;
    var priceValue = document.querySelector('.add-price').value;

    var newObjectElements = {};
    newObjectElements.name = nameValue;
    newObjectElements.count = countValue;
    newObjectElements.price = priceValue;
    arr.push(newObjectElements);
    console.log(arr);
  }


  return createElement;
});
