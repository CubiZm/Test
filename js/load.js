'use strict';

define(function() {

  function getLoad() {

    var xhr = new XMLHttpRequest();
    xhr.onload = function(evt) {
      var loadJson = JSON.parse(evt.target.response).slice();

      loadJson.forEach(function(itemObj) {
        var template = document.getElementById('template');
        var newElement = template.querySelector('.template-tbody');
        var parent = document.querySelector('.tbody');
        var removeBtn = document.querySelector('.load-btn');

        removeBtn.classList.add('invisible');

        if ('content' in template) {
          newElement = template.content.querySelector('.template-tbody');
        } else {
          newElement = template.querySelector('.template-tbody');
        }

        var element = newElement.cloneNode(true);
        var nameItem = itemObj.name;
        var priceItem = itemObj.price;
        var countItem = itemObj.count;

        element.querySelector('.template-name').textContent = nameItem;
        element.querySelector('.template-count').textContent = countItem;
        element.querySelector('.template-price').textContent = priceItem;
        parent.appendChild(element);

      });
    };

    xhr.open('GET', 'js/items.json');
    xhr.send();
  }
  return getLoad;
});
