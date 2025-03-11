function calculator() { 
    let numOneElement = null;
    let numTwoElement = null;
    let resultElement = null;

    return {        
        init: function(selector1, selector2, resultSelector) {
           numOneElement = document.querySelector(selector1);
           numTwoElement = document.querySelector(selector2);
           resultElement = document.querySelector(resultSelector);
        },

        add: function() {
            resultElement.value = Number(numOneElement.value) + Number(numTwoElement.value);
            numOneElement.value = '';
            numTwoElement.value = '';
        },

        subtract: function() {
            resultElement.value = Number(numOneElement.value) - Number(numTwoElement.value);
            numOneElement.value = '';
            numTwoElement.value = '';
        }
    }
} 

let calculate = calculator();
calculate.init("#num1", "#num2", "#result");