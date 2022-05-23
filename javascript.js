function computerPlay(){
    const choice = ["rock", "paper", "scissors"];
    const pick = Math.floor(Math.random() * 2)
    return choice[pick];
}

function playerSelection(){
    let pick = prompt("Please enter Rock , Paper or Scissors");

    return pick.toLowerCase();
}
let playerWins = 0
let computerWins = 0

function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "It's a Draw! Rock VS Rock"
    }
    else if (playerSelection === "rock" && computerSelection ==="paper"){
        computerWins += 1;
        return "You have Lost! paper beats Rock"
    }
    else if (playerSelection ==="rock" && computerSelection ==="scissors"){
        playerWins += 1;
        return"You have won! rock beats scissors"
    }
    else if (playerSelection ==="paper" && computerSelection === "rock"){
        computerWins += 1;
        return"You have lost! paper loses to rock"
    }
    else if (playerSelection ==="paper" && computerSelection ==="paper"){
        return"It's a draw! paper VS paper"
    }
    else if (playerSelection ==="paper" && computerSelection ==="scissors"){
        computerWins += 1;
        return"You have lost! Paper loses to scissors"
    }
    else if (playerSelection ==="scissors" && computerSelection ==="rock"){
        computerWins += 1;
        return "You have lost! Scissors lose to rock"
    }
    else if (playerSelection ==="scissors" && computerSelection ==="paper"){
        playerWins += 1;
        return "You have won! Scissors beat paper"
    }
    else if (playerSelection ==="scissors" && computerSelection ==="scissors"){
        return " It's a draw! scissors VS scissors"
    }
}
function game(){
    for (let i = 0; i< 5; i++){
        const computerSelection = computerPlay();
        const value = playerSelection()
        console.log(playRound(value,computerSelection));
    }
}

console.log(game());