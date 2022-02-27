'use strict';

/*//selecting an element
console.log(document.querySelector('.message').textContent);

//changing the text in the selected element
document.querySelector('.message').textContent = 'Correct Number! ✌'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//to get value from the input element
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)
*/



//creating the secret number once at the start of the application and storing that in "number" called through document.querySelector method
// Math.random method between 0 -20 - Math.random()*20
const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20; // score variable initiall sets the value to 20 at start of application and decreases the value by one each uses enters a number that is not equal to secret number
document.querySelector('.number').textContent = secretNumber;



//Selecting the class "check" (of button in html) an adding addEventListerner method with function created as "click"- which displays what value selected by user in check box.

document.querySelector('.check').addEventListener('click', function() {
    // console.log("you have selected : ",document.querySelector('.guess').value);

    //storing the value of "guess class" into a variable and coverting it to a number
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    //checking the validation of user input

    if(!guess) {
        document.querySelector('.message').textContent ="⛔ No Number!";
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "✔ ✌ Correct Number";
    } else if(guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high! Try again';
        score = score - 1;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low! Try again';
        score--;
        document.querySelector('.score').textContent = score;
    }

 
});