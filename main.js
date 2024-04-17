//rock paper and scisors
function getComputerChoice(){
    let RandomChoice=Math.round(Math.random()*3);
    let Choice;
    if (RandomChoice==1 || RandomChoice==0){
        return Choice="paper";
    }else if(RandomChoice==2){
       return Choice="scissors";
    }else if(RandomChoice ==3){
        return Choice="rock";
    }
}

let PlayerSelection;
function Verification2()
{if(PlayerSelection=="scissors"){
    PlayerSelection=1
}else if(PlayerSelection=="paper"){
    PlayerSelection=2
}else if(PlayerSelection=="rock"){
    PlayerSelection=3
}
}

function PlayRound(PlayerSelection,ComputerSelection){
    let result;
    if(ComputerSelection=="paper" && PlayerSelection==3){
        return console.log("You Lose! Paper beats Rock"),
        result=-1;
    }else if(ComputerSelection=="paper" && PlayerSelection==1){
        return console.log("You Win! Scissors beats paper"),
        result=1;
    }else if(ComputerSelection=="rock" && PlayerSelection==1){
        return console.log("You Lose! Rock beats Scissors"),
        result=-1;
    }else if(ComputerSelection=="rock" && PlayerSelection==2){
        return console.log("You Win ! Paper beats Rock"),
        result=1;
    }else if(ComputerSelection=="scissors" && PlayerSelection==2){
        return console.log("You Lose! Scissors beats Paper"),
        result=-1;
    }else if(ComputerSelection=="scissors" && PlayerSelection==3){
        return console.log("You Win! Rock beats Scissors"),
        result=1;
    }else if(ComputerSelection=="paper" && PlayerSelection==2){
        return console.log("Its a tie Paper and Paper"),
        result=0;
    }else if(ComputerSelection=="rock" && PlayerSelection==3){
        return console.log("Its a tie Rock and Rock"),
        result=0;
    }else if(ComputerSelection=="scissors" && PlayerSelection==1){
        return console.log("Its a tie Scissors and Scissors"),
        result=0;
    }else{
        return console.log("you didn't write what was indicated"),
        result=-1;
    }
}

let PlayerPuntuation=0;
let ComputerPuntuation=0;
function Puntuation(PlayRound){
    if(PlayRound==1){
        return PlayerPuntuation=++PlayerPuntuation;
    }else if(PlayRound==-1){
        return ComputerPuntuation=++ComputerPuntuation;
    }else if(PlayRound==0){
        return ComputerPuntuation=ComputerPuntuation,
        PlayerPuntuation=PlayerPuntuation;
    }   
}

function result(){
    if(ComputerPuntuation>PlayerPuntuation){
        console.log("Computer wins")
    }else if(ComputerPuntuation<PlayerPuntuation){
        console.log("Player wins")
    }else{
        console.log("Its a tie")
    }
}

function PlayGame(){
    PlayerSelection=prompt("give me your choice between rock paper and scissors");
    let Verification =PlayerSelection.toLowerCase();
      PlayerSelection=Verification;
      Verification2();
    let ComputerSelection =getComputerChoice();
    Puntuation(PlayRound(PlayerSelection,ComputerSelection));
    console.log (`computer:${ComputerPuntuation}-player:${PlayerPuntuation}`)
}

PlayGame()
PlayGame()
PlayGame()
PlayGame()
PlayGame()
result()