//Задание 1
{
let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 10) break;
}
}

//Задание 2 
{
let arr = [1, 5, 4, 10, 0, 3];
let index = arr.indexOf(4);
console.log(index);
}

//Задание 3 
{
let arr = [1, 3, 5, 10, 20];
let result = arr.join(' ');
console.log(result);
}

//Задание 4 
{
let arr = [];
for (let i = 0; i < 3; i++) {
    let multiArr = [];
    for (let j = 0; j < 3; j++) {
        multiArr.push(1);
    }
arr.push(multiArr);
}
console.log(arr);
}

//Задание 5 
{
let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);
}

//Задание 6 
{
let arr = [9, 8, 7, 'a', 6, 5];
let newArr = arr.sort();
let result = newArr.filter(item => item !== 'a');
console.log(result);
}

//Задание 7 
{
let arr = [9, 8, 7, 6, 5];
let userNumber = prompt("Угадай число");
let result = arr.includes(userNumber);
if (result == true) {
    alert("Угадал");
    }
    else {
    alert("Не угадал");
}
}

//Задание 8 
{
let str = 'abcdef';
let result = str.split('').reverse().join('');
console.log(result); 
}

//Задание 9 
{
let arr = [[1, 2, 3],[4, 5, 6]];
let result = [...arr[0], ...arr[1]];
console.log(result);
}

//Задание 10 
{
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
    }
}

//Задание 11 
{
let arr = [];
function squareArr(arr) {
    return arr.map(num => num ** 2);
}
console.log(squareArr([]));
}

//Задание 12 
{
let arr = [];
function lengthsArr(arr) {
    return arr.map(str => str.length);
}
console.log(lengthsArr([]));
}

//Задание 13 
{
let arr = [];
function negativeArr(arr) {
    return arr.filter(num => num < 0);
}
console.log(negativeArr([])); 
}

//Задание 14 
{
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.random() * 10);
}
let evenArr = arr.filter(num => num % 2 === 0);
console.log("Исходный массив:", arr);
console.log("Массив с четными значениями:", evenArr);
}

//Задание 15 
{
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.random() * 6);
}
let newArr = arr.reduce((sum, num) => sum + num, 0);
let result = newArr / arr.length;
console.log(result);
}