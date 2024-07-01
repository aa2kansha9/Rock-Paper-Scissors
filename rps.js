let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompchoice = () =>{
    let options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
};
const drawGame = ()=>{
    msg.innerText= "Game was Draw";
    msg.style.backgroundColor= "#A3320B"
}
const showWinner = (userWin,userChoice, compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = `You Won :) your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#d00000";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText= `You Lost :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="#370617"
    }
}
const playGame = (userChoice) =>{
    //generate computer choice 
    const compChoice  = genCompchoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === " rock"){
            userWin = compChoice==="paper"? false: true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) =>{
        choice.addEventListener("click" , ()=>{
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
    });
});

