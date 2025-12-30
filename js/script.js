const authorDiv = document.querySelector(".author-div"); 
const shareButton = document.querySelector(".share-button"); 
const sharePanel = document.querySelector(".js-div"); 

function togglePanel() {

    sharePanel.classList.toggle("is-open"); // this toggles the panel on desktop when the function is run 

    if (window.innerWidth < 768) { // on mobile 
        authorDiv.classList.toggle("is-hidden") // hide the authorDiv when the sharePanel is open 
    }

}

shareButton.addEventListener("click", togglePanel);

