function computerPlay(){
    options = [
        "rock",
        "paper",
        "scissors"
    ]

    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];
    return randomOption;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a tie!";
    } else if ((playerSelection.toLowerCase() === "rock"  && computerSelection.toLowerCase() === "scissors") || 
    (playerSelection.toLowerCase() === "scissors"  && computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "paper"  && computerSelection.toLowerCase() === "rock"))
    {
        return "You win!";
    }
    return "You lose";    
}

function game() {
    for (let i = 0; i < 5; i++){
        let playerChoice = window.prompt("Pick rock, paper or scissors");
        computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice))
    }
}

