import Character from './character.js';
import Obstacles from './obstacles.js';
import Timer from './timer.js';


export default class Game {
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