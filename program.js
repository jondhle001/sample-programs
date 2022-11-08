const prompt = require("prompt-sync")();

const guess = parseInt(prompt('Guess a number between 1 to 10:'));
let number = Math.floor(Math.random() * 10)
console.log("number you entered ",guess)
console.log("correct value",number)
if (number == guess) {
    console.log('you lost number matched');
}
else if (number !== guess) {
    console.log(`you loose number not matched`);
    
}

