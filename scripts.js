



function PlayAndShow(audioSound, textDiv, audioImage) {
    var myText = document.getElementById(textDiv);
    var myAudio = document.getElementById(audioSound);
    var myButton = document.getElementById(audioImage);

     if(myAudio.paused) {
        myAudio.play();
        myText.style.display = "flex";
        myButton.src= "./nav-images/stop-g55029e04a_1280.png";
        // myAudio.onended = ResetPlayAndShow(myAudio, myText, myButton);
        myAudio.addEventListener('ended', function() {
            myAudio.pause();
            myAudio.currentTime = 0;
            myText.style.display = "none";
            myButton.src= "nav-images/play-g79150a13d_1280.png";
          });
     }
    else {
        myAudio.pause();
        myAudio.currentTime = 0;
        myText.style.display = "none";
        myButton.src= "nav-images/play-g79150a13d_1280.png";
  }

} 



function HideDiv(textDiv) {
    var myText = document.getElementById(textDiv);
    myText.style.display = "none";
}

function ResetPlayAndShow(audioSound, textDiv, audioImage) {
    var myText = document.getElementById(textDiv);
    var myAudio = document.getElementById(audioSound);
    var myButton = document.getElementById(audioImage);

    myAudio.pause();
    myAudio.currentTime = 0;
    myText.style.display = "none";
    myButton.src= "nav-images/play-g79150a13d_1280.png";

}



function playHoverSoundOnClass(className) {
    const elements = document.getElementsByClassName(className);
    const hoverSound = new Audio("./audio/computerwav-14702A.mp3");

    Array.from(elements).forEach(element => {
        element.addEventListener("mouseover", () => {
            hoverSound.play();
        });
    });

    // Optional: Pause the audio when the button is not hovered (optional)
    /* audioButton.addEventListener("mouseout", function() {
        audio.pause();
        audio.currentTime = 0; // Reset audio playback position
    });*/


    //Old Method
    /*function playClickSoundOnClass(className) {
        const elements = document.getElementsByClassName(className);
        const hoverSound = document.getElementById("click-sound");

        Array.from(elements).forEach(element => {
            element.addEventListener("click", () => {
                hoverSound.play();
            });
        });
    }*/
}





function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}


// Call a function to add hover and click sounds to buttons, passing the class name "clickable"
    document.addEventListener("DOMContentLoaded", function() {
    playHoverSoundOnClass("clickable");
    playClickSoundOnClass("clickable");
            
    // Use JavaScript to fetch and insert the menu HTML into the placeholder div.
    /*fetch('menu.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('menu-placeholder').innerHTML = data;
    });*/

    });


// Get all elements with the "fullscreenLink" class
    const fullscreenLinks = document.querySelectorAll('.fullscreenLink');

    fullscreenLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default link behavior

            // Get the URL from the href attribute of the clicked link
            const urlToOpen = link.getAttribute('href');

            // Check if the current page is in fullscreen mode
            if (document.fullscreenElement === null) {
                // If not in fullscreen, open the link normally
                window.location.href = urlToOpen;
            } else {
                // If in fullscreen, open the link in fullscreen
                const fullscreenElement = document.documentElement;

                fullscreenElement.requestFullscreen().then(() => {
                    window.location.href = urlToOpen;
                }).catch((error) => {
                        console.error('Error entering fullscreen mode:', error);
                });
            }
        });
    });

// Get all elements with the "fullscreenButton" class
    const fullscreenButtons = document.querySelectorAll('.fullscreenButton');

    fullscreenButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Get the URL from the data-url attribute of the clicked button
            const urlToOpen = button.getAttribute('data-url');

            if (document.fullscreenElement === null) {
                window.location.href = urlToOpen;
            } else {

                const fullscreenElement = document.documentElement;

                fullscreenElement.requestFullscreen().then(() => {
                    window.location.href = urlToOpen;
                }).catch((error) => {
                    console.error('Error entering fullscreen mode:', error);
                });
            }
        });
    });
