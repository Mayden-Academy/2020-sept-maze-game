const ghost = document.querySelector('.ghost');
const pumpkin = document.querySelector('.pumpkin');
const reaper = document.querySelector('.grimReaper');
const grimReaperZone = document.querySelector('.grimReaperZone');
const start = document.querySelector('.startArea');
const collision = document.querySelectorAll('.collision');
const winModal = document.querySelector("#gameWinPopup");
const loseModal = document.querySelector("#gameLosePopup");
const winningDoor = document.querySelector('.winningSquare');
let timer;
let timerRunning = false;

// animation section, shouldn't be in function as consts need to be globally accessible
const ghostMove = ghost.animate([
    {transform: 'translateY(0px)'},
    {transform: 'translateY(150px)'},
    {transform: 'translateY(0px)'}
], {
    duration: 3000,
    iterations: Infinity
});
ghostMove.pause();

const pumpkinMove = pumpkin.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(120px)'},
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-140px)'},
    {transform: 'translateX(0px)'}
], {
    duration: 6000,
    iterations: Infinity
});
pumpkinMove.pause();

const reaperMove = reaper.animate([
    {transform: 'translateY(0px)'},
    {transform: 'translateY(100px)'},
    {transform: 'translateY(0px)'}
], {
    duration: 3000,
    iterations: Infinity
});
reaperMove.pause();

// code to make splash screen ghost move on mouse hover of start button
document.querySelector('.startButton').addEventListener('mouseover', (e) => {
    e.stopPropagation();
    document.querySelector('.gameLogo').animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-60px)'},
        {transform: 'translateY(0px)'}
    ], {
        duration: 3000,
        iterations: Infinity
    });
});

function resetGame() {
    start.removeEventListener('mouseleave', runGame);
    collision.forEach((item) => {
        item.removeEventListener('mouseenter', lose);
    });
    winningDoor.removeEventListener('mouseenter', win);
    ghostMove.pause();
    pumpkinMove.pause();
    reaperMove.cancel();
    grimReaperZone.removeEventListener('mouseleave', moveReaper);
    clearInterval(timer);
    timerRunning = false;
}

// code here to activate win modal displaying
function win() {
    winModal.style.display = "block";
    resetGame();
}

// code here to activate lose modal displaying
function lose() {
    loseModal.style.display = "block";
    resetGame();
}

function visuallyResetTimer() {
    document.querySelector('#timerDisplay').textContent = '00:45';
}

winModal.addEventListener('click', (e) => {
    e.stopPropagation();
    winModal.style.display = "none";
    visuallyResetTimer();
    startCountdown(5, document.querySelector('#countdownDisplay'));
});

loseModal.addEventListener('click', (e) => {
    e.stopPropagation();
    loseModal.style.display = "none";
    visuallyResetTimer();
    startCountdown(5, document.querySelector('#countdownDisplay'));
});

// event listener on the start button to make splashscreen disappear
document.querySelector('.startButton').addEventListener('click', () => {
    document.querySelector('#splashMain').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';
    startCountdown(5, document.querySelector('#countdownDisplay'));
})

function listenForCollisions() {
    collision.forEach(item => {
        item.addEventListener('mouseenter', lose);
    });
}

function listenForWinning() {
    winningDoor.addEventListener('mouseenter', win);
}

function moveReaper() {
    reaperMove.play();
}

// call main function to start game from here
function runGame() {
    ghostMove.play();
    pumpkinMove.play();
    if (timerRunning === false) {
        startTimer(44, document.querySelector('#timerDisplay'));
    }
    listenForCollisions();
    listenForWinning();
    grimReaperZone.addEventListener('mouseleave',moveReaper);
}

function startTimer(duration, element) {
    timerRunning = true;
    let timeLeft = duration;
    timer = setInterval(() => {
        let seconds = parseInt(timeLeft % 60, 10);
        seconds = (seconds < 10) ? ("0" + seconds) : seconds;

        element.textContent = "00:" + seconds;
        --timeLeft;
        if (timeLeft < 0) {
            lose();
        }
    }, 1000)
}

function startCountdown(duration, element) {
    let timeLeft = duration;
    let timer = setInterval( () => {
        let seconds = parseInt(timeLeft % 60, 10);
        element.textContent = seconds;
        --timeLeft;
        if (timeLeft < 0) {
            element.textContent = 'GO!';
            clearInterval(timer);
            console.log('end of game');
            runGame();
        }
    }, 1000)
}