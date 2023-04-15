class Game {
    constructor(){
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('#game-screen');
        this.gameEndScreen = document.querySelector('#game-end');
        this.player = null;
        this.height = 600;
        this.width = 500;
        this.obstacle = [];
        this.score = 0;
        this.loves = 3;
        this.gameIsOver = false;
    }

    start() {
// 1 set the height and the width of the game screen
this.gameScreen.style.height = `${this.height}px`;
this.gameScreen.style.width = `${this.width}px`;

// 2 hide the start screen
this.startScreen.style.display = 'none';

// 3 show the game screen
this.gameScreen.style.display = 'block';

// 4 start the gameLoop() method
this.gameLoop();
}

    gameLoop() {
//  1 interrupt the function to stop the loop if "gameIsOver" is set to "true"
if (this.gameIsOver) {
    return
}

// 2 invoke the update() method to update game state
this.update();

// 3 invoke itself to ensure that the game loop function runs repeatedly
window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {}

    endGame() {}
}