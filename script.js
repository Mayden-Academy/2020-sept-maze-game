
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
        startTimer(45, document.querySelector('#timer p'));
    }
})