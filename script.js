let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attempts = document.getElementById("attempts");

    if (!guess) {
        message.textContent = "❌ Please enter a number!";
        return;
    }

    count++;

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        attempts.textContent = `Attempts: ${count}`;
    } 
    else if (guess > randomNumber) {
        message.textContent = "📉 Too High!";
    } 
    else {
        message.textContent = "📈 Too Low!";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    count = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").value = "";
}
