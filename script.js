// This function return the result of the computer.
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let option = options[Math.floor(Math.random() * options.length)];
    return option;
}
// First result
//computerPlay('');

// This function return an string with the winner of one single round
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Enter Rock Paper or Scissors:').toLowerCase();

    computerSelection = computerPlay('');
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
                winnerRound = 'computer'
                return winnerRound;
    } 

}
//Second result
console.log(playRound()); 


// This function plays 5 rounds, shows the score and choose a winner
//  function game() {
//     let playerCount = 0;
//     let computerCount = 0;
//     for (i = 1 ; i <= 5 ; i++) {
//         winner = playRound('');
//         if (winner === 'player') {
//             playerCount++;
//             console.log('You won !!! Player ' + playerCount + ' - ' + computerCount + ' Computer');
//         } else if (winner === 'computer') {
//             computerCount++;
//             console.log('You lose !!! Player ' + playerCount + ' - ' + computerCount + ' Computer');
//         } else {
//             console.log('Draw !!! Player ' + playerCount + ' - ' + computerCount + ' Computer');
//         }
//     }
//     if (playerCount > computerCount) {
//         console.log('The winner is Player: ' + playerCount + ' - ' + computerCount);
//     } else if (playerCount < computerCount) {
//         console.log('The winner is Computer: ' + playerCount + ' - ' + computerCount);
//     } else if (playerCount === computerCount) {
//         console.log('The game is Draw: ' + playerCount + ' - ' + computerCount);
//     }
// }
// Third result
//game();
 