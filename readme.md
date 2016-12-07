# Instructions

## Project Instructions

- Embed the video using HTML. **Complete.**
- Check that the video works in at least 3 modern browsers.

  - You can use Chrome and Firefox, if you have a PC also check your site using Internet Explorer and if you have a Mac check it using Safari.

- Add the transcript below the video (as shown in the mockup file). **Complete.**

  - Use the captions.txt file for the text. Add appropriate `p` tags around the text.

- Style the page using the mockups as guides. **In progress.**

- Implement the play and pause buttons. **Complete.**

- Add volume button that lets you mute the sound or turn it on. **Complete.**

- Implement the fullscreen button. **Complete.**

- Implement the playback progress control.

  - A user should be able to click anywhere on the playback bar to jump to that part of the video. **Complete.**
  - As the video plays the playback bar should fill in. **Complete.**
  - As the video plays the current time should be displayed and updated e.g. 0:10 / 11:34.

- Use Javascript or CSS to hide and show the video player button on mouse hover states.

  - Only the progress bar should remain.

- As the media playback time changes, sentences in the transcript should highlight.

  - Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence.
  - You can use the captions.vtt file to see the times at which the words are spoken in the video.

- When submitting your project be sure to make a note in the comments which browsers you have tested with.

- Make sure to check your code is valid by running it through an HTML and CSS validator.

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
- <https://github.com/gschweizer/Interactive-Video-Player>
- [webdesignertroy](https://github.com/webdesignertroy/Techdegree-Project-7)

## Helpful Student Links

- [Building Custom Controls for HTML5 Videos - Treehouse Blog](http://blog.teamtreehouse.com/building-custom-controls-for-html5-videos)

- [Using JavaScript to control the HTML5 video player](https://msdn.microsoft.com/en-us/library/hh924823(v=vs.85).aspx)

## Questions for Mentor Session

- what's the difference between innerHTML and outerHTML?
- In this project, we've had to call methods on the video, e.g. video.play(); and video.pause();. I only knew about these from a Treehouse blog post how-to article. How would I find the list of available methods on my own? -
