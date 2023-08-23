function reverse(words) {
    let getResult = '';
    for (let i = words.length -1; i >= 0; i--) {
        let element = words[i];
        getResult = getResult + element; 
    }
    return getResult;
}

let string = 'I am a bad boy';
let result = reverse(string);
console.log(result);