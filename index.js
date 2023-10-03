'use strict'

import _ from 'lodash';
import './style.css';

class Game {
    constructor({ color }) {
        this.background = color;
        this.character = new Character({ positionX: 50, positionY: 345 });
        this.obstacles = new Obstacles();
    }

    draw() {
        const container = document.querySelector('#container');
        container.style.backgroundColor = this.background;
    }
}

class Character {
    constructor({ positionX, positionY }) {
        this.element = document.getElementById("character");
        this.positionX = positionX;
        this.positionY = positionY;
        this.velocity = 0;
        this.life = 3;
        this.updatePosition();
    }

    move(newPositionX, newPositionY) {
        this.positionX = newPositionX;
        this.positionY = newPositionY;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = this.positionX + 'px';
        this.element.style.top = this.positionY + 'px';
    }

    decreaseLife() {
        this.life -= 1;
    }
}

class Obstacle {
    constructor({ positionX }) {
        this.element = document.createElement('div');
        this.element.id = 'obstacle';
        this.positionX = positionX;
        this.positionY = 0; 
        this.updatePosition();

        
        document.getElementById('container').appendChild(this.element);
    }

    updatePosition() {
        this.element.style.left = this.positionX + 'px';
        this.element.style.bottom = this.positionY + 'px';
    }

    move() {
        this.positionX -= 5; 
        this.updatePosition();
    }
}




class Obstacles {
    constructor() {
        this.obstaclesArray = [];
    }

    generate() {
        const obstacle = new Obstacle({ positionX: 1024 });
        this.obstaclesArray.push(obstacle);
    }

    move() {
        this.obstaclesArray.forEach(obstacle => {
            obstacle.move();
        });
    }
}


let newGame;

function initialGame() {
    newGame = new Game({ color: 'blue' });
    newGame.draw();


    //generieren der Hindernisse
    newGame.obstacles.generate();
    
    // Event-Listener für Tastendrücke
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        let newX = newGame.character.positionX;
        let newY = newGame.character.positionY;

        if (key === 'w') newY -= 10;
        else if (key === 's') newY += 10;
        else if (key === 'a') newX -= 10;
        else if (key === 'd') newX += 10;

        newGame.character.move(newX, newY);
    });
    function gameLoop() {
        newGame.obstacles.move();
        requestAnimationFrame(gameLoop);
    }
    gameLoop();
}

initialGame();

