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
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20; // score variable initiall sets the value to 20 at start of //application and decreases the value by one each uses enters a number that is //not equal to secret number

//highscore
let highscore = 0;

//Selecting the class "check" (of button in html) an adding addEventListerner method with function created as "click"- which displays what value selected by user in check box.

document.querySelector('.check').addEventListener('click', function() {
    // console.log("you have selected : ",document.querySelector('.guess').value);

    //storing the value of "guess class" into a variable and coverting it to a number
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    //checking the validation of user input

    //when there is no input
    if(!guess) {
        document.querySelector('.message').textContent ="⛔ No Number!";
   //when there is input
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "✔ ✌ Correct Number";
        // //displaying the correct number once the user wins the game
        // document.querySelector('.number').textContent = secretNumber;
        // //changing the background color once the user wins
        // document.querySelector('body').style.backgroundColor ='#06b347'
        // document.querySelection('.number').style.width='30rem'; 

        // document.querySelector('.message').textContent = '🎉 Correct Number!';
   // displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


      if (score > highscore) {
      highscore = score;
      console.log("highscore", highscore)
      document.querySelector('.highscore').textContent = highscore;
    }
    } else if(guess > secretNumber) {

        if(score > 1){ 
              document.querySelector('.message').textContent = 'Too high! Try again';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' 💥You lost the game! Play Again'; 
             document.querySelector('.score').textContent = 0;
        }
      
    } else if (guess < secretNumber) {
        if(score > 1){ 
              document.querySelector('.message').textContent = 'Too Low! Try again';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' 💥You lost the game! Play Again'; 
             document.querySelector('.score').textContent = 0;
        }
    }

 
});

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor='rgb(86, 117, 219)';
    document.querySelector('.number').style.width='15rem';

})

