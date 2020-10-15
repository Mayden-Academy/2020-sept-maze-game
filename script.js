
//event listener on the start button to make splashscreen disappear
document.querySelector('.startButton').addEventListener('click', () => {

    document.querySelector('#splashMain').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';
    startCountdown(5, document.querySelector('#countdownTimer p'));

});

function startCountdown(duration, element) {
    let timeLeft = duration;
    let timer = setInterval( () => {
        let seconds = parseInt(timeLeft % 60, 10);
        element.textContent = seconds;
        if (--timeLeft < 0) {
            element.textContent = 'GO!';
            clearInterval(timer)
            startTimer(44, document.querySelector('#timer'))
            console.log('end of game')
        }
    }, 1000)
}


