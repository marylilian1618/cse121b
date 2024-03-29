/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);
});
/* Function Expression - Subtract Numbers */
function sub(number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = sub(subtractNumber1, subtractNumber2);
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
});
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}
const multiplyNumbers = () =>{
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
});

/* Open Function Use - Divide Numbers */
const divide = function(number1, number2) {
    return number1 / number2;
}
const divideNumbers = function(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

});
/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.getElementById('year').innerHTML = currentYear
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2!==0);
document.querySelector('#odds').innerHTML = oddNumbers
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number)=> sum +number)
/* Output Multiplied by 2 Array */
const multipliedNumbers = numbersArray.map(number => number * 2 );
document.getElementById('multiplied').innerHTML = multipliedNumbers
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = multipliedNumbers.reduce((sum, number)=> sum + number)