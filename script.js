//event listener on the start button to make splashscreen disappear
document.querySelector('.start-button').addEventListener('click', () => {

    document.querySelector('.splash-main').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';

});

let ghost = document.querySelector('.ghostImage');
let pumpkin = document.querySelector('.pumpkinImage');
let reaper = document.querySelector('.grim_reaperImage');

let start = document.querySelector('#start');
start.addEventListener('mouseleave', (e) => {
    e.stopPropagation()
    startAnimation()
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
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-120px)'},
        {transform: 'translateY(0px)'}
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
