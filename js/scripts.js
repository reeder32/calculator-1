//business logic:
function add(number1, number2) {
  return number1 + number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

//userinterface logic:
$(document).ready(function () {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    const operator = $("input:radio[name='operator']:checked").val();
    console.log(operator);
    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    console.log(result);
    $("#output").text(result);
    
  });
});
