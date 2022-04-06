const calculator = {
    add    : function (a, b) {
        console.log(a + b);
    },
    minus  : function (a, b) {
        console.log(a - b);
    },
    divide : function (a, b) {
        console.log(a / b);
    },
    multi : function (a, b) {
        console.log(a * b);
    },
    powerOf: function (a, b) {
        console.log(a ** b);
    },
};

calculator.add(1, 2);
calculator.minus(1, 2);
calculator.divide(6, 3);
calculator.multi(6, 3);
calculator.powerOf(2, 2);