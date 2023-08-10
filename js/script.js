/*----- constants -----*/
  
/*----- app's state (variables) -----*/
let boardHoles = [];
let activePlayer;
let gameWinner;
  
/*----- cached element references -----*/
let messagecenter = document.getElementById("messagecenter");
let freshpage = document.getElementById("freshpage");
let messages = document.getElementById("messages");
let scorep1 = document.getElementById("p1score");
let scorep2 = document.getElementById("p2score");
let hole1 = document.getElementById("hole-1");
let hole2 = document.getElementById("hole-2");
let hole3 = document.getElementById("hole-3");
let hole4 = document.getElementById("hole-4");
let hole5 = document.getElementById("hole-5");
let hole6 = document.getElementById("hole-6");
let hole7 = document.getElementById("hole-7");
let hole8 = document.getElementById("hole-8");
let hole9 = document.getElementById("hole-9");
let hole10 = document.getElementById("hole-10");
let hole11 = document.getElementById("hole-11");
let hole12 = document.getElementById("hole-12");
let player1container = document.getElementById("player-1-container");
let player2container = document.getElementById("player-2-container");
let newgamebutton = document.getElementById("newgamebutton");

  
/*----- event listeners -----*/
let hole1Click = hole1.addEventListener('click', function(){
    playMancala(boardHoles,7);
    holeNumRend(boardHoles);
});
 
let hole2Click = hole2.addEventListener('click', function(){
    playMancala(boardHoles,8);
    holeNumRend(boardHoles);
});


let hole3Click = hole3.addEventListener('click', function(){
    playMancala(boardHoles,9);
    holeNumRend(boardHoles);
});


let hole4Click = hole4.addEventListener('click', function(){
    playMancala(boardHoles,10);
    holeNumRend(boardHoles);
});


let hole5Click = hole5.addEventListener('click', function(){
    playMancala(boardHoles,11);
    holeNumRend(boardHoles);
});


let hole6Click = hole6.addEventListener('click', function(){
    playMancala(boardHoles,12);
    holeNumRend(boardHoles);
});


let hole7Click = hole7.addEventListener('click', function(){
    playMancala(boardHoles,0);
    holeNumRend(boardHoles);
});


let hole8Click = hole8.addEventListener('click', function(){
    playMancala(boardHoles,1);
    holeNumRend(boardHoles);
});


let hole9Click = hole9.addEventListener('click', function(){
    playMancala(boardHoles,2);
    holeNumRend(boardHoles);
});

let hole10Click = hole10.addEventListener('click', function(){
    playMancala(boardHoles,3);
    holeNumRend(boardHoles);
});


let hole11Click = hole11.addEventListener('click', function(){
    playMancala(boardHoles,4);
    holeNumRend(boardHoles);
});


let hole12Click = hole12.addEventListener('click', function(){
    playMancala(boardHoles,5);
    holeNumRend(boardHoles);
});
 
let newgameClick = newgamebutton.addEventListener('click', function(){
cleanSlate();
holeNumRend(boardHoles);
mcClearNewGameMessage();
});

/*----- functions -----*/
// New Game
function cleanSlate() {
boardHoles = [4,4,4,4,4,4,0,4,4,4,4,4,4,0];
gameWinner = null;
turnReset();
player1Turn();
return boardHoles, gameWinner;
};

// Scoreboard
function keepingScore(x,y) {
    let scorep1 = x + scorep1;
    let scorep2 = y + scorep2;
    return scorep1, scorep2;
}

// Move pieces on gameboard
function playMancala(arr, index) {
    if (index < 0 || index >= arr.length || arr[index] <= 0) {
        return arr;
    }
    const value = arr[index];
    let remainingValue = value;
    arr[index] = 0;
    for (let i = index + 1; i < arr.length && remainingValue > 0; i++) {
        arr[i]++;
        remainingValue--;
    }
    for (let i = index - 1; i >= 0 && remainingValue > 0; i--) {
        arr[i]--;
        remainingValue--;
    }

    return boardHoles = arr;
}

// Play behavior when player is on home side


// Play behavior when player is on away side


// Change active player (change turns)
function player1Turn() {
    mcDisplay("Player 1's Turn");
    activePlayer = 1;
    hole7.style.border = '7px solid #ff2975';
    hole8.style.border = '7px solid #ff2975';
    hole9.style.border = '7px solid #ff2975';
    hole10.style.border = '7px solid #ff2975';
    hole11.style.border = '7px solid #ff2975';
    hole12.style.border = '7px solid #ff2975';
    hole1.style.border = '3px dashed #00fff9';
    hole2.style.border = '3px dashed #00fff9';
    hole3.style.border = '3px dashed #00fff9';
    hole4.style.border = '3px dashed #00fff9';
    hole5.style.border = '3px dashed #00fff9';
    hole6.style.border = '3px dashed #00fff9';
    player1container.style.background = '#ff2975';
    player2container.style.background = '#133e7c';
};

function player2Turn() {
    mcDisplay("Player 2's Turn");
    hole1.style.border = '7px solid #00fff9';
    hole2.style.border = '7px solid #00fff9';
    hole3.style.border = '7px solid #00fff9';
    hole4.style.border = '7px solid #00fff9';
    hole5.style.border = '7px solid #00fff9';
    hole6.style.border = '7px solid #00fff9';
    hole7.style.border = '3px dashed #00fff9';
    hole8.style.border = '3px dashed #00fff9';
    hole9.style.border = '3px dashed #00fff9';
    hole10.style.border = '3px dashed #00fff9';
    hole11.style.border = '3px dashed #00fff9';
    hole12.style.border = '3px dashed #00fff9';
    player1container.style.background = '#133e7c';
    player2container.style.background = '#00fff9';
}

function turnReset() {
    mcDisplay("");
    hole1.style.border = '3px dashed #00fff9';
    hole2.style.border = '3px dashed #00fff9';
    hole3.style.border = '3px dashed #00fff9';
    hole4.style.border = '3px dashed #00fff9';
    hole5.style.border = '3px dashed #00fff9';
    hole6.style.border = '3px dashed #00fff9';
    hole7.style.border = '3px dashed #00fff9';
    hole8.style.border = '3px dashed #00fff9';
    hole9.style.border = '3px dashed #00fff9';
    hole10.style.border = '3px dashed #00fff9';
    hole11.style.border = '3px dashed #00fff9';
    hole12.style.border = '3px dashed #00fff9';
    player1container.style.background = '#133e7c';
    player2container.style.background = '#133e7c';
}

// Calculate a winner


// Display a winner


// Render gameplay on gameboard
function holeNumRend(v) {
        hole7.innerHTML = v[0];
        hole8.innerHTML = v[1];
        hole9.innerHTML = v[2];
        hole10.innerHTML = v[3];
        hole11.innerHTML = v[4];
        hole12.innerHTML = v[5];
        player1container.innerHTML = v[6];
        hole1.innerHTML = v[7];
        hole2.innerHTML = v[8];
        hole3.innerHTML = v[9];
        hole4.innerHTML = v[10];
        hole5.innerHTML = v[11];
        hole6.innerHTML = v[12];
        player2container.innerHTML = v[13];
};

function mcClearNewGameMessage() {
    messagecenter.removeChild(freshpage);
};

function mcDisplay(message) {
    messages.innerHTML= message;
}