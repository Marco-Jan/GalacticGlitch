import Character from './character.js';
import Obstacles from './obstacles.js';
import Timer from './timer.js';
import GameOverScreen from './GameOver.js';
import sounds from './soundboard.js';
import { saveHighscore } from './highscores.js';



export default class Game {
    constructor(playerName) {
        this.background = "url('../src/img/carina_bg.jpeg')";
        this.character = new Character({ positionX: 600, positionY: 345 });
        this.obstacles = new Obstacles();
        this.timer = new Timer();
        this.isPaused = false;
        this.playerName = playerName;
        this.collisionDetected = false;
        this.gameOverScreen = new GameOverScreen(() => this.resetGame());
    }

    displayName() {
        
        const playerNameDisplay = document.createElement('div');
        
        playerNameDisplay.innerText = `Player: ${this.playerName}`;
        playerNameDisplay.id = 'playerNameDisplayId';
        
        const container = document.getElementById('container');
        container.appendChild(playerNameDisplay);
    }
    

    draw() {
        const container = document.querySelector('#container');
        container.style.backgroundImage = this.background;
    }

    resetGame() {
        this.character.positionX = 600;
        this.character.positionY = 345;
        this.timer.resetTimer();
        this.character.updatePosition();
        // this.collisionDetected = false;


        this.obstacles.obstaclesArray.forEach(obstacle => {
            obstacle.element.remove();
        });
        this.obstacles.obstaclesArray = [];
        this.isPaused = false;
        this.obstacles.generate();

    }

    gameOver() {
        const currentScore = this.timer.score;
        saveHighscore(currentScore, this.playerName);
        this.gameOverScreen.show();
        sounds.backgroundSound.currentTime = 0;

    }



}
