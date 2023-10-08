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

    applyGravity(){
        const gravity = 0.02;
        const maxVelocity = 5; //max fallgeschw.

        this.velocity += gravity
        this.velocity = Math.min(this.velocity, maxVelocity)

        this.positionY += this.velocity; //aktualisieren der y posi
        this.updatePosition(); // dom posi aktual
    }

    collisionCheck(obstaclesArray) {
        obstaclesArray.forEach(obstacle => {

            if (this.positionX < obstacle.positionX + 50 &&
                this.positionX + 50 > obstacle.positionX &&
                this.positionY < obstacle.positionY + obstacle.height &&
                this.positionY + 50 > obstacle.positionY) {
                // timer.resetTimer();
            }
        });
    }


    decreaseLife() {
        this.life -= 1;
    }
}