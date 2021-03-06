let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoise, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoise_div = document.getElementById(userChoise);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} beats ${convertToWord (computerChoice)} ${smallCompWord}. You Win! 🎉`;
    userChoise_div.classList.add('green-glow');
    setTimeout(function(){userChoise_div.classList.remove('green-glow')},500);
}



function loose(userChoise, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoise_div = document.getElementById(userChoise);
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} looses to ${convertToWord (computerChoice)} ${smallCompWord}. You lost..`;
    userChoise_div.classList.add('red-glow');
    setTimeout(function(){userChoise_div.classList.remove('red-glow')},500);
}

function draw(userChoise, computerChoice) {
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoise_div = document.getElementById(userChoise);
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} equals ${convertToWord (computerChoice)} ${smallCompWord}. Its a draw`;
    userChoise_div.classList.add('gray-glow');
    setTimeout(function(){userChoise_div.classList.remove('gray-glow')},500);
}


function game(userChoise) {
    const computerChoice = getComputerChoice();
    switch (userChoise + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoise, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoise, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoise, computerChoice);  
            break;
    }
}



function main() {
    rock_div.addEventListener('click',function() {
        game("r");
    })

    paper_div.addEventListener('click',function() {
        game("p");  
    })

    scissors_div.addEventListener('click',function() {
        game("s");
    })
}

main();