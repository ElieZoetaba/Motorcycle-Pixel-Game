const motorcycle = document.getElementById('motorcycle')
const cactus = document.getElementById('cactus')
let gameover = document.querySelector('.EndBlock')
let isGameOver = false; 

document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && !isGameOver) {
        jump();
    }
});


function jump () {
    if (!motorcycle.classList.contains('jump')) {
        motorcycle.classList.add('jump')
        setTimeout(function() {
            motorcycle.classList.remove('jump')
        }, 300)
    }
}

let Logic = setInterval( function (){
    let motorcycleTop = parseInt(window.getComputedStyle(motorcycle).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 150 && cactusLeft > 40 && motorcycleTop >= 45) {
        clearInterval(Logic);
        gameover.classList.add('Game_Over')
        cactus.style.animationPlayState = "paused";
        motorcycle.classList.add('motorcycle_stop');
        isGameOver = true;
        clearInterval(scoreInterval)
        clearInterval(scoreUp1)
        clearInterval(scoreUp2)
        clearInterval(scoreUp3)



    }
}, 10)



//Game score
let scoreUp1
let scoreUp2
let scoreUp3

let score = document.querySelector('.score')
let count = 0;

let scoreInterval = setInterval(function() {
    count++;
    score.innerHTML = count;

    if (count === 120) {
        scoreUp1 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 119);
    }
    if (count === 852) {
        scoreUp2 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 115);
    }
    if (count === 1321) {
        scoreUp3 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 110);
    }

}, 120);



//restart game

let RestartButton = document.querySelector('.RestartGame')

RestartButton.addEventListener('click', function (){
    location.reload()
})

// Game Logic



