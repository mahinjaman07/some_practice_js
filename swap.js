let number1 = 56;
let number2 = 80;
console.log(number1,number2);
[number1,number2] = [number2,number1];
console.log(number1,number2);

let temp = number1;
number1 = number2;
number2 = temp;
console.log(number1,number2);