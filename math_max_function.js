let mahinNumber = 89;
let rifatNumber = 99;
let rahimNumber = 108;


function maxNumber(number1,number2,number3) {
    if (number1 > number2 && number1 > number3) {
        console.log('Number1 Is The Large Number');
    }

    else if (number2 > number1 && number2 > number3) {
        console.log('Number2 Is The Large Number');
    }
    else{
        console.log('Number3 Is The Large Number');
    }
}

maxNumber(mahinNumber,rifatNumber,rahimNumber);