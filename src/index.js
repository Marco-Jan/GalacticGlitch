'use strict'

import _ from 'lodash';
import Game from './game.js';
import initStartPage from './startPage.js';
import sounds from './soundboard.js';






initStartPage();

let newGame;


export function initialGame(playerName) {        //erstellt neues Game Objekt
    playerName = document.getElementById('nameInput').value ;
    newGame = new Game(playerName);
    newGame.draw();
    newGame.displayName();


    setInterval(() => {
        newGame.obstacles.generate('asteroid');
    }, 3000);

    setInterval(() => {
        newGame.obstacles.generate('spaceship');
    }, 2500);


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
            sounds.rocketSound.currentTime = 0;
            sounds.rocketSound.play();

        } else if (key === 's') newGame.character.velocity = 1;
        else if (key === 'a') newX -= 10;
        else if (key === 'd') newX += 10;

        newGame.character.move(newX, newY);
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'w') {
            newGame.character.toggleFlame(false);
        }
    });

    // document.getElementById('restartButton').addEventListener('click', () => {
    //     newGame.restart();

    // });


    function animate() {
        newGame.obstacles.move(newGame);
        newGame.character.applyGravity()
        newGame.character.collisionCheck(newGame.obstacles.obstaclesArray, newGame);
        requestAnimationFrame(animate); //rekrusiver aufruf 60fps +
    }
    animate();
}



