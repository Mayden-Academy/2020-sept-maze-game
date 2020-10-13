let img = document.querySelector('.game-logo');

let start = document.querySelector('.instructionDetails');
start.addEventListener('mouseleave', (e) => {
    e.stopPropagation()
})


function startAnimation() {
    img.animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-50px)'},
        {transform: 'translateY(0px)'}
    ], {
        // timing options
        duration: 3000,
        iterations: Infinity
    });
    // 2 more of these
}
startAnimation()