import Character from './character.js';
import Obstacles from './obstacles.js';
import Timer from './timer.js';


export default class Game {
    constructor() {
        this.background = "url('../img/carina_bg.jpeg')";
        this.character = new Character({ positionX: 600, positionY: 345 });
        this.obstacles = new Obstacles();
        this.timer = new Timer();
        this.isPaused = false;
        // this.collisionDetected = false;
    }

    draw() {
        const container = document.querySelector('#container');
        container.style.backgroundImage = this.background;
    }

    reset() {
        this.character.positionX = 600;
        this.character.positionY = 345;
        this.timer.resetTimer();
        this.character.updatePosition();
        // this.collisionDetected = false;


        this.obstacles.obstaclesArray.forEach(obstacle => {
            obstacle.element.remove();
        });
        this.obstacles.obstaclesArray = [];

        this.obstacles.generate();

    }

    gameOver() {
        this.isPaused = true;
        document.getElementById('gameOverContainer').classList.remove('hidden');
    }
    
    restart() {
        this.reset();
        document.getElementById('gameOverContainer').classList.add('hidden');
        this.isPaused = false;
    }
 
}