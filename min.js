function minInArray(numbers) {
    let sum = [];
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[i];
        if(element > sum){
            sum = element;
        }
    }
    return sum;
}

let heights = [167, 190, 120, 165, 137, 45, 15, 890];
let minNumber = minInArray(heights);
console.log(minNumber);