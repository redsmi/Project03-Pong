import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Game {

	constructor(element, width, height) {
		this.element = element; // element = div id=game
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(this.element); //creating new instance variable and querying that
		// Other code goes here...
		this.board = new Board(this.width, this.height);


		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;
	
		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap, // x = 10
			((this.height - this.paddleHeight) / 2), // y = (256-56)/2 = 100
			KEYS.a,
			KEYS.z,
			'player1'	
		);

		console.log(this.player1);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2), // y = (256-56)/2 = 100
			KEYS.up,
			KEYS.down,
			'player2'	
		);
		console.log(this.player2);

		this.ball = new Ball(
			8,
			this.width,
			this.height
		);

		// this.ball2 = new Ball(
		// 	12,
		// 	this.width,
		// 	this.height
		// );

		// this.ball3 = new Ball(
		// 	20,
		// 	this.width,
		// 	this.height
		// );

		document.addEventListener('keydown', event => {
			switch(event.key) {
			  case KEYS.spaceBar:
				this.pause = !this.pause;
				break;
			}
		  });

		this.score1 = new Score(this.width / 2 -50, 30, 30);
		this.score2 = new Score(this.width / 2 +25, 30, 30); 
	} // end of constructor

	render() {
		// More code goes here...
		if(this.pause) {
			return;
		}

		this.gameElement.innerHTML = ''; //prevent infinite create

		let svg = document.createElementNS(SVG_NS, 'svg'); //creates svg element
		svg.setAttributeNS(null, 'width', this.width); //basically opening <svg> tag
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg, this.player1, this.player2);

		this.player1.render(svg);
		this.player2.render(svg);

		this.ball.render(svg, this.player1, this.player2);
		// this.ball2.render(svg);
		// this.ball3.render(svg);

		this.score1.render(svg, this.player1.score); //score is attached to player1/2 in the paddle class
		this.score2.render(svg, this.player2.score);
		
	}

}