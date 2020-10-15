const ghost = document.querySelector('.ghost');
const pumpkin = document.querySelector('.pumpkin');
const reaper = document.querySelector('.grimReaper');
const grimReaperZone = document.querySelector('.grimReaperZone');
const start = document.querySelector('.startArea');
const collision = document.querySelectorAll('.collision');
const winModal = document.querySelector("#gameWinPopup");
const loseModal = document.querySelector("#gameLosePopup");
const winningDoor = document.querySelector('.winningSquare');

//animation section, shouldnt be in function as consts need to be globally accessible
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

winModal.addEventListener('click', (e) => {
    e.stopPropagation();
    winModal.style.display = "none";
    start.addEventListener('mouseleave', runGame);
});

loseModal.addEventListener('click', (e) => {
    e.stopPropagation();
    loseModal.style.display = "none";
    start.addEventListener('mouseleave', runGame);
});

//event listener on the start button to make splashscreen disappear
document.querySelector('.startButton').addEventListener('click', () => {
    document.querySelector('#splashMain').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';
    start.addEventListener('mouseleave', runGame);
})

//listen for collisions with obstacles
function listenForCollisions() {
    collision.forEach(item => {
        item.addEventListener('mouseenter', lose);
    });
}

//win if u get to Exit door (no timers yet)
function listenForWinning() {
    winningDoor.addEventListener('mouseenter', win);
}
function moveReaper() {
    reaperMove.play();
}

//call main function to start game from here
function runGame() {
    ghostMove.play();
    pumpkinMove.play();
    listenForCollisions();
    listenForWinning();
    grimReaperZone.addEventListener('mouseleave',moveReaper);
}