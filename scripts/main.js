// Create variables
window.onload = function() {
    // Video
    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");
    var playIcon = document.getElementById("play-icon");
    var pauseIcon = document.getElementById("pause-icon");
    var muteIcon = document.getElementById("mute-icon");
    var unmuteIcon = document.getElementById("unmute-icon");

    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var pBar = document.getElementById("p");
    var volumeBar = document.getElementById("volume-bar");

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        if (video.paused === true) {
            // Play the video
            video.play();

            // Update the button text to pause
            // playButton.innerHTML = "Pause";
            showPauseIcon();
        } else {
            // Pause the video
            video.pause();

            // Update the button text to 'Play'
            // playButton.innerHTML = "Play";
            showPlayIcon();
        }
    });

    function showPlayIcon() {
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    };

    function showPauseIcon() {
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
    };

    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
        if (video.muted === false) {
            // Mute the video
            video.muted = true;

            // Update the button text
            // muteButton.innerHTML = "Unmute";
            showUnmuteIcon();
        } else {
            // Unmute the video
            video.muted = false;

            // Update the button text
            // muteButton.innerHTML = "Mute";
            showMuteIcon();
        }
    });

    function showUnmuteIcon() {
      unmuteIcon.classList.remove("hidden");
      muteIcon.classList.add("hidden");
    };

    function showMuteIcon() {
      muteIcon.classList.remove("hidden");
      unmuteIcon.classList.add("hidden");
    }

    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullscreen) {
            video.mozRequestFullscreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
    });

    // Event listener for the progress bar
    video.addEventListener("timeupdate", function() {
      var percent = Math.floor((100 / video.duration) * video.currentTime);
      pBar.value = percent;
      pBar.getElementsByTagName('span')[0].innerHTML = percent;
    }, false);

    // Event listener for the seek bar
    seekBar.addEventListener("change", function() {
      // Calculate the new time
      var time = video.duration * (seekBar.value / 100);

      // Update the video time
      video.currentTime = time;
    });

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;

      // Update the slider value
      seekBar.value = value;
    });

    // Pause the video when the slider handle is being dragged
    seekBar.addEventListener("mousedown", function() {
      video.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar.addEventListener("mouseup", function() {
      video.play();
    });

    // Event listener for the volume bar
    volumeBar.addEventListener("change", function() {
      // Update the video volume
      video.volume = volumeBar.value;
    });

};


// TIME DISPLAY ========================//
var video = document.getElementById("video");
// Current time display
$(video).bind("timeupdate", function(){
  $("#current_time").html(formatTime(this.currentTime));
});

// Duration display
$(video).bind("durationchange", function(){
  $("#duration").html(formatTime(this.duration));
});

// Write a function that allows us to format the time by passing in the number of seconds and it creates the 00:00 format.
function formatTime(seconds) {
  var seconds = Math.round(seconds);
  var minutes = Math.floor(seconds / 60);
  // Remaining seconds
  seconds = Math.floor(seconds % 60);
  // Add leading Zeros
  minutes = (minutes >= 10) ? minutes : "0" + minutes;
  seconds = (seconds >= 10) ? seconds : "0" + seconds;
  return minutes + ":" + seconds;
}
