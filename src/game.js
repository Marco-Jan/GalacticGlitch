import Character from './character.js';
import Obstacles from './obstacles.js';
import Timer from './timer.js';


export default class Game {
    constructor({ color }) {
        this.background = color;
        this.character = new Character({ positionX: 300, positionY: 345 });
        this.obstacles = new Obstacles();
        this.timer = new Timer();
        this.isPaused = false;
        this.collisionDetected = false;
    }

    draw() {
        const container = document.querySelector('#container');
        container.style.backgroundColor = this.background;
    }

    reset() {
        this.character.positionX = 300;
        this.character.positionY = 345;
        this.timer.resetTimer();
        this.character.updatePosition();

    
        this.obstacles.obstaclesArray.forEach(obstacle => {
            obstacle.element.remove();
        });
        

    
        this.obstacles.obstaclesArray = [];
        setInterval(() => { 
            this.obstacles.generate(this); //this geht hier im calllback verloren 
        }, 2500);
        
    
    }

    togglePause() {
        this.isPaused = !this.isPaused;
    
    }
    
    
    


}