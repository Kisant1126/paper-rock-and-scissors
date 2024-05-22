//rock paper and scissors
let selection = [
  "images/piedra.png",
  "images/hoja-de-papel.png",
  "images/tijeras.png",
];

let choice;
let computer = document.querySelector(".computer");
let boton;
let randomChoice;
let recurso=document.querySelector(".recurso")
let playnew=document.querySelector("#continue")
let container=document.querySelector(".container")
let invisible=document.querySelector(".invisible")
let important=document.querySelector(".important")
let start=document.querySelector("#start")
let container2=document.querySelector("#container")
let invisible2=document.querySelector(".invisible2")
let playerwins=0
let computerwins=0
let champion=document.querySelector(".champion")
start.addEventListener("click",()=>{
  recurso.style.display="flex"
  start.style.display="none"
  container2.style.display="none"
  playerPuntuation=0
  computerPuntuation=0
})
function getComputerSelection() {
  randomChoice = Math.round(Math.random() * 2);
  choice = selection[randomChoice];
  computer.setAttribute("src", choice);
}
let buttons = document.querySelectorAll("button");
let player = document.querySelector(".player");
//eleccion en pantalla del jugador
buttons.forEach((btns) => {
  btns.addEventListener("click", () => {
    if (btns.id === "piedra") {
      player.setAttribute("src", "images/piedra.png");
      boton = 0;
      computer.style.display="none"
      invisible.style.display="block"
      important.style.display="none"
      getComputerSelection()
    } else if (btns.id === "papel") {
      player.setAttribute("src", "images/hoja-de-papel.png");
      boton = 1;
      computer.style.display="none"
      getComputerSelection()
      invisible.style.display="block"
      important.style.display="none"  
    } else if (btns.id === "tijera") {
      player.setAttribute("src", "images/tijeras.png");
      boton = 2;
      computer.style.display="none"
      getComputerSelection()
      invisible.style.display="block"
      important.style.display="none"
     
    } else if (btns.id === "playround") {
        win_lose()
        computer.style.display=""
    }
  });
});
//como saber si se gana o se pierde
let playerPuntuation=0
let computerPuntuation=0
function verification(){
  invisible2.style.display="block"
  invisible2.textContent=`puntuation: player: ${playerPuntuation}- computer:${computerPuntuation} `
  if(playerPuntuation>4){
    important.textContent="player Wins"
    recurso.style.display="none"
    container2.style.display="flex"
    start.style.display="block"
    playnew.style.display="none"
    invisible2.style.display="none"
    invisible.style.display="none"
    playerwins++
    champion.textContent=`Wins player:${playerwins} - Wins computer:${computerwins}`
  }else if(computerPuntuation>4){
    important.textContent="computer wins"
    recurso.style.display="none"
    container2.style.display="flex"
    start.style.display="block"
    playnew.style.display="none"
    invisible2.style.display="none"
    invisible.style.display="none"
    computerwins++
    champion.textContent=`Wins player:${playerwins} - Wins computer:${computerwins}`
  }
}
function win_lose() {
  if (
    (boton == 0 && randomChoice == 2) ||
    (boton == 1 && randomChoice == 0) ||
    (boton == 2 && randomChoice == 1)
  ) {
    console.log("you win"),
    recurso.style.display="none"
    playnew.style.display="block"
    container.style.cssText="align-items:center;justify-content:center;";
    playerPuntuation++ 
  } else if (
    (boton == 0 && randomChoice == 1) ||
    (boton == 1 && randomChoice == 2) ||
    (boton == 2 && randomChoice == 0)
  ) {
    console.log("you lose"),
    recurso.style.display="none"
    playnew.style.display="block"
    container.style.cssText="align-items:center;justify-content:center;"
    computerPuntuation++
  }else if(    
  (boton == 0 && randomChoice == 0) ||
  (boton == 1 && randomChoice == 1) ||
  (boton == 2 && randomChoice == 2))
    {
    console.log("is a tie")
    recurso.style.display="none"
    playnew.style.display="block"
    container.style.cssText="align-items:center;justify-content:center;"
    computerPuntuation
    playerPuntuation
  }}
  //para jugar una ronda nueva
  playnew.addEventListener("click",()=>{
    playnew.style.display="none"
    recurso.style.display="flex"
    invisible.style.display="none"
    important.style.display="block"
    boton=4
    verification()
  })