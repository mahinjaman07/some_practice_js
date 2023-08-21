let number = 2.4563;
let num = Math.ceil(number);
console.log(num);


let number1 = 2.4563;
let num1 = Math.floor(number1);
console.log(num1);

let number2 = 2.4563;
let num2 = Math.round(number2);
console.log(num2);

let number3 = 2.4563;
let num3 = Math.random(number3);
console.log(num3);

let sum = 24;
let sum1 = 75;
let gap =Math.abs(sum - sum1);
if (gap < 5){
    console.log('We are friend');
}

else{
    console.log('We get distance');
}



for (let i = 0; i < 6; i++) {
    let sokka = Math.round(Math.random()*6);
    console.log(sokka);
    
}