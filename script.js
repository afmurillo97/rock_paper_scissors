// This function return the result of the computer.
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let optionComputer = options[Math.floor(Math.random() * options.length)];
    return optionComputer;
}


// This function return an string with the winner of one single round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let winnerRound = '';
    if (playerSelection === computerSelection) {
        winnerRound = 'draw';
        return winnerRound;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
                playerSelection === 'scissors' && computerSelection === 'paper' || 
                playerSelection === 'paper' && computerSelection === 'rock'){
                winnerRound = 'player';
                return winnerRound;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
                computerSelection === 'scissors' && playerSelection === 'paper' ||
                computerSelection === 'paper' && playerSelection === 'rock'){
                winnerRound = 'computer';
                return winnerRound;
    } 

}
// select a nodes list with all tags 'buttons'
const playerOptions = document.querySelectorAll('button');
// before add an event listener of each button the counters begin in 0
let playerCount = 0;
let computerCount = 0;

playerOptions.forEach((button) => {
    // and for each one to add a 'click' listener
    button.addEventListener('click', function(e){
        optionPlayer = button.id;
        let winner = playRound(optionPlayer, );
        if (winner === 'player') {
            playerCount++;
            console.log('you win!!! Player: ' + playerCount + '-' + computerCount + ' Computer');
        } else if (winner === 'computer') {
            computerCount++;
            console.log('you lose!!! Player: ' + playerCount + '-' + computerCount + ' Computer');
        } else {
            console.log('Draw!!! Player: ' + playerCount + '-' + computerCount + ' Computer');
        }
        // after to play 5 games, reset the counters
        if (playerCount === 5) {
            console.log('THE WINNER IS PLAYER');
            playerCount = 0;
            computerCount = 0;
        } else if (computerCount === 5) {
            console.log('THE WINNER IS COMPUTER');
            playerCount = 0;
            computerCount = 0;
        };
    }); 
});
