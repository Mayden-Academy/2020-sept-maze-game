//event listener on the start button to make splashscreen disappear
document.querySelector('.start-button').addEventListener('click', () => {
    document.querySelector('#splash-main').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';

});


//listen for collisions with obstacles
function listenForCollisions() {
    document.querySelectorAll('.collision').forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            // console.log('collision mouseOver: Oh dear, you lost as you left the path or collided with a monster!');
            alert('Oh dear, you lost as you left the path or collided with a monster!');
        })
        item.addEventListener('mouseover', (e) => {
            // console.log('collision mouseOver: Oh dear, you lost as you left the path or collided with a monster!');
            alert('Oh dear, you lost as you left the path or collided with a monster!');
            e.stopPropagation();
        })
    })
}

//win if u get to Exit door (no timers yet)
function listenForWinning() {
    document.querySelector('.winningSquare').addEventListener('mouseenter', (e) => {
        // console.log('winningSquare mouseover: Congrats! You made it to the Exit!');
        alert('Congrats! You made it to the Exit!');
        e.stopPropagation();
    })
}

//call functions from here

let ghost = document.querySelector('.ghost');
let pumpkin = document.querySelector('.pumpkinImage');
let reaper = document.querySelector('.grim_reaperImage');
let lineSeven = document.querySelector('.line_seven');

let start = document.querySelector('.start_area');

start.addEventListener('mouseleave', (e) => {
    e.stopPropagation()
    startAnimation();
    listenForCollisions();
    listenForWinning();
})

function startAnimation() {
    ghost.animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(150px)'},
        {transform: 'translateY(0px)'}
    ], {
        // timing options
        duration: 3000,
        iterations: Infinity
    });
    pumpkin.animate([
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
    lineSeven.addEventListener('mouseleave', (e) => {
        reaper.animate([
            {transform: 'translateY(0px)'},
            {transform: 'translateY(100px)'},
            {transform: 'translateY(0px)'}
        ], {
            // timing options
            duration: 3000,
            iterations: Infinity
        });
    })
}

function homeScreenGhost () {
    document.querySelector('.start-button').addEventListener('mouseover', (e) => {
        e.stopPropagation()
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

homeScreenGhost()