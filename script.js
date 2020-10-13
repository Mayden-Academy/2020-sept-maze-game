
// Get the modal
let modal = document.querySelector("#gameWinPopup")

// Get the button that opens the modal if you've won
let Tempbtn = document.querySelector(".start-button")

// Get the button that closes the modal and restarts the game
let restartButton = document.querySelector(".restartButton")

// When the user clicks the start button, open the modal (this needs changing to when the game ends, open modal)
//eventlistener this!!
Tempbtn.onclick = function() {
    modal.style.display = "block"
}


// When the user clicks on (restart button), close the modal
//eventlistener this!!
restartButton.onclick = function() {
    modal.style.display = "none"
    //startGame Function here
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

