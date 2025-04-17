let randomNumber = Math.floor(Math.random() * 5) + 1;
let userGuess = prompt("Guess a number between 1 and 5");
if (userGuess == randomNumber){
    alert("You guessed right!");
}
else{
    alert("Wrong userGuess. The number was " + randomNumber);
}