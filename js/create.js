'use strict';

define(['./add-to-array'], function(add) {

  function createElement() {
    var nameValue = document.querySelector('.add-name').value;
    var countValue = document.querySelector('.add-count').value;
    var priceValue = document.querySelector('.add-price').value;

    var newObjectElements = {};
    newObjectElements.name = nameValue;
    newObjectElements.count = countValue;
    newObjectElements.price = priceValue;
    console.log(newObjectElements);
    //add();
    return newObjectElements;
  }
  return createElement;
});
