import {SVG_NS} from '../settings';

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) { // color, upKey, downKey
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;
    //   this.up = up;
    //   this.down = down;


      document.addEventListener('keydown', event => {
        switch (event.key) {
            case up:
              this.moveUp();
              break;
            case down:
              this.moveDown();
              break;
          }
      }); //key event end
    } // constructor end


    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    //...
    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
		rect.setAttributeNS(null, 'width', this.width);
		rect.setAttributeNS(null, 'height', this.height);
		rect.setAttributeNS(null, 'x', this.x);
		rect.setAttributeNS(null, 'y', this.y);

		svg.appendChild(rect);
	}
  }