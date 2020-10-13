
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
listenForCollisions();
listenForWinning();