'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();

}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerMove(move) {
    move =  move || getInput();
    return move;
}

function getComputerMove(move) {
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if ((playerMove === 'rock' && computerMove === 'scissors') || 
            (playerMove === 'scissors' && computerMove === 'paper') || 
            (playerMove === 'paper' && computerMove === 'rock')) {
        winner = 'player';
    } else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var round = 0;

    while (playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
            if (winner === 'player') {
                playerWins +=1;
                round +=1;
                console.log("Round: " + round + " Player: " + playerMove +". Computer: " + computerMove + ". Player Wins. Score is " + "Player: " + playerWins + ", Computer " + computerWins);
            } else if (winner === 'computer') {
                computerWins +=1;
                round +=1;
                console.log("Round: " + round + " Player: " + playerMove +". Computer: " + computerMove + ". Computer Wins. Score is " + "Player: " + playerWins + ", Computer " + computerWins);
            } else {
                round +=1;
                console.log("Round: " + round + " It's a tie. Score remains PLayer: " + playerWins + " Computer: " + computerWins + ".");
            }
    }
    return [playerWins, computerWins];
}

playToFive();

