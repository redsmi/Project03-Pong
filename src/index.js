import './styles/game.css';
import Game from './partials/Game'

// create a game instance, instantiating Game
const game = new Game('game', 512, 256);
// reference to index.html div id=game, giving it width and height
(function gameLoop() {
    game.render();
    // console.log('something')
    requestAnimationFrame(gameLoop);
})();
// () immediately invoke function expression
// requestAnimationFame method to get 60fps, if leave tab will not continue
