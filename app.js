$(document).ready( function () {

  var resultDisplay = $('#display');
  var calculator;
  var currentAction;
  
  
  $('.button').click(function () {
    console.log(this);
    if ($(this).hasClass('action')) {
      currentAction = $(this).data('action');
      if (currentAction === 'clear') {
        performAction();
      } else {
        if (!calculator) {
          calculator = new Calc(+resultDisplay.text()); 
        }
        console.log(calculator.equals());
      }
    } else if ($(this).hasClass('number')) {
      var num = +$(this).data('number');
      resultDisplay.text(num);
      if (currentAction) {
        performAction(num);
      }
    }
  });
  
  var performAction = function (num) {
    switch (currentAction) {
      case 'add':
        calculator.add(num)
        resultDisplay.text(calculator.equals);
        currentAction = undefined;
        break;
      case 'subtract':
        calculator.subtract(num);
        resultDisplay.text(calculator.equals);
        currentAction = undefined;
        break;
      case 'multiply':
        calculator.multiply(num);
        resultDisplay.text(calculator.equals);
        currentAction = undefined;
        break;
      case 'divide':
        calculator.divide(num);
        resultDisplay.text(calculator.equals);
        currentAction = undefined;
        break;
      case 'equals':
        resultDisplay.text(calculator.equals());
        currentAction = undefined;
        break;
      case 'clear':
        resultDisplay.text('0');
        currentAction = undefined;
        calculator = undefined;
      default:
        break;
    }
  };

});
