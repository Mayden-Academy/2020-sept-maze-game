
//event listener on the start button to make splashscreen disappear
document.querySelector('.start-button').addEventListener('click', () => {

    document.querySelector('#splash-main').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';
    startCountdown(5, document.querySelector('#countdownTimer p'));

});

// Game screen timer

function startTimer( duration, element) {
    // timerRunning = true;
    let timeLeft = duration;
    let timer = setInterval(() => {
        let minutes = parseInt(timeLeft / 60, 10);
        let seconds = parseInt(timeLeft % 60, 10);
        minutes = (minutes < 10) ? ("0" + minutes) : minutes;
        seconds = (seconds < 10) ? ("0" + seconds) : seconds;
        element.textContent = minutes + ":" + seconds;
        if (--timeLeft < 0) {
            // timeLeft = duration;
            clearInterval(timer)
            console.log('end of game')
        }
        document.querySelector('.finish_area').addEventListener('mouseenter', () => {
            clearInterval(timer);
            console.log('you won');
        })
    }, 1000)
}

// let timerRunning = false;
// document.querySelector('.start_area').addEventListener('mouseout', ()=> {
//     if ( timerRunning === false) {
//         startTimer(10, document.querySelector('#timer p'));
//     }
// })

// Countdown timer (to start)

function startCountdown(duration, element) {
    let timeLeft = duration;
    let timer = setInterval( () => {
        let seconds = parseInt(timeLeft % 60, 10);
        element.textContent = seconds;
        if (--timeLeft < 0) {
            element.textContent = 'GO!';
            clearInterval(timer)
            startTimer(45, document.querySelector('#timer'))
            console.log('end of game')
        }
    }, 1000)
}


