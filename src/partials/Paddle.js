import { SVG_NS } from '../settings';


export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down, player) { // color, upKey, downKey
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;

      this.player = player;
      this.keyState = {};
      document.addEventListener('keydown', event => {
        this.keyState[event.key || event.which] = true;
      }, true);
      document.addEventListener('keyup', event => {
        this.keyState[event.key || event.which] = false;
      }, true);

    } // constructor end


    moveUp() {
        // get the max number
        // either 0 or the y position minus speed
        this.y = Math.max( 0, this.y - this.speed);
    }

    moveDown() {
        this.y = Math.min(this.boardHeight - this.height, this.y + this.speed)
    }

    coordinates(x, y, width, height) {
      let leftX = x;
      let rightX = x + width;
      let topY = y;
      let bottomY = y + height;
      return [leftX, rightX, topY, bottomY];
    }
    
    //...
    render(svg) {

      // Player movement
    if (this.keyState['a'] && this.player === 'player1') {
      this.moveUp();
    }
    if (this.keyState['z'] && this.player === 'player1') {
      this.moveDown();
    }
    if (this.keyState['ArrowUp'] && this.player === 'player2') {
      this.moveUp();
    }
    if (this.keyState['ArrowDown'] && this.player === 'player2') {
      this.moveDown();
    }

        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
		rect.setAttributeNS(null, 'width', this.width);
		rect.setAttributeNS(null, 'height', this.height);
		rect.setAttributeNS(null, 'x', this.x);
		rect.setAttributeNS(null, 'y', this.y);

		svg.appendChild(rect);
	}
  }