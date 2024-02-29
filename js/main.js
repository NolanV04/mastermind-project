// Define variables
const codeWords = ["function", "variable", "loop", "array", "object", "method", "parameter", "argument", "return", "string", "number", "boolean", "null", "undefined", "if", "else", "for", "while", "switch", "case", "break", "continue", "const", "let", "var"];
let rightAnswer;
let guesses = [];
let wrongGuessCount = 0;

// Define functions

// Function to initialize the game
function initializeGame() {
    const rightAnswerIdx = Math.floor(Math.random() * codeWords.length);
    rightAnswer = codeWords[rightAnswerIdx];
    console.log(rightAnswer);
}

// Function to check the user's guess
function checkGuess() {
    console.log("Current Right Answer:", rightAnswer);
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.trim().toLowerCase();

    if (guess === rightAnswer) {
        displayResult("Correct!", "green");
    } else {
        wrongGuessCount++;
        if (wrongGuessCount >= 5) {
            displayResult("Wrong! The correct answer is: " + rightAnswer, "red");
        } else {
            displayResult("Wrong!", "red");
        }
    }

    guesses.push(guess);
    displayPreviousGuesses();
    guessInput.value = "";
}

// Function to display the result message
function displayResult(message, color) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.style.color = color;
}

// Function to display previous guesses
function displayPreviousGuesses() {
    const previousGuessesDiv = document.getElementById('previousGuesses');
    previousGuessesDiv.innerHTML = "<h3>Previous Guesses:</h3>";
    guesses.forEach(guess => {
        const guessPara = document.createElement('p');
        guessPara.textContent = guess;
        previousGuessesDiv.appendChild(guessPara);
    });
}

// Initialize the game when the page loads
initializeGame();









// let guesses = [];
// const codeWords = ["function", "variable", "loop", "array", "object", "method", "parameter", "argument", "return", "string", "number", "boolean", "null", "undefined", "if", "else", "for", "while", "switch", "case", "break", "continue", "const", "let", "var"];
// const answersToCodeWords = [];

// // Generate random code words
// for (let i = 0; i < 25; i++) {
//     const idx = Math.floor(Math.random() * codeWords.length);
//     answersToCodeWords.push(codeWords[idx]);
// }

// console.log(answersToCodeWords);

// // Select a random right answer
// const rightAnswerIdx = Math.floor(Math.random() * 25);
// const rightAnswer = answersToCodeWords[rightAnswerIdx];

// console.log(rightAnswer);

// function checkGuess() {
//     var guess = document.getElementById("guessInput").value.trim().toLowerCase(); // Normalize input
//     const resultDiv = document.getElementById('result');

// console.log("Guess",guess);
// console.log("Right Answer", rightAnswer.toLowerCase())

//     if (guess === rightAnswer.toLowerCase()) { // Normalize rightAnswer and compare
//         resultDiv.textContent = "Correct!";
//         resultDiv.style.color = "green";
//     } else {
//         resultDiv.textContent = "Wrong!";
//         resultDiv.style.color = "red";
//     }
// }

//     let guesses = []
    
// const codeWords = ["function", "variable", "loop", "array", "object", "method", "parameter", "argument", "return", "string", "number", "boolean", "null", "undefined", "if", "else", "for", "while", "switch", "case", "break", "continue", "const", "let", "var"];
// const answersToCodeWords = [];

//  for (let i = 0; i < 25; i++) {
//     const idx = Math.floor(Math.random() * codeWords.length);
//     answersToCodeWords.push(codeWords[idx]);
//  }

// console.log(answersToCodeWords)

// const rightAnswerIdx = Math.floor(Math.random() * 25);
// const rightAnswer = answersToCodeWords[rightAnswerIdx];

// console.log(rightAnswer)


// function Submit(){
//     var guess = document.getElementById("box").value;
    
//     if(guess === rightAnswer){
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }
// }


// function guessWord(){
//     let guess = document.getElementById("box");
//     if (guess !== rightAnswer)
//         alert("Wrong");
//     return;
// }

// let newGuess = ""
// let correctGuess = true;
// if (guesses.is(rightAnswer) {
//     alert("Correct!")
// }


// let guessing = document.getElementById('textbox').innerText("congrats")
//     guessing = codeWords
//     if (guessing !== rightAnswer) {
//      window.alert("Youre wrong!");
//      } else if(guessing === rightAnswer){
//      window.alert("Youre right!");
//     } else {
//         trys <= 5
//         window.alert("Keep trying!")
//     };
    

// let guess = rightGuess
// if (rightGuess === guess){
// message = "Youre right"
// } else {
//     (rightGuess !== guess)
//     message = "Youre wrong"
// }

// console.log(message)

// document.getElementById('button')
// button.addEventListener('click', button)

// function button(){
//     onclick.button = message = "bomb defused!"
// }
// function createTextBox() {
//     // Code to generate a text box with a button
//     const textBox = document.createElement("input");
//     textBox.type = "text";
//     const submitButton = document.createElement("button");
//     submitButton.textContent = "Submit";
//     // Add event listener for button click
//     submitButton.addEventListener("click", function() {
//         // Code to handle submit button click
//     });
//     // Append elements to the document
//     document.body.appendChild(textBox);
//     document.body.appendChild(submitButton);
// }

// createTextBox(rightGuess);

// function buttonClick(){
// alert('Bomb Defused!')
// }

// button.addEventListener('click', buttonClick)

// const text = document.getElementById("Guess")
// text.appendChild(button)
// var codeWord = ["variable", "array","string","function", "html", "javascript", "42"]
// var codeWords = Math.floor(Math.random() * codeWords.length);
// function enterGuess(){
//     if (button.val === enterGuess);
//     return true;
// }

// const textBox = document.querySelector("Guess")
// textBox.addEventListener("click",enterGuess)

// let enter = document.getElementById('Enter');
// enter.addEventListener('click', onclick);
// console.log("enter clicked")