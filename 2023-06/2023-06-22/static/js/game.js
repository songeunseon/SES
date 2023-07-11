document.addEventListener("DOMContentLoaded", function() {
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    const currentNumberElement = document.getElementById("currentNumber");
    const takeOneButton = document.getElementById("takeOne");
    const takeTwoButton = document.getElementById("takeTwo");
    const takeThreeButton = document.getElementById("takeThree");

    let currentNumber = 0;
    let currentPlayer = player1;

    function switchPlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    function updateGameStatus() {
        currentNumberElement.textContent = `Current Number: ${currentNumber}`;
        if (currentNumber >= 31) {
            if (currentPlayer === player1) {
                alert("You Win!");
            } else {
                alert("Computer Wins!");
            }
            resetGame();
        } else {
            if (currentPlayer === player2) {
                computerMove();
            }
        }
    }

    function resetGame() {
        currentNumber = 0;
        currentPlayer = player1;
        updateGameStatus();
    }

    function computerMove() {
        let takeNumber = 1;
        if (currentNumber % 4 === 0) {
            takeNumber = Math.floor(Math.random() * 3) + 1;
        } else {
            takeNumber = (4 - (currentNumber % 4));
        }
        currentNumber += takeNumber;
        switchPlayer();
        updateGameStatus();
    }

    takeOneButton.addEventListener("click", function() {
        currentNumber += 1;
        switchPlayer();
        updateGameStatus();
    });

    takeTwoButton.addEventListener("click", function() {
        currentNumber += 2;
        switchPlayer();
        updateGameStatus();
    });

    takeThreeButton.addEventListener("click", function() {
        currentNumber += 3;
        switchPlayer();
        updateGameStatus();
    });

    resetGame();
});
