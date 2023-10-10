'use strict'

import _ from 'lodash';
import Game from './game.js';
// import '../style.css';


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

    }, 2500); //increase Interval als test (funktion increaseInterval gehört hier dazu)

    setInterval(() => { 
        newGame.timer.increment();
        newGame.timer.updatePoints();
    }, 1000);  // Timer Intervalsetzen 1000 = 1 s nicht ändern!!!!



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
        newGame.obstacles.move(newGame);
        // newGame.character.applyGravity()
        newGame.character.collisionCheck(newGame.obstacles.obstaclesArray, newGame);
        requestAnimationFrame(animate);
    }
    animate();
}




initialGame();

