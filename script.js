// This function return the result of the computer.
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let optionComputer = options[Math.floor(Math.random() * options.length)];
    return optionComputer;
}
// First result
//computerPlay('');

// This function return an string with the winner of one single round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay;
    let winnerRound = '';
    if (playerSelection === computerSelection) {
        winnerRound = 'draw';
        return winnerRound;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
                playerSelection === 'scissors' && computerSelection === 'paper' || 
                playerSelection === 'paper' && computerSelection === 'rock'){
                winnerRound = 'player';
                playerCount++;
                return winnerRound;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
                computerSelection === 'scissors' && playerSelection === 'paper' ||
                computerSelection === 'paper' && playerSelection === 'rock'){
                winnerRound = 'computer';
                computerCount++;
                return winnerRound;
    } 

}

// This function plays 5 rounds, shows the score and choose a winner
// function game() {
    

//Second result
//console.log(playRound()); 

// function playerPlay() {
//     return optionPlayer;
// }
const playerOptions = document.querySelectorAll('button');
// the .forEach method to iterate through each button
playerOptions.forEach((button) => {
// and for each one to add a 'click' listener
    button.addEventListener('click', function(e){
        playerPlay = button.id;
        winner = playRound();
        let playerCount = 0;
        let computerCount = 0;
        // if (winner === 'player') {
        //     playerCount++;
        //     console.log('You won !!! Player ' + playerCount + ' - ' + computerCount + ' Computer');
        // } else if (winner === 'computer') {
        //     computerCount++;
        //     console.log('You lose !!! Player ' + playerCount + ' - ' + computerCount + ' Computer');
        // } else {
        //     console.log('Draw !!! Player ' + playerCount + ' - ' + computerCount + ' Computer');
        // }
    });

});
