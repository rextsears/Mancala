/*----- constants -----*/
  
/*----- app's state (variables) -----*/
let boardHoles = [];
let activePlayer;
let mancalaRender;
let winRender;
  
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
    if (activePlayer = 2) {
        if (boardHoles[7] > 0) {
        mancalaRender = playMancala(boardHoles,7);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
        };
    };
});
 
let hole2Click = hole2.addEventListener('click', function(){
    if (activePlayer === 2) {
        if (boardHoles[8] > 0) {
        mancalaRender = playMancala(boardHoles,8);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
    };
    };
});


let hole3Click = hole3.addEventListener('click', function(){
    if (activePlayer === 2) {
        if (boardHoles[9] > 0) {
        mancalaRender = playMancala(boardHoles,9);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
        };
    };
});


let hole4Click = hole4.addEventListener('click', function(){
    if (activePlayer === 2) {
        if (boardHoles[10] > 0) {
        mancalaRender = playMancala(boardHoles,10);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
        };
    };
});


let hole5Click = hole5.addEventListener('click', function(){
    if (activePlayer === 2) {
        if (boardHoles[11] > 0) {
        mancalaRender = playMancala(boardHoles,11);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
    };
    };
});


let hole6Click = hole6.addEventListener('click', function(){
    if (activePlayer === 2) {
        if (boardHoles[12] > 0) {
        mancalaRender = playMancala(boardHoles,12);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
    };
    };
});


let hole7Click = hole7.addEventListener('click', function(){
    if (activePlayer === 1) {
        if (boardHoles[0] > 0) {
        mancalaRender = playMancala(boardHoles,0);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
        };
    };
});


let hole8Click = hole8.addEventListener('click', function(){
    if (activePlayer === 1) {
        if (boardHoles[1] > 0) {
        mancalaRender = playMancala(boardHoles,1);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
        };
    };
});


let hole9Click = hole9.addEventListener('click', function(){
    if (activePlayer === 1) {
        if (boardHoles[2] > 0) {
        mancalaRender = playMancala(boardHoles,2);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
    };
    };
});

let hole10Click = hole10.addEventListener('click', function(){
    if (activePlayer === 1) {
        if (boardHoles[3] > 0) {
        mancalaRender = playMancala(boardHoles,3);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
    };
    };
});


let hole11Click = hole11.addEventListener('click', function(){
    if (activePlayer === 1) {
        if (boardHoles[4] > 0) {
        mancalaRender = playMancala(boardHoles,4);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
    };
    };
});


let hole12Click = hole12.addEventListener('click', function(){
    if (activePlayer === 1) {
        if (boardHoles[5] > 0) {
        mancalaRender = playMancala(boardHoles,5);
        holeNumRend(mancalaRender.board);
        checkTurn(mancalaRender.stoppedIndex,activePlayer);
        changeTurn(activePlayer);
    };
    };
});
 
let newgameClick = newgamebutton.addEventListener('click', function(){
    cleanSlate();
    holeNumRend(boardHoles);
    mcClearNewGameMessage();
});

//test functions // 
/*
let player1test = player1container.addEventListener('click', function(){
    turnReset();
    player1Turn();
    });

let player2test = player2container.addEventListener('click', function(){
    turnReset();
    player2Turn();
    }); 
    */
//////////////////////////////////////////

/*----- functions -----*/
// New Game
function cleanSlate() {
boardHoles = [4,4,4,4,4,4,0,4,4,4,4,4,4,0];
gameWinner = null;
activePlayer = 1;
changeTurn(activePlayer);
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
        return { board: arr, stoppedIndex: index };
    }

    const value = arr[index];
    let remainingValue = value;

    arr[index] = 0;
    let lastIndex = index;

    for (let i = index + 1; remainingValue > 0; i++) {
        if (i >= arr.length) {
            i = 0;
        }
        if (i === index) {
            continue;
        }
        arr[i]++;
        remainingValue--;
        lastIndex = i;
    }

    return { board: arr, stoppedIndex: lastIndex };
};

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

function checkTurn(stoppedOn,playerChk) {
if (stoppedOn === 6) {
    activePlayer = playerChk;
    return activePlayer;
} else if (stoppedOn === 13) {
    activePlayer = playerChk;
    return activePlayer;
} else {
    if (playerChk === 1) {
        activePlayer = 2;
    } else if (playerChk === 2) {
        activePlayer = 1;
    }
    return activePlayer;
}};

function changeTurn(x) {
    if (x === 1) {
        return player1Turn();
    };
    if (x === 2) {
        return player2Turn();
    };
};

// Calculate a winner
function calcWin(arr) {
    if (arr[0,1,2,3,4,5] === 0){
        return gameWinner = 2;
    } else if (arr[7,8,9,10,11,12] === 0) {
        return gameWinner = 1;
    };
};

// Display a winner
function gameWinner(winner) {
if (winner === 1) {
    mcDisplay("PLAYER 1 WINS!");
} else if (winner === 2) {
    mcDisplay("PLAYER 2 WINS!");
} else {};
};

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

// Game Notifications

function mcClearNewGameMessage() {
    messagecenter.removeChild(freshpage);
};

function mcDisplay(message) {
    messages.innerHTML= message;
};