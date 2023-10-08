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
        this.positionX -= 1;
        this.updatePosition();
        // console.log("x: ",this.positionX,"Y:", this.positionY);
    }
}

export default class Obstacles {
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


        console.log(this.obstaclesArray);
        

    }

    



    move() {        // bewegung der obctales, werden entfernt sobald die posi y -50 ist
        this.obstaclesArray.forEach((obstacle, index) => {
            obstacle.move();
            if (obstacle.positionX < -50) {
                obstacle.element.remove();  // E
                this.obstaclesArray.splice(index, 1);
            }
        })
    }

}