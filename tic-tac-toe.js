let boxes = document.querySelectorAll (".box");   // returns class list
let resetbtn = document.querySelector (".resetbutton");
let newGamebtn =  document.querySelector (".newbutton");


let XplayerTurn = false;
const winningPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];


function resetGame () {
    XplayerTurn = false;
    enableBtns();

}

const enableBtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        let winnermessage = document.querySelector ("#winnerText");
        winnermessage.style.display = "none";
    }
}

const diableBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function checkWinner() {
    for (pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos1 == pos3) {
                let winnermessage = document.querySelector ("#winnerText");
                winnermessage.style.display = "inline";
                winnermessage.innerText = `Player ${pos1} has won!`;
                diableBtns ();
                // return true;
            }
        }
    }
}

function checkTie() {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false;
        }
    }
    return true; 
}


boxes.forEach ((box) => {
    box.addEventListener ("click", (e) => {
        console.log ("Button was clicked!");
        if (XplayerTurn){
            box.innerText = "X";
            XplayerTurn = false;
        }
        else {
            box.innerText = "O";
            XplayerTurn = true;
        }
        box.disabled = true;
         checkWinner ();
         if (checkTie () === true) {
            let winnermessage = document.querySelector ("#winnerText");
                winnermessage.style.display = "inline";
                winnermessage.innerText = `Match Tied`;
                diableBtns ();
                return;
        }

    })
});

newGamebtn.addEventListener ("click", resetGame);
resetbtn.addEventListener ("click",resetGame);