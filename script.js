function startTimer( duration, element) {
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

        document.querySelector('#finish').addEventListener('mouseenter', ()=>{
            clearInterval(timer);
            console.log('youve won');
        })
    }, 1000)
}
let timerRunning = false;
document.querySelector('#button').addEventListener('mouseout', ()=> {
    if ( timerRunning === false) {
        startTimer(10, document.querySelector('#timer p'));
    }
})
