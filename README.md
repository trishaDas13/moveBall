# moveBall

Hosting Link: https://trishadas13.github.io/moveBall/
<hr>
<h2>🟡 HTML Code description🟡</h2>
In the "sky" section, there is a "ball" element, which may represent an object floating in the sky.

In the "ground" section, there are several "divider" elements. These elements could represent divisions or markings on the ground.

Overall, this structure is quite abstract, and its interpretation depends on the context and the specific styles and interactions applied to these elements using CSS and JavaScript.
<hr>
<h2>🟡 CSS Code description🟡</h2>
The universal selector (*) is used to reset the margin, padding, and box-sizing properties for all HTML elements, ensuring consistent spacing and sizing.

The body element is set to full width and height (100vw and 100vh) to cover the entire viewport.

The .ball class styles a ball element. It's a circle (div) with a height and width of 30px, crimson background color, and a border-radius of 50% to make it round. The position: relative style is applied to enable animation. The animation property triggers the "bounce" animation, which lasts for 0.9 seconds and repeats infinitely.

The @keyframes animation named "bounce" defines a sequence of keyframes for the ball's animation:

At 10% of the animation duration, the ball's size remains unchanged.
At 50%, the ball's height changes to 10px, width to 37px, and it moves vertically down by 100px (transform: translateY(100px)).
At 75%, the ball regains its original size (height: 30px, width: 37px).
At 100%, the ball moves back up to its original position (transform: translateY(0px)).
The .sky class styles a blue sky background, taking 80% of the viewport's height and spanning the full width.

The .ground class styles a ground element, representing the ground area. It's green, 20% of the viewport's height, and full-width. This ground is further divided into two sections by the .divider class, which draws a thin horizontal line with a dark red color and a slight vertical position adjustment (top: -20px). This creates the visual separation between the sky and the ground.
<hr>
<h2>🟡 JS Code description🟡</h2>
1.	It selects an HTML element with the class "ball" and stores it in a variable called ball.
2.	It adds an event listener to the document, specifically listening for the "keydown" event. This event will be triggered when a key is pressed.
3.	Inside the playGame function, it first calculates the height and width of the background (the entire HTML document) and the width of the element (the ball).
4.	It checks the key code (e.keyCode) of the key that was pressed.
5.	Depending on the key pressed, it checks if the ball can be moved in a certain direction (right, down, left, or up) without going out of the visible area (viewport) and then updates the ball's position accordingly.
      •	If the right arrow key or "D" key is pressed (key == "68" || key == "39"), it moves the ball to the right by 10 pixels.
      •	If the down arrow key or "S" key is pressed (key == "83" || key == "40"), it moves the ball down by 10 pixels.
      •	If the left arrow key or "A" key is pressed (key == "65" || key == "37"), it moves the ball to the left by 10 pixels.
      •	If the up arrow key or "W" key is pressed (key == "87" || key == "38"), it moves the ball up by 10 pixels.
6.	It keeps track of the up and left values to maintain the current position of the ball.
<hr>
<h2>🟡Summary🟡</h2>
In summary, this code creates a simple animation with a ball that bounces up and down against a blue sky and green ground. The ball's motion is defined using keyframes in the "bounce" animation, giving the impression of it bouncing up and down continuously.
this code allows you to control the position of the ball element using the arrow keys or "WASD" keys, ensuring that it stays within the visible area of the viewport. It's a simple example of keyboard-based interactive content on a webpage.
