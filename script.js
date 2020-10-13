
//event listener on the start button to make splashscreen disappear
document.querySelector('.start-button').addEventListener('click', () => {

    document.querySelector('.splash-main').style.display = 'none';
    document.querySelector('#gameScreen').style.display = 'block';

});

