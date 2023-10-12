'use strict'

import _ from 'lodash';
import Game from './game.js';
import initStartPage from './startPage.js';






initStartPage();

let newGame;

let obstacleInterval = 2500;

export function initialGame() {        //erstellt neues Game Objekt
    newGame = new Game();
    newGame.draw();



    

    setInterval(() => { 
        newGame.obstacles.generate('asteroid');
    }, 3000);  // Asteroiden werden alle 500 ms generiert
    
    setInterval(() => { 
        newGame.obstacles.generate('spaceship');
    }, 2500);  // Raumschiffe werden alle 700 ms generiert
    
    
    setInterval(() => { 
        newGame.timer.increment();
    }, 1000);  // Timer Intervalsetzen 1000 = 1 s nicht ändern!!!!



    // Event-Listener für die Tastendrücke
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        let newX = newGame.character.positionX;
        let newY = newGame.character.positionY;

        if (key === 'w') {
            newGame.character.velocity = -1;
            newGame.character.toggleFlame(true);
            rocketSound.currentTime = 0;
            rocketSound.play();

        }else if (key === 's') newGame.character.velocity = 1;
        else if (key === 'a') newX -= 10;
        else if (key === 'd') newX += 10;

        newGame.character.move(newX, newY);
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'w') {
            newGame.character.toggleFlame(false);
        }
    });


    document.getElementById('restartButton').addEventListener('click', () => {
        clearInterval(obstacleInterval);  
        newGame.restart();
        // obstacleInterval = setInterval(() => {
        //     newGame.obstacles.generate();
        // }, 2500);
    });
      

    function animate() {
        newGame.obstacles.move(newGame);
        newGame.character.applyGravity()
        newGame.character.collisionCheck(newGame.obstacles.obstaclesArray, newGame);
        requestAnimationFrame(animate);
    }
    animate();
}


