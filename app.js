let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

let newGameBtn = document.querySelector(".newGame-btn");
let msgContainer = document.querySelector(".winner-msg");
let msg = document.querySelector(".msg");

let turn0 = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked by user.");
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        }else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner= () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2].innerText]);
        let pos0val = boxes[pattern[0]].innerText;    
        let pos1val = boxes[pattern[1]].innerText;    
        let pos2val = boxes[pattern[2]].innerText;    

        if(pos0val != "" && pos1val != "" && pos2val != ""){
            if(pos0val === pos1val && pos1val === pos2val){
                console.log("Winner", pos0val);
                showWinner(pos0val);
            }
        }
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner= (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);