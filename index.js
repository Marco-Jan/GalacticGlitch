'use strict'

// import _ from 'lodash';
// import './style.css';

class Game {
    constructor({ color }) {
        this.background = color;
        this.character = new Character({ positionX: 300, positionY: 345 });
        this.obstacles = new Obstacles();
        this.timer = new Timer();
    }

    draw() {
        const container = document.querySelector('#container');
        container.style.backgroundColor = this.background;
    }
}
class Timer {
    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'timer';
        document.getElementById('container').appendChild(this.element);
        this.time = 0;
        this.update();
    }
    update() {
        this.element.innerText = this.time;
    }

    increment() {
        this.time++;
        this.update();
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

    collisionCheck() {
        newGame.obstacles.obstaclesArray.forEach(obstacle => {

            if (this.positionX < obstacle.positionX + 50 &&
                this.positionX + 50 > obstacle.positionX &&
                this.positionY < obstacle.positionY + obstacle.height &&
                this.positionY + 50 > obstacle.positionY) {
                console.log('Game Over');
            }
        });
    }


    decreaseLife() {
        this.life -= 1;
    }
}

class Obstacle {
    constructor({ positionX, positionY, height }) {
        this.element = document.createElement('div');
        this.element.className = 'obstacle';
        this.positionX = positionX;
        this.positionY = positionY;
        this.height = height;
        this.element.style.height = this.height + 'px';
        this.updatePosition();
        document.getElementById('container').appendChild(this.element);
    }

    updatePosition() {
        this.element.style.left = this.positionX + 'px';
        this.element.style.top = this.positionY + 'px';
    }


    move() {
        this.positionX -= 1.5;
        this.updatePosition();
        // console.log("x: ",this.positionX,"Y:", this.positionY);
    }
}






class Obstacles {
    constructor() {
        this.obstaclesArray = [];

    };

    generate() {
        const gap = 100;  // Abstand zwischen den Hindernissen

        const containerHeight = 768; // Höhe des Containers
        const minHeight = 100; // Minimale Höhe eines Hindernisses
        const maxHeight = containerHeight - gap - minHeight; // Maximale Höhe eines Hindernisses

        // Zufällige Höhe für das untere Hindernis
        const obstacleBottomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

        // Höhe für das obere Hindernis
        const obstacleTopHeight = containerHeight - gap - obstacleBottomHeight;

        // Berechnung der Position für das obere Hindernis, wenn von oben gemessen wird
        const obstacleTop = new Obstacle({ positionX: 1024, positionY: 0, height: obstacleTopHeight });

        // Ändern der Position für das untere Hindernis, wenn von oben gemessen wird
        const obstacleBottom = new Obstacle({ positionX: 1024, positionY: obstacleTopHeight + gap, height: obstacleBottomHeight });

        this.obstaclesArray.push(obstacleBottom, obstacleTop);
        

    }



    move() {        // bewegung der obctales, entfernen sobald die posi y -50 ist
        this.obstaclesArray.forEach((obstacle, index) => {
            obstacle.move();
            if (obstacle.positionX < -50) {
                obstacle.element.remove();  // E
                this.obstaclesArray.splice(index, 1);
            }
        })
    }
}


let newGame;

// function increaseInterval(){  //Test funktion für die erhöhung des abstandes der Hindernisse
//     let count = 500;

// const intervalID = setInterval(() => {
//     if (count < 1000) {
//         count += 50;
//         console.log(count);
//     } else {
//         clearInterval(intervalID); 
//     }
// }, 2000);



// }

function initialGame() {        //erstellt neues Game Objekt
    newGame = new Game({ color: 'blue' });
    newGame.draw();



    setInterval(() => { // abstand zwischen erzeugen neuer hinternisse 
        newGame.obstacles.generate();

    }, 3000); //increase Interval als test (funktion increaseInterval gehört hier dazu)

    setInterval(() => { // Timer Intervalsetzen
        newGame.timer.increment();
    }, 1000);



    // Event-Listener für die Tastendrücke
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
    function animate() {
        newGame.obstacles.move();
        newGame.character.collisionCheck();
        requestAnimationFrame(animate);
    }
    animate();
}


initialGame();

