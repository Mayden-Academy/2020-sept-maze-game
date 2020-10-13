
//event listener on the start button to make splashscreen disappear
document.querySelector('.start-button').addEventListener('click', () => {
    document.querySelector('#splash-main').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';

});

//listen for collisions with obstacles
function listenForCollisions() {
    document.querySelectorAll('.collision').forEach(item => {
        item.addEventListener('mouseover', (e) => {
            // console.log('collision mouseOver: Oh dear, you lost as you left the path or collided with a monster!');
            alert('Oh dear, you lost as you left the path or collided with a monster!');
            e.stopPropagation();
        })
    })
}

//win if u get to Exit door (no timers yet)
function listenForWinning() {
    document.querySelector('.winningSquare').addEventListener('mouseover', (e) => {
        // console.log('winningSquare mouseover: Congrats! You made it to the Exit!');
        alert('Congrats! You made it to the Exit!');
        e.stopPropagation();
    })
}

//call functions from here

let ghost = document.querySelector('.ghostImage');
let pumpkin = document.querySelector('.pumpkinImage');
let reaper = document.querySelector('.grim_reaperImage');

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
        {transform: 'translateX(-120px)'},
        {transform: 'translate(0px)'},
        {transform: 'translate(120px)'},
        {transform: 'translate(0px)'}
    ], {
        // timing options
        duration: 3000,
        iterations: Infinity
    });
    reaper.animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(100px)'},
        {transform: 'translateY(0px)'}
    ], {
        // timing options
        duration: 3000,
        iterations: Infinity
    });
}

function startTimer(duration, element) {
    timerRunning = true;
    let timeLeft = duration;
    let timer = setInterval( () => {
        let minutes = parseInt(timeLeft / 60, 10);
        let seconds = parseInt(timeLeft % 60, 10);

        minutes = (minutes < 10) ? ("0" + minutes) : minutes;
        seconds = (seconds < 10) ? ("0" + seconds) : seconds;

        element.textContent = minutes + ":" + seconds;

        if (--timeLeft < 0) {
            timeLeft = duration;
            clearInterval(timer)
            console.log('end of game')
        }

        document.querySelector('.finish_area').addEventListener('mouseenter', ()=>{
            clearInterval(timer);
            console.log('youve won');
        })
    }, 1000)
}
let timerRunning = false;
document.querySelector('.start_area').addEventListener('mouseout', ()=> {
    if ( timerRunning === false) {
        startTimer(30, document.querySelector('#timer p'));
    }
})