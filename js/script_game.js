const motorcycle = document.getElementById('motorcycle')
const obstacles = document.getElementById('obstacles')
let gameover = document.querySelector('.EndBlock')
let isGameOver = false;
document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && !isGameOver) {
        jump();
        //add jump sound
        jumpSound = new Audio()
        jumpSound.src = '../sounds/jump_moto.mp3'
        jumpSound.volume = 0.3
        jumpSound.play()
    }

});

//Music ("Them Bones" by Alice in Chains)

Music = new Audio()
Music.src = '../sounds/Music.mp3'
Music.volume = 0.1
Music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
Music.play()


//Random obstacles
let randomObstacles = ['obstacles_1', 'obstacles_2', 'obstacles_3']
let ObjTimeout

function changeObstacles() {
    let randomIndex = Math.floor(Math.random() * randomObstacles.length)
    let randomObject = randomObstacles[randomIndex]
    let block_obstacles = document.querySelector('.obstacles')
    block_obstacles.classList.remove('obstacles_1', 'obstacles_2', 'obstacles_3')
    block_obstacles.classList.add(randomObject)
    ObjTimeout = setTimeout(changeObstacles, 1300)
}
changeObstacles()


function jump () {
    if (!motorcycle.classList.contains('jump')) {
        motorcycle.classList.add('jump')
        setTimeout(function() {
            motorcycle.classList.remove('jump')
        }, 300)
    }
}

//Logic obstacles
let jumpSound
let Logic = setInterval( function (){
    let motorcycleTop = parseInt(window.getComputedStyle(motorcycle).getPropertyValue('top'))
    let obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue('left'))

    if (obstaclesLeft < 150 && obstaclesLeft > 40 && motorcycleTop >= 45) {
        //block jump
        isGameOver = true;

        //sound game over
        let Game_Over_sound = new Audio();
        Game_Over_sound.src = '../sounds/Game_Over.mp3';
        Game_Over_sound.volume = 0.2;
        Game_Over_sound.play();
        clearTimeout(ObjTimeout)
        clearInterval(Logic);
        gameover.classList.add('Game_Over')
        obstacles.style.animationPlayState = "paused";
        motorcycle.classList.add('motorcycle_stop');

        //stop jump sound
        Music.pause()

        //flashing motorcycle
        let intervalId = setInterval(function() {
            motorcycle.style.visibility = (motorcycle.style.visibility == "hidden" ? "visible" : "hidden");
        }, 500);

        setTimeout(function() {
            clearInterval(intervalId);
            motorcycle.style.visibility = "visible";
        }, 3000);

        //stop score
        clearInterval(scoreInterval)
        clearInterval(scoreUp1)
        clearInterval(scoreUp2)
        clearInterval(scoreUp3)
        clearInterval(scoreUp4)
        clearInterval(scoreUp5)
        clearInterval(scoreUp6)
        clearInterval(scoreUp7)

    }
}, 10)



//Game score
let scoreUp1
let scoreUp2
let scoreUp3
let scoreUp4
let scoreUp5
let scoreUp6
let scoreUp7


let score = document.querySelector('.score')
let count = 0;

let scoreInterval = setInterval(function() {
    count++;
    score.innerHTML = count;

    if (count === 211) {
        obstacles.style.setProperty('animation-duration', '1.2s');
        //speed up the counter
        scoreUp1 = setInterval(function() {
            count++;
            score.innerHTML = count;
        }, 119);
    }
    if (count === 800) {
        obstacles.style.setProperty('animation-duration', '1.1s');
        scoreUp2 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 115);
    }
    if (count === 1400) {
        obstacles.style.setProperty('animation-duration', '1s');
        scoreUp3 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 110);
    }
    if (count === 2000) {
        obstacles.style.setProperty('animation-duration', '0.97s');
        scoreUp4 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 105);
    }
    if (count === 5000) {
        obstacles.style.setProperty('animation-duration', '0.94s');
        scoreUp5 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 95);
    }
    if (count === 8000) {
        obstacles.style.setProperty('animation-duration', '0.90s');
        scoreUp6 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 93);
    }
    if (count === 8200) {
        obstacles.style.setProperty('animation-duration', '0.88s');
        scoreUp7 = setInterval(function() {
            count++;
            score.innerHTML = count;

        }, 85);
    }

}, 120);

//restart game

let RestartButton = document.querySelector('.RestartGame')

RestartButton.addEventListener('click', function (){
    location.reload()
})


