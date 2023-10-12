
export default class Character {
    constructor({ positionX, positionY }) {
        this.element = document.getElementById("character");
        this.positionX = positionX;
        this.positionY = positionY;
        this.element.style.backgroundImage = "url('../img/spaceShip_Char.png')";
        this.velocity = 0;
        this.life = 3;
        this.innerWidth = 40;  // Oder eine andere Größe, die zum inneren Bild des Charakters passt
        this.innerHeight = 40;
        this.rocketFlame = document.createElement('div');
        this.rocketFlame.className = 'flame';
        this.rocketFlame.style.display = 'none';
        this.rocketFlame.style.backgroundImage = "url('../img/flame.png')";
        document.getElementById('container').appendChild(this.rocketFlame);
        this.updatePosition();
    }

    move(newPositionX, newPositionY) {
        // Grenzwerte 
        const container = document.getElementById('container');
        const maxOben = container.offsetWidth - this.innerWidth;  // Berücksichtige die Breite des Charakters
        const maxUnten = container.offsetHeight - this.innerHeight;  // Berücksichtige die Höhe des Charakters
    
        // Überprüfen, ob die neue Position innerhalb der Grenzen liegt
        if (newPositionX < 0) newPositionX = 0;
        if (newPositionX > maxOben) newPositionX = maxOben;
        if (newPositionY < 0) newPositionY = 0;
        if (newPositionY > maxUnten) newPositionY = maxUnten;
    
        // Position aktualisieren
        this.positionX = newPositionX;
        this.positionY = newPositionY;
        this.updatePosition();
    }
    

    updatePosition() {
        this.element.style.left = this.positionX + 'px';
        this.element.style.top = this.positionY + 'px';
        this.rocketFlame.style.left = this.positionX + 45 + 'px';
        this.rocketFlame.style.top = this.positionY + 90 + 'px';
        this.innerX = this.positionX + 5;
        this.innerY = this.positionY + 5;
    }

    collisionCheck(obstaclesArray, newGame) {
        obstaclesArray.forEach(obstacle => {
            if (this.innerX < obstacle.innerX + obstacle.innerWidth &&
                this.innerX + this.innerWidth > obstacle.innerX &&
                this.innerY < obstacle.innerY + obstacle.innerHeight &&
                this.innerY + this.innerHeight > obstacle.innerY) {

                newGame.collisionDetected = true;
                setTimeout(() => {
                    newGame.reset();
                }, 500);

                newGame.gameOver();
                console.log('game over');
            }
        });
    }

    applyGravity() {
        const gravity = 0.01;
        this.velocity += gravity;
        this.positionY += this.velocity;
    
        // Dynamisch die untere Grenze ermitteln
        const container = document.getElementById('container');
        const maxY = container.offsetHeight - this.innerHeight;  // Containerhöhe - Char
        console.log(container.offsetHeight);
        if (this.positionY > maxY) {
            this.positionY = maxY;
            this.velocity = 0;  
        }
    
        this.updatePosition();
    }

    toggleFlame(visible) {
        this.rocketFlame.style.display = visible ? 'block' : 'none'; // Wenn visible true ist, dann zeige die Flamme, sonst nicht
    }
}
