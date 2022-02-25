function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let option = options[Math.floor(Math.random() * options.length)];
    return option;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Enter Rock Paper or Scissors:');
    playerSelection = playerSelection.toLowerCase();

    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'player';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'player';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'player';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        return 'computer';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        return 'computer';
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return 'computer';
    } 

}

//console.log(typeof(playRound()));

 function game() {
    let userCount = 0;
    let computerCount = 0;
    let gameOver = playRound()
    for (let i = 0; i < 5; i++) {
        playRound()
        if (gameOver === 'player') {
            userCount++;
            console.log('User ' + userCount + ' - ' + computerCount + ' Computer')
        } else if (gameOver === 'computer'){
            computerCount++;
            console.log('User ' + userCount + ' - ' + computerCount + ' Computer')
        } else if (gameOver === 'draw') {
            console.log('User ' + userCount + ' - ' + computerCount + ' Computer')
        }
    
     }
    if (userCount > computerCount) {
        console.log('The winner is User: ' + userCount + ' - ' + computerCount)
    } else if (userCount < computerCount) {
        console.log('The winner is Computer: ' + userCount + ' - ' + computerCount)
    } else {
        console.log('The game is Draw: ' + userCount + ' - ' + computerCount)
    }
}
console.log(game());
