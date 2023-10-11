class Obstacle {
    constructor({ positionX, positionY, height, type }) {
        this.element = document.createElement('div');
        this.element.className = `obstacle ${type}`;

        if (type === 'asteroid') {
            this.element.style.backgroundImage = "url('../img/space_ship.png')";
            this.element.style.width = Math.floor(Math.random() * 500) + 50;
            this.element.style.height = 'auto';
            console.log(this.element.style.width);
        
        } else if (type === 'spaceship') {
            this.element.style.backgroundImage = "url('../img/asteroid-isolated.png')";
            this.element.style.width = Math.floor(Math.random() * 500) + 50;
            this.element.style.height = 'auto';
            console.log(this.element.style.width);
        }
        

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
        this.positionX -= 1;  // Geschwindigkeit der Hindernisse
        this.updatePosition();
    }
}



export default class Obstacles {
    constructor() {
        this.obstaclesArray = [];

    };

    generate() {
        const containerHeight = 768;  // Spielfeldhöhe
        const minHeight = 50;  // Mindesthöhe eines Hindernisses
        const gap = Math.floor(Math.random() * 700) + 50;  // dynamische Lückengröße zwischen 50 und 150
        const maxHeight = containerHeight - gap - minHeight;  // Maximale Höhe eines Hindernisses
   

        const randomPositionY = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
        const obstacleTopType = Math.random() > 0.5 ? 'asteroid' : 'spaceship';
        const obstacleBottomType = Math.random() > 0.5 ? 'asteroid' : 'spaceship';

        const obstacleTop = new Obstacle({ positionX: 1024, positionY: randomPositionY, height: 50, type: obstacleTopType });
        const obstacleBottom = new Obstacle({ positionX: 1024, positionY: randomPositionY + gap, height: 50, type: obstacleBottomType });

        this.obstaclesArray.push(obstacleBottom, obstacleTop);
        console.log(this.obstaclesArray);
    }






    move(newGame) {
        if (!newGame.isPaused) {
            this.obstaclesArray.forEach((obstacle, index) => {
                obstacle.move();
                if (obstacle.positionX < -50) {
                    obstacle.element.remove();
                    this.obstaclesArray.splice(index, 1);
                }
            });
        }
    }

}