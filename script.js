// // Each little piece of functionality should be able to fit in the game, player or gameboard objects

// const game;
// const gameboard;
// const player;

// fuck the organising.. keeps me procrastinating ○ ✗

const cells = document.querySelectorAll(".cell")
let currentPlayer = "✗"
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]
options = ["", "", "", "", "", "", "", "", ""]

startGame()
function startGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
}

function cellClicked() {
    const cellIndex = this.getAttribute("id")
    if (options[cellIndex] != "") {
        return;
    }
    else {
        updateCell(this, cellIndex)   
    }
    changePlayer();
    checkWin();
}

function updateCell(cell, index) {
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}

function changePlayer() {
    if (currentPlayer === "✗") {
        currentPlayer = "○"
    }
    else if (currentPlayer === "○") {
        currentPlayer = "✗"
    }
}

function checkWin() {
    for (let  i = 0; i < winCondition.length; i++ ) {
    const condition = winCondition[i]
    const cellA = options[condition[0]]
    const cellB = options[condition[1]]
    const cellC = options[condition[2]]
    
    if (cellA === "" || cellB === "" || cellC === "") {
        continue;
    }
    else if (cellA === cellB && cellB === cellC) {
        console.log("won")
        console.log(condition[0], condition[1], condition[2])
        highlightCells(condition[0], condition[1], condition[2])
    }
    }
}

function highlightCells(first, second, third) {
    let cellOne = document.getElementById(first)
    let cellTwo = document.getElementById(second)
    let cellThree = document.getElementById(third)
    cellOne.classList.add("won")
    cellTwo.classList.add("won")
    cellThree.classList.add("won")
}