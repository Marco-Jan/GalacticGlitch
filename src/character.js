export default class Character {
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


    collisionCheck(obstaclesArray, newGame) {
        obstaclesArray.forEach(obstacle => {

            if (this.positionX < obstacle.positionX + 50 &&
                this.positionX + 50 > obstacle.positionX &&
                this.positionY < obstacle.positionY + obstacle.height &&
                this.positionY + 50 > obstacle.positionY) {

                newGame.collisionDetected = true;
                 
                setTimeout(() => {
                    newGame.reset();  
                }, 500);

                newGame.gameOver();

                // newGame.togglePause();
                console.log('game over');
            }
        });
    }
    applyGravity() {
        const gravity = 0.01;
        this.velocity += gravity;
        this.positionY += this.velocity;
        this.updatePosition();
    }
    
}