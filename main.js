if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || element.value;

      element.onkeyup = function() {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}

const form = document.querySelector('.form');
const button = document.querySelector('.submit-button');

     
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);

    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    var json = JSON.stringify(object);
    // console.log(Array.from(formData.entries()))
    console.log(json)
})