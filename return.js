const calculator = {
    add    : function (a, b) {
        // return을 하면, function은 작동을 멈추고 결과 값을 return하고 끝냄
        return a + b;
    },
    minus  : function (a, b) {
        return a - b;
    },
    divide : function (a, b) {
        return a / b;
    },
    multi  : function (a, b) {
        return a * b;
    },
    powerOf: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multiResult = calculator.multi(10, minusResult);
const divideResult = calculator.divide(multiResult, plusResult);
const powerOfResult = calculator.powerOf(divideResult, minusResult);