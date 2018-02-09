import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.reset();

      // document.addEventListener('keydown', event => {
      //   switch(event.key) {
      //     case KEYS.spaceBar:
      //       this.pause = !this.pause;
      //       break;
      //   }
      // });
    }

    reset () {
		this.x = this.boardWidth / 2; // give ball position in middle
    this.y = this.boardHeight / 2;

    this.vy = 0;
    while ( this.vy === 0 ) { // run until it equals something not 0
      this.vy = Math.floor(Math.random() * 10 - 5); // -5 to +4 hmm
      this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    } //creating instance variable in method, we call this method right away in constructor


    wallCollision() {
      const hitLeft = this.x - this.radius <= 0;
      const hitRight = this.x + this.radius >= this.boardWidth;
      const hitTop = this.y - this.radius <= 0;
      const hitBottom = this.y + this.radius >= this.boardHeight;
      if (hitTop || hitBottom) {
        this.vy = -this.vy;
      } else if (hitLeft || hitRight) {
        // this.reset();
        this.vx= -this.vx;
        // add sound
      }
    }

    paddleCollision(player1, player2) {
      if (this.vx > 0) { //ball going right, to player2
        let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
        let [leftX, rightX, topY, bottomY] = paddle;

        if (
          (this.x + this.radius >= leftX)
          && (this.x + this.radius <= rightX)
          && (this.y >= topY && this.y <= bottomY)
        )
        {
          this.vx = -this.vx;
        }
      } else { //ball going left, to player1
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if (
              (this.x - this.radius <= rightX)
              && (this.x - this.radius >= leftX)
              && (this.y >= topY && this.y <= bottomY)
            )
            {
              this.vx = -this.vx;
              // add sound
            }
      }
    }  

    render(svg, player1, player2) {
    
    this.x += this.vx;
    this.y += this.vy;
    
    this.wallCollision();
    this.paddleCollision(player1, player2);

    //draw ball
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.radius);
		ball.setAttributeNS(null, 'cx', this.x );
		ball.setAttributeNS(null, 'cy', this.y );
		ball.setAttributeNS(null, 'fill', 'white');

    svg.appendChild(ball);
	}
}