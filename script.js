
let ghost = document.querySelector('.ghost');
let pumpkin = document.querySelector('.pumpkin');
let reaper = document.querySelector('.grim_reaper');
let lineEight = document.querySelector('.line_eight');

let start = document.querySelector('.start_area');
let collision = document.querySelectorAll('.collision');

// Get the modal
let winModal = document.querySelector("#gameWinPopup");
let loseModal = document.querySelector("#gameLosePopup");

// code to animate the obstacles
let ghostMove = ghost.animate([
    {transform: 'translateY(0px)'},
    {transform: 'translateY(150px)'},
    {transform: 'translateY(0px)'}
], {
// timing options
    duration: 3000,
    iterations: Infinity
});
ghostMove.pause()

let pumpkinMove = pumpkin.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(120px)'},
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-140px)'},
    {transform: 'translateX(0px)'}
], {
// timing options
    duration: 6000,
    iterations: Infinity
});
pumpkinMove.pause()

let reaperMove = reaper.animate([
    {transform: 'translateY(0px)'},
    {transform: 'translateY(100px)'},
    {transform: 'translateY(0px)'}
], {
// timing options
    duration: 3000,
    iterations: Infinity
});
reaperMove.pause()

// code to make splash screen mouse hover
function homeScreenGhost () {
    document.querySelector('.start-button').addEventListener('mouseover', (e) => {
        e.stopPropagation();
        document.querySelector('.game-logo').animate([
            {transform: 'translateY(0px)'},
            {transform: 'translateY(-60px)'},
            {transform: 'translateY(0px)'}
        ], {
// timing options
            duration: 3000,
            iterations: Infinity
        });
    })
}

homeScreenGhost();

// code here to activate win modal displaying
function win() {
    start.removeEventListener('mouseleave', runGame);
    collision.forEach(() => {
        this.removeEventListener('mouseenter', lose)
    })
    winModal.style.display = "block";
    ghostMove.pause();
    pumpkinMove.pause();
    reaperMove.cancel();
}

// code here to activate lose modal displaying

function lose() {
    start.removeEventListener('mouseleave', runGame);
    collision.forEach(() => {
        this.removeEventListener('mouseenter', lose)
    })
    loseModal.style.display = "block";
    ghostMove.pause();
    pumpkinMove.pause();
    reaperMove.cancel();
}

winModal.addEventListener('click', (e) => {
    e.stopPropagation();
    winModal.style.display = "none";
    start.addEventListener('mouseleave', runGame);
})

loseModal.addEventListener('click', (e) => {
    e.stopPropagation();
    loseModal.style.display = "none";
    start.addEventListener('mouseleave', runGame);
})

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
    })
}

//win if u get to Exit door (no timers yet)
function listenForWinning() {
    document.querySelector('.winningSquare').addEventListener('mouseenter', win);
}

//call functions from here
function runGame() {
    ghostMove.play();
    pumpkinMove.play();
    listenForCollisions();
    listenForWinning();
    lineEight.addEventListener('mouseleave',() => {
       reaperMove.play();
    })
}
