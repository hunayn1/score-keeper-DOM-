// For refactoring, we have 1. removed duplications by making objects and 
//                          2. wrote functions named updateScore to update score for each player
//                          3. made a loop in reset to loop over both players and reset their values. 

const p1 = {
    score: 0,
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1Button")
}
const p2 = {
    score: 0,
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2Button")
}

const select = document.querySelector("#select");

const reset = document.querySelector("#reset");

let winningScore = 3;
let gameOver = false;

select.addEventListener("change", function () {
    winningScore = parseInt(select.value);
    re();
})

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score++;
        player.display.innerText = player.score;
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
})
p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
})
reset.addEventListener("click", re)

function re() {
    gameOver = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}