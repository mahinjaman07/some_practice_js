let mahinNumber = 89;
let rifatNumber = 99;
let rahimNumber = 108;


function maxNumber(number1,number2,number3) {
    if (number1 < number2 && number1 < number3) {
        console.log('Number1 Is The min Number',number1);
    }

    else if (number2 < number1 && number2 < number3) {
        console.log('Number2 Is The min Number',number2);
    }
    else{
        console.log('Number3 Is The min Number',number3);
    }
}

maxNumber(rifatNumber,mahinNumber,rahimNumber);