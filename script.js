
// Get the modal
let winModal = document.querySelector("#gameWinPopup")
let loseModal = document.querySelector("#gameLosePopup")

// code here to activate win modal displaying // below is what to do when that happens
    function() {
        winModal.style.display = "block"
    }

// code here to activate lose modal displaying // below is what to do when that happens

function() {
    loseModal.style.display = "block"
}

// When the user clicks anywhere outside of the modal, close it

window.addEventListener('click', (event) => {
    if (event.target == winModal) {
        winModal.style.display = "none"
    }
})

window.addEventListener('click', (event) => {
    if (event.target == loseModal) {
        loseModal.style.display = "none"
    }
})