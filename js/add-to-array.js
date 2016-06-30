'use strict';

define(['./create'], function(createElement) {
  var arr = [];
  var a = createElement;
  function add() {
    arr.push(a);
    console.log(arr)
  }
  return add;
});
