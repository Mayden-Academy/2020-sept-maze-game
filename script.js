const ghost = document.querySelector('.ghost');
const pumpkin = document.querySelector('.pumpkin');
const reaper = document.querySelector('.grim_reaper');
const lineEight = document.querySelector('.line_eight');
const start = document.querySelector('.start_area');
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

// code to make splash screen mouse hover
function homeScreenGhost () {
    document.querySelector('.start-button').addEventListener('mouseover', (e) => {
        e.stopPropagation();
        document.querySelector('.game-logo').animate([
            {transform: 'translateY(0px)'},
            {transform: 'translateY(-60px)'},
            {transform: 'translateY(0px)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    });
}

homeScreenGhost();

// code here to activate win modal displaying
function win() {
    start.removeEventListener('mouseleave', runGame);
    collision.forEach((item) => {
        item.removeEventListener('mouseenter', lose);
    })
    winningDoor.removeEventListener('mouseenter', win);
    winModal.style.display = "block";
    ghostMove.pause();
    pumpkinMove.pause();
    reaperMove.cancel();
    lineEight.removeEventListener('mouseleave',moveReaper);
}

// code here to activate lose modal displaying
function lose() {
    start.removeEventListener('mouseleave', runGame);
    collision.forEach((item) => {
        item.removeEventListener('mouseenter', lose)
    });
    winningDoor.removeEventListener('mouseenter', win);
    loseModal.style.display = "block";
    ghostMove.pause();
    pumpkinMove.pause();
    reaperMove.cancel();
    lineEight.removeEventListener('mouseleave', moveReaper);
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
document.querySelector('.start-button').addEventListener('click', () => {
    document.querySelector('#splash-main').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';
    start.addEventListener('mouseleave', runGame);
});

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
    lineEight.addEventListener('mouseleave',moveReaper);
}