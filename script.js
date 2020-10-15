
/* timer for game code */
let timerRunning = false;
if ( timerRunning === false) {
    startTimer(5, document.querySelector('#timer p'));
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
            // timeLeft = duration;
            clearInterval(timer)
            console.log('end of game')
        }

        document.querySelector('.finish_area').addEventListener('mouseenter', ()=>{
            clearInterval(timer);
            console.log('you won');
        })
    }, 1000)
}

