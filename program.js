// program to find the factorial of a number
const prompt = require("prompt-sync")();

// take input from the user
const guess = parseInt(prompt('Guess a number between 1 to 10:'));
let number = Math.floor(Math.random() * 10)
console.log("number you entered ",guess)
console.log("correct number",number)
// checking if number is negative
if (number == guess) {
    console.log('you win number matched');
}
// if number is 0
else if (number !== guess) {
    console.log(`you loose number not matched`);
}

