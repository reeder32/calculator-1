//business logic:
function add(number1, number2) {
	return number1 + number2;
}

//const number1 = parseInt(prompt('enter a number:'));
//const number2 = parseInt(prompt('enter another number:'));


function divide(number1, number2) {
	return number1 / number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

//const result = multiply(number1, number2);
//alert(result);

//userinterface logic:
$(document).ready(function(){
  $("#add-button").click(function(event){
    const number1=parseInt($("#number1").val());
    const number2=parseInt($("#number2").val());
    const result=add(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("#subtract-button").click(function(event) {
    const number1=parseInt($("#number1").val());
    const number2=parseInt($("#number2").val());
    const result=subtract(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("#multiply-button").click(function(event) {
    const number1=parseInt($("#number1").val());
    const number2=parseInt($("#number2").val());
    const result=multiply(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("#divide-button").click(function(event) {
    const number1=parseInt($("#number1").val());
    const number2=parseInt($("#number2").val());
    const result=divide(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  })
});


