function blockCards(){
  for (let i = 0; i < array.length; i++) {
    let cBlock = document.getElementById(i);
    cBlock.innerHTML = `<img src="./images/weaponsMemory/${array[i]}.jpg">`;
    cBlock.disable = true;
  }
}

function countT(){
  countDownT = setInterval(()=>{
    timer--;
    viewTime.innerHTML = "Tiempo: " + timer + " segundos";

    if(timer === 0){
      clearInterval(countDownT);
      blockCards();
      loseAudio.play();
    }
  },1000);
}

function destapar(id){

  if(time === false){
    countT();
    time = true;
  }

  cardsUn++;

  if (cardsUn === 1) {
    card1 = document.getElementById(id);
    firstResult = array[id];
    card1.innerHTML = `<img src="./images/weaponsMemory/${firstResult}.jpg">`;

    clickAudio.play();

    card1.disable = true;
  }
  else if(cardsUn === 2){
    card2 = document.getElementById(id);
    secondResult = array[id];
    card2.innerHTML = `<img src="./images/weaponsMemory/${secondResult}.jpg">`;

    card2.disable = true;

    moves++;
    viewMoves.innerHTML = "Movimientos: " + moves

    if (firstResult === secondResult) {
      cardsUn = 0;
      hits++;
      viewHits.innerHTML = "Aciertos: " + hits;

      rightAudio.play();

      if (hits === 15) {
        clearInterval(countDownT);
        winAudio.play();
      }
    }
    else {
      setTimeout(()=>{
        card1.innerHTML = " ";
        card2.innerHTML = " ";

        wrongAudio.play();

        card1.disable = false;
        card2.disable = false;

        cardsUn = 0;
      },700)
    }
  }
}

let array = [1,6,11,2,7,12,3,8,13,4,9,14,5,10,15,6,11,7,12,8,13,9,14,10,15,1,2,3,4,5];
let cardsUn = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let hits = 0;
let time = false;
let timer = 60;
let countDownT = null;

let clickAudio = new Audio("./sounds/click.wav");
let loseAudio = new Audio("./sounds/lose.wav");
let rightAudio = new Audio("./sounds/right.wav");
let winAudio = new Audio("./sounds/win.mp3");
let wrongAudio = new Audio("./sounds/wrong.wav");

array = array.sort(()=>{return Math.random()-0.5});

let viewMoves = document.getElementById("movimientos");
let viewHits = document.getElementById("aciertos");
let viewTime = document.getElementById("tiempo");
