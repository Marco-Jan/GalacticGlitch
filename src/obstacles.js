class Obstacle {
    constructor({ positionX, positionY, type }) {
        this.element = document.createElement('div');
        this.element.className = `obstacle ${type}`;

        this.width = Math.floor(Math.random() * 250);  // Random width between 50 and 500
        this.height = this.width;

        this.innerX = this.positionX + 10;  // Offset
        this.innerY = this.positionY + 10;  //  Offset
        this.innerWidth = this.width - 50;  //  innere hitbox Größe
        this.innerHeight = this.height - 50; // innere hitbox Größe

        if (type === 'asteroid') {
            this.element.style.backgroundImage = "url('../src/img/space_ship.png')";
            this.element.style.width = this.width + 'px';
            this.element.style.height = this.height + 'px';

        } else if (type === 'spaceship') {
            this.element.style.backgroundImage = "url('../src/img/asteroid-isolated.png')";
            this.element.style.width = this.width + 'px';
            this.element.style.height = this.height + 'px';

            // console.log(this.element);
        }


        this.positionX = positionX;
        this.positionY = positionY;


        this.element.style.height = this.height + 'px';
        this.updatePosition();
        document.getElementById('container').appendChild(this.element);
    }

    updatePosition() {
        this.element.style.left = this.positionX + 'px';
        this.element.style.top = this.positionY + 'px';
        this.innerX = this.positionX + 10;
        this.innerY = this.positionY + 10;
    }

    move() {
        this.positionX -= 2;  // Geschwindigkeit der Hindernisse
        this.updatePosition();
    }
}

export default class Obstacles {
    constructor() {
        this.obstaclesArray = [];
    };

    generate() {
        const container = document.getElementById('container');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;  // Spielfeldhöhe
        const minHeight = 20;  // Mindesthöhe eines Hindernisses 
        const gap = 250;
        const maxHeight = containerHeight - gap - minHeight;  // Maximale Höhe eines Hindernisses

        const randomPositionY = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
        const randomHeight = Math.floor(Math.random() * 450) + 50;  // Random height between 50 and 500

        // random Meth zum ermittel welche objekt. 
        const obstacleType = Math.random() > 0.5 ? 'asteroid' : 'spaceship';

        const obstacleTop = new Obstacle({ positionX: containerWidth, positionY: randomPositionY, height: randomHeight, type: obstacleType });
        const obstacleBottom = new Obstacle({ positionX: containerWidth, positionY: randomPositionY + gap, height: randomHeight, type: obstacleType });

        this.obstaclesArray.push(obstacleBottom, obstacleTop);
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
