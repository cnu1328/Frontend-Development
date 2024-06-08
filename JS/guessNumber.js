

let randomNumber = Math.floor(Math.random()*100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".loworHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");


let guessCount = 1;
let resetButton;



function checkGuess() {
    const userGuess = Number(guessField.value);

    if(guessCount === 1) {
        guesses.textContent = "Previous Guesses : ";
    } 

    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You won the game!";
        lastResult.style.backgroundColor = "green"; 
        lastResult.style.color = "white";
        lowOrHi.textContent = "";
        setGameOver();
    } else if(guessCount == 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!"
        lastResult.style.backgroundColor = "red";

        if(userGuess < randomNumber) {
            lowOrHi.textContent = "Last Guess was too low!";
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = "Last Guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start New Game";
    resetButton.setAttribute("class", "btn btn-slide move-middle");
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");

    for(const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disbled = false;
    guessField.vlaue = "";
    

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;

    location.reload();
    
}





