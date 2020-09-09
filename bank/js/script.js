$(() => {
   const $form = $('#calc-form');
   $form.submit((e) => {
      e.preventDefault();
      $.post('calc.php', $form.serialize(), (data) => {
         $('#result').text(data);
      });
   });
});

$(function () {
   $("#datepicker").datepicker();
});


let range1 = document.getElementById('range1');
let value1 = document.getElementById('value1');
let range2 = document.getElementById('range2');
let value2 = document.getElementById('value2');

noUiSlider.create(range1, {
   start: 300000,
   connect: 'lower',
   range: {
      'min': 1000,
      'max': 3000000
   }
});

range1.noUiSlider.on('update', function (values, handle) {
   value1.value = Math.trunc(values[handle]);
});

noUiSlider.create(range2, {
   start: 300000,
   connect: 'lower',
   range: {
      'min': 1000,
      'max': 3000000
   }
});

range2.noUiSlider.on('update', function (values, handle) {
   value2.value = Math.trunc(values[handle]);
});