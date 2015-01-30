var Calc = function(start) {
  //based off example seen in Javascript Patterns Training Video on PluralSight.com
  var runningTotal = start || 0;

  this.add = function (toAdd) {
    runningTotal += toAdd;
    return this;
  };
  this.subtract = function (toSubtract) {
    runningTotal -= toSubtract;
    return this;
  };
  this.multiply = function (toMultiply) {
    runningTotal = runningTotal * toMultiply;
    return this;
  };
  this.divide = function (toDivide) {
    runningTotal = runningTotal / toDivide;
    return this;
  };
  this.equals = function () {
    return runningTotal;
  };
  this.reset = function () {
    runningTotal = 0;
  };

};
