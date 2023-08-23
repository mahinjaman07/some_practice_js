function wordReverse(text) {
    let word = text.split(' ');
    let reverseWords = [];
    for (let i = word.length -1; i >= 0; i--) {
        const element = word[i];
        reverseWords.push(element);
        
    }
    let joined = reverseWords.join(' ');
    return joined;
}

let myString = 'I Am A Good Boy';
let reverseWord = wordReverse(myString);
console.log(reverseWord);