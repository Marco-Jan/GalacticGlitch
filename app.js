class Game {
    constructor({ color }) {
        this.background = color;
        this.character = new Character();
        this.obstacles = new Obstacles();
    }

    draw() {
        const container = document.querySelector('#container');
        container.style.backgroundColor = this.background;

        const characterElement = document.querySelector('#character');
        characterElement.style.left = `${this.character.x}px`;
        characterElement.style.top = `${this.character.y}px`;
    }
}

class Character {
    constructor() {
        this.x = 50;  // starting x-coordinate
        this.y = 50;  // starting y-coordinate
        this.velocity = 0;  // initial velocity
    }

    move() {
        this.velocity += 1;  // gravity
        this.y += this.velocity;  // update y-coordinate based on velocity

    }
}

class Obstacles {
    constructor() {
        this.pipes = [];  // array to hold pipe objects
    }

    generate() {
        // Code to generate new pipes
    }

    move() {
        // Code to move the pipes
    }
}

let newGame;

function initialGame() {
    newGame = new Game({
        color: 'red'

    });

    newGame.draw()
}

initialGame();
console.log(newGame.background);

// Example: Updating character's position
newGame.character.move();
console.log(newGame.character.y);  // Should log 51, since the initial y-coordinate was 50
