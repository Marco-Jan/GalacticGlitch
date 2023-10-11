class Obstacle {
    constructor({ positionX, positionY, height, type }) {
        this.element = document.createElement('div');
        // this.element.className = 'obstacle';
        this.element.className = `obstacle ${type}`;

        
        if (type === 'asteroid') {
            this.element.style.backgroundImage = "url('../img/space_ship.jpg')";
            this.element.style.width = '50px';
            this.element.style.height = '50px';
        } else if (type === 'spaceship') {
            this.element.style.backgroundImage = "url('../img/asteroid-isolated.jpg')";
            this.element.style.width = '30px';
            this.element.style.height = '30px';
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
        const gap = 100;  
        const containerHeight = 500; 
        const minHeight = 10; 
        const maxHeight = containerHeight - gap - minHeight; 
    
        const obstacleBottomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    
        const obstacleTopHeight = containerHeight - gap - obstacleBottomHeight;
    
        const obstacleTopType = Math.random() > 0.5 ? 'asteroid' : 'spaceship';
    
        const obstacleBottomType = obstacleTopType === 'asteroid' ? 'spaceship' : 'asteroid'; 
        const obstacleTop = new Obstacle({ positionX: 1024, positionY: 0, height: obstacleTopHeight, type: obstacleTopType });
    
        const obstacleBottom = new Obstacle({ positionX: 1024, positionY: obstacleTopHeight + gap, height: obstacleBottomHeight, type: obstacleBottomType });
    
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