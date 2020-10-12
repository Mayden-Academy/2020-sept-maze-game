
//event listener on the start button
document.querySelector('#start').addEventListener('click', () => {

    document.querySelector('.splashback').style.display = 'none';   //get rid of splashscreen
    //as long as the splashback is positioned absolutely over the background, it sits outside of document flow
    //and then you can display: none it and it disappears

});

