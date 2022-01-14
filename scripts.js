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


const button = document.querySelectorAll("button");
const results = document.querySelector(".results");

// Counter for both side
let counterPlayer = 0;
let counterComputer = 0;

button.forEach((button) => {
    
    button.addEventListener('click', () => {
        result = playRound(button.id, computerPlay());
        if (result === "You win!") counterPlayer += 1;
        else if (result === "You lose") counterComputer += 1;
        if (counterPlayer === 5 || counterComputer === 5) {
            counterPlayer = 0;
            counterComputer = 0;
            results.textContent = result;
        }
        else {  
            results.textContent = `|| ${result}  || Player Score: ${counterPlayer}, Computer Score: ${counterComputer}`; 
        }    
    });
});


