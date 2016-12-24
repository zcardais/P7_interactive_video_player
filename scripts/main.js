// Create variables
$(document).ready(function() {
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
    var pBar = document.getElementById("p");
    var volumeBar = document.getElementById("volume-bar");

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        if (video.paused === true) {
            // Play the video
            video.play();

            // Update the Pause icon
            showPauseIcon();
        } else {
            // Pause the video
            video.pause();

            // Update the Play icon
            showPlayIcon();
        }
    });

    function showPlayIcon() {
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    }

    function showPauseIcon() {
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
    }

    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
        if (video.muted === false) {
            // Mute the video
            video.muted = true;

            // Update the button text
            showUnmuteIcon();
        } else {
            // Unmute the video
            video.muted = false;

            // Update the button text
            showMuteIcon();
        }
    });

    function showUnmuteIcon() {
      unmuteIcon.classList.remove("hidden");
      muteIcon.classList.add("hidden");
    }

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

    // Event listener for the progress bar
    pBar.addEventListener("change", function() {
      // Calculate the new time
      var time = video.duration * (pBar.value / 100);

      // Update the video time
      video.currentTime = time;
    });

    // Update the progress bar as the video plays
    video.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;

      // Update the slider value
      pBar.value = value;
    });

    // Pause the video when the slider handle is being dragged
    pBar.addEventListener("mousedown", function() {
      video.pause();
    });

    // Play the video when the slider handle is dropped
    pBar.addEventListener("mouseup", function() {
      video.play();
    });

    // Event listener for the volume bar
    volumeBar.addEventListener("change", function() {
      // Update the video volume
      video.volume = volumeBar.value;
    });

    var highlightParagraph = function(paragraphId){
      var currentParagraph = $('#'+ paragraphId);
      if (!currentParagraph.hasClass('active')) {
        $(".captionSection").removeClass('active');
        currentParagraph.addClass('active');
      }
    };

    video.addEventListener("timeupdate", function() {
      var currentTime = video.currentTime;
      if (currentTime > 0.00 && currentTime < 4.130) {
        highlightParagraph('transcript-1');
      } else if (currentTime > 4.130 && currentTime < 7.535) {
        highlightParagraph('transcript-2');
      } else if (currentTime > 7.535 && currentTime < 11.270) {
        highlightParagraph('transcript-3');
      } else if (currentTime > 11.270 && currentTime < 13.960) {
        highlightParagraph('transcript-4');
      } else if (currentTime > 13.960 && currentTime < 17.940) {
        highlightParagraph('transcript-5');
      } else if (currentTime > 17.940 && currentTime < 22.370) {
        highlightParagraph('transcript-6');
      } else if (currentTime > 22.370 && currentTime < 26.880) {
        highlightParagraph('transcript-7');
      } else if (currentTime > 26.880 && currentTime < 30.920) {
        highlightParagraph('transcript-8');
      } else if (currentTime > 30.920 && currentTime < 34.730) {
        highlightParagraph('transcript-9');
      } else if (currentTime > 34.730 && currentTime < 39.430) {
        highlightParagraph('transcript-10');
      } else if (currentTime > 39.430 && currentTime < 41.190) {
        highlightParagraph('transcript-11');
      } else if (currentTime > 41.190 && currentTime < 46.300) {
        highlightParagraph('transcript-12');
      } else if (currentTime > 46.300 && currentTime < 49.270) {
        highlightParagraph('transcript-13');
      } else if (currentTime > 49.270 && currentTime < 53.760) {
        highlightParagraph('transcript-14');
      } else if (currentTime > 53.760 && currentTime < 57.780) {
        highlightParagraph('transcript-15');
      } else if (currentTime > 57.780 && currentTime < 60.150) {
        highlightParagraph('transcript-16');
      }
    }, false);

    // TIME DISPLAY ========================//
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

    // Click anywhere on the playback bar to jump to that part of the video.
    pBar.addEventListener("click", seek);

    function seek(e) {
      var percent = e.offsetX / this.offsetWidth;
      video.currentTime = percent * video.duration;
      pBar.value = percent * 100;
    }

});
