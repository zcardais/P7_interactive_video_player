# Instructions

## Project Instructions

- ~~Embed the video using HTML.~~
- ~~Check that the video works in at least 3 modern browsers.~~

- ~~Add the transcript below the video (as shown in the mockup file).~~

  - ~~Use the captions.txt file for the text. Add appropriate `p` tags around the text.~~

- ~~Style the page using the mockups as guides.~~

- ~~Implement the play and pause buttons.~~

- ~~Add volume button that lets you mute the sound or turn it on.~~

- ~~Implement the fullscreen button.~~

- **TODO**: Implement the playback progress control.

  - **TODO**: A user should be able to click anywhere on the playback bar to jump to that part of the video.

  - ~~As the video plays the playback bar should fill in.~~

  - **TODO**: As the video plays the current time should be displayed and updated e.g. 0:10 / 11:34.

- **TODO**: Use Javascript or CSS to hide and show the video player button on mouse hover states.

  - **TODO**: Only the progress bar should remain.

- **TODO**: As the media playback time changes, sentences in the transcript should highlight.

  - **TODO**: Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence.
  - You can use the captions.vtt file to see the times at which the words are spoken in the video.

- **TODO**: When submitting your project be sure to make a note in the comments which browsers you have tested with.

- **TODO**: Make sure to check your code is valid by running it through an HTML and CSS validator.

  - Links to the validators can be found in the Project Resources. This will help you spot any errors that might be in your code.
  - There are a few exceptions that you don't need to fix:

    - Don't worry about any warnings, we just need you to check any errors that might be there.
    - If CSS validator flags use of calc, vendor prefixes or pseudo-elements/pseudo-classes these errors should be ignored.
    - If HTML validator flags use of pipe ('|') in Google font links/URLs this error can also be ignored.

- You should also check for issues with your JavaScript code using JSHint, linked in the Project Resources.

  - JSHint may show you some warnings, so make sure to check through those for any potential problems.
  - You do not need to fix every warning listed but reviewing them can be useful.

- **NOTE**: A good practice is to check your project for cross browser compatibility. Making sure that it looks and functions correctly in multiple (at least three) browsers is an important part of being a top-notch developer. If you want, leave a comment to the project reviewer about which browser(s) the project was checked to ensure they are seeing things as you have designed them.

- Some browser options:

  - Google Chrome
  - Mozilla Firefox
  - Internet Explorer/Edge
  - Safari

## Extra Credit

- Embed the .vtt file as a closed captioning track and add a button to video controls to toggle captions on and off.
- A creative and thoughtful responsive design.
- Playback speed control or other helpful controls.
- Volume control so viewer can adjust the volume level, not just mute or on.
- Playback controls include buffering progress of the downloaded video.
- When the user clicks on any sentence in the transcript the video player jumps to the appropriate time in the video.

## Notes from Treehouse Courses

- create a custom skin for mejs, e.g. mejs-treehouse.css

## Helpful Student Projects

- <https://bellaratmelia.github.io/fewd-7-interactive-video-player/>
- <https://twoodman.github.io/th-fewd-project-7/>
- <https://github.com/gschweizer/Interactive-Video-Player>
- [webdesignertroy](https://github.com/webdesignertroy/Techdegree-Project-7)

## Helpful Links

- [Building Custom Controls for HTML5 Videos - Treehouse Blog](http://blog.teamtreehouse.com/building-custom-controls-for-html5-videos)

- [1\. HTML5 Custom Video Player Controls JavaScript Programming Tutorial]<https://www.youtube.com/watch?v=V8_wEZD160g>)

- [3\. HTML5 Custom Video Controls JavaScript Time Programming Tutorial]<https://www.youtube.com/watch?v=KhvOFA9v_-Y>)

- [HTML Audio/Video DOM Reference]<http://www.w3schools.com/TAGS/ref_av_dom.asp>)

- [Using JavaScript to control the HTML5 video player](http://zeffective.d.pr/fWLk)

## Questions for Mentor Sessions

### December 8, 2016

- In its current working state, when the user mutes the video the text toggles between "Mute" and "Unmute", which does not match the mockups. How do I display the volume-on.png icon when the player is unmuted and the volume-off.png icon when the user mutes the player? The code for this is on lines 39-45 in scripts/main.js.

- Same question as above, but for the Play and Pause icons. The code for this is on lines 22-28 in scripts/main.js

- Where'd the seek-bar go? I revised the markup in index.html to show the icons for play, pause, mute and fullscreen in place of text. Unfortunately, this has broken the styling of my seek bar as it no longer displays. What's going on?

- General Questions

  - What's the difference between innerHTML and outerHTML?

  - This project has required us to call methods on the video, e.g. video.play(); and video.pause();. I only knew about these from a Treehouse blog post how-to article. How would I find the list of available methods on my own?

  MENTOR SESSION WITH PAUL **Project 7: Interactive Video**

  - Replicate play/pause icon html and JavaScript code for the Mute/Unmute button display on video player controls. Use this link to see how to add and remove classes with JavaScript: [Add & Remove Classes With JavaScript Property classList](http://callmenick.com/post/add-remove-classes-with-javascript-property-classlist)

  - Use this link to create the seek-bar and style it: [The progress element](http://html5doctor.com/the-progress-element/)

  - Use this link to do the captions task, whereby the user can click on a word of the transcript and the video will jump directly to that marker: [Getting Started With the Track Element](https://www.html5rocks.com/en/tutorials/track/basics/)

### December 19, 2016

IMPLEMENT THE PLAYBACK PROGRESS CONTROL.<br>
[ ] **A user should be able to click anywhere on the playback bar to jump to that part of the video.**<br>
[x] As the video plays the current time should be displayed and updated e.g. 0:10 / 11:34\. **(Is it okay that I used jQuery?)**

USE JAVASCRIPT OR CSS TO HIDE AND SHOW THE VIDEO PLAYER BUTTON ON MOUSE HOVER STATES.<br>
[ ] **Only the progress bar should remain.**<br>

AS THE MEDIA PLAYBACK TIME CHANGES, SENTENCES IN THE TRANSCRIPT SHOULD HIGHLIGHT.<br>
[ ] **Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence.**<br>
[ ] You can use the captions.vtt file to see the times at which the words are spoken in the video.
