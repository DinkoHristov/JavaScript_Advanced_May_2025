function calc() {
    let num1InputElementValue = Number(document.getElementById('num1').value);
    let num2InputElementValue = Number(document.getElementById('num2').value);
    let sumElement = document.getElementById('sum');

    sumElement.value = num1InputElementValue + num2InputElementValue;
}