let count = 0; 
let player = "X";

function player1ToPlayer2() {
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
};

function appendToTile(button, tile) {
    $(tile).append(player)
}


// function switchPlayer() {
//     if (count === 0) {
//         $("button").append("X")
//         count = 1;
//     }
//     if (count === 1) {
//         $("button").append("O");
//         count = 0;
//     }
// }

function horizontalWin() {

}

function verticalWin() {

}

function diagonalWin() {

}

function performLogic() {
    count++;
    player1ToPlayer2();
    appendToTile();



        if (count > 8) {
            gameOver();
        }
    
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

