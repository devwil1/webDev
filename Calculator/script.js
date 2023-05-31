var display = document.getElementById('display');

function calcu(number) {
    display.value += number;
  }  
  function clearDisplay() {
    var currentValue = display.value;
    var updatedValue = currentValue.slice(0, -1);
    display.value = updatedValue;
  }
  function calculate() {
    var expression = display.value;
    var result = eval(expression);
    display.value = result;
  }
  