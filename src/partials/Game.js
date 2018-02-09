import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

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
			KEYS.z	
		);

		console.log(this.player1);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2), // y = (256-56)/2 = 100
			KEYS.up,
			KEYS.down	
		);
		console.log(this.player2);

		this.ball = new Ball(
			this.ballRadius,
			this.width,
			this.height
		);
	}

	render() {
		// More code goes here...
		this.gameElement.innerHTML = ''; //prevent infinite create

		let svg = document.createElementNS(SVG_NS, 'svg'); //creates svg element
		svg.setAttributeNS(null, 'width', this.width); //basically opening <svg> tag
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);

		this.board.render(svg);

		this.player1.render(svg);
		this.player2.render(svg);

		this.ball.render(svg);

		this.gameElement.appendChild(svg);
	}

}