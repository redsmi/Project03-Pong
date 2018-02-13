# Pong Game

A basic pong game using SVGs.


##Functions

A ball is initialized in the middle of the board at start and after a goal.
Stretc goal: 2 balls are played simultaneously.
Track player scores up until 10, where game ends and message "Game Set" is displayed.
Audio sounds triggered on ball bounces.
	

Technologies used and personal reflections
HTML5, CSS, JavaScript, primarily in object-oriented style with ES.next classes which are the following: index, Game, Board, Paddle/Player, Ball, and Message.

It was helpful to first practice with SVGs by embeding them directly in the HTML document. The only challenge here was understanding how the viewport and viewbox coordinate system work together.
Then, creating and rendering SVG elements properties in the classes (excluding the linking/referencing code) became easier as it was also repetitive.

The biggest difficulty was linking and class referecing, excessive necessary use of "this". I found it hard to see and code how every piece connected.


## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down
