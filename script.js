

// Get the modal
let winModal = document.querySelector("#gameWinPopup")
let loseModal = document.querySelector("#gameLosePopup")

// code here to activate win modal displaying
    let win = function() {
        winModal.style.display = "block"
    }

// code here to activate lose modal displaying

let lose = function() {
   loseModal.style.display = "block"
}

// When the user clicks anywhere outside of the modal, close it
//this isn't working any more...
// window.addEventListener('click', (event) => {
//     if (event.target === winModal) {
//         winModal.style.display = "none"
//     }
// })

window.addEventListener('click', (event) => {
    if (event.target === loseModal) {
        loseModal.style.display = "none"
    }
})

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
            //alert('Oh dear, you lost as you left the path or collided with a monster!');
            lose()
            e.stopPropagation();
        })
    })
}

//win if u get to Exit door (no timers yet)
function listenForWinning() {
    document.querySelector('.winningSquare').addEventListener('mouseover', (e) => {
        // console.log('winningSquare mouseover: Congrats! You made it to the Exit!');
        //alert('Congrats! You made it to the Exit!');
        win()
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

