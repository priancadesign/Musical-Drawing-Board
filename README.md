# Musical-Drawing-Board
<h3>Introduction</h3>
This tutorial explains how to create a musical stamp drawing board using Makey Makey. The idea behind this project was to create a fun way for people to express their creative ingenuities. People can use our drawing board to simultaneously create a unique amalgamation of art and music that is not only a fun way to express yourself but is also a great artistic experience.

There are rubber stamps with different shapes connected to the alphabet keys on the circuit board. Each stamp has a sound effect attached to it. On stamping the paper, the sound effects connected to the stamp are played and animated artworks are displayed on the computer screen simultaneously.

The welcome screen lets the user select a genre of music of their liking (e.g.: pop, rock, country, etc.). Based on the genre selected, the screen will play a background music and each stamp will play a unique musical note when stamped on paper. The same stamp shape will be converted to an animation on screen and will appear on the digital artboard.

<h3>Here’s What You Will Need:</h3>
<ul>
  <li>Makey Makey Kit</li>
  <li>Rubber stamps</li>
  <li>Color pad for the stamps</li>
  <li>Aluminium foil</li>
  <li>Drawing Paper</li>
  <li>Salt Water solution</li>
  <li>Tape</li>
</ul>

<h3>Steps:</h3>
<ol>
  <li>Plug the Makey Makey USB cable to your computer. </li>
  <li>Remap the makey makey keypress events to match the ones in your JavaScript code using http://www.makeymakey.com/remap/ if required.</li>
  <li>Attach a thin strip of aluminium foil to the stamps (all the way to the rubber part of the stamps).</li>
  <li>Connect one end of the alligator clip to the aluminium strip and the other end to the keypress event on the Makey Makey.</li>
  <li>One end of the alligator clip for the ground connection is connected to sheet of aluminium kept below the drawing sheet. The other end is connected to the ground connection on the Makey Makey board.</li>
  <li>Make a solution of salt and water and spray a bit of this all over on the sheet of drawing paper. This makes the paper conductive and completes the circuit.</li>
  <li>Open the welcome screen (index.html) and select a genre of music of your choice. </li>
  <li>Take any stamp, stamp it on the color pad and then stamp it on the paper.</li>
</ol>

<h3>The Code:</h3>
<ul>
  <li>The index.html is the Welcome screen which allows the user to select a genre of music of their liking. Once the genre is selected,    a page with the selected music type is loaded and the selected music will start playing in the background.</li>
  <li>Each stamp is connected to keypress events in the JavaScript code. </li>
  <li>All the keypress events have assigned CSS animations in the CSS file.</li>
  <li>The HTML5 audio tag is used for controlling the music. You will need to add background music and sound effects in the "sounds"        folder.</li>
</ul>
