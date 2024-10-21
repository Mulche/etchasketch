A webpage based program that works similar to Etch-A-Sketch.

# FEATURES:

-The default grid size is 16 boxes by 16 boxes.

-The user can change the grid size by entering a number between 2 and 100 into the input box.

-Pressing "Enter" or clicking the "Set Size" button will change the grid size, but only with a valid input.

-Each mouseover event will darken each box slightly, allowing the use of shading and detail.

# ABOUT:

This was a very fun project, but I hit my limit toward the end. I wanted to add in one other piece of functionality that I just could not figure out. I wanted it to be so that if the user clicked while mousing over a "box" element, it would toggle the drawing mode on or off. So basically you could click and it would stop darkening the boxes, allowing to make better drawings. Of course this is not how an Etch-A-Sketch works, but I just thought it would make the program more fun.

The issue I ran into was that the .removeEventListener method doesn't seem to work the same way as the .addEventListener one. So when I tried to use a flag "drawingMode", and have that remove the event listeners from all the boxes, it wouldn't work. I read a lot about why this was the case but still didn't fully understand why. I may revisit this project down the line, but for now I want to move on with The Odin Project curriculum, considering I have technically completed this project in addition to one of the bonus challenges.
