import { init } from 'es-module-lexer';
import sounds from './soundboard.js';
import { initialGame } from './index.js';
import initStartPage from './startPage.js';


export default class GameOverScreen {
    constructor(resetGameCallback) {
        this.gameOverShown = false;
        this.resetGameCallback = resetGameCallback; // Funktion zum Zurücksetzen des Spiels
    }

    show() {
        if (this.gameOverShown) return;

        // Verstecke den Spielcontainer
        const gameContainer = document.getElementById('container');
        gameContainer.style.display = 'none';

        // Erstelle das GameOver-Fenster
        this.gameOverDiv = document.createElement('div');
        this.gameOverDiv.id = 'gameOverScreen';
        

        // Erstelle den Game Over-Text
        const gameOverText = document.createElement('h1');
        gameOverText.innerHTML = 'Game Over';
        this.gameOverDiv.appendChild(gameOverText);

        // Erstelle den Reset-Button
        const resetButton = document.createElement('button');
        resetButton.id = 'reset_btn';
        resetButton.innerHTML = 'Restart';
        this.gameOverDiv.appendChild(resetButton);

        const homeButton = document.createElement('button');
        homeButton.id = 'home_btn';
        homeButton.innerHTML = 'Home';
        this.gameOverDiv.appendChild(homeButton);

        // Füge das GameOver-Fenster zum Body hinzu
        document.body.appendChild(this.gameOverDiv);
        sounds.backgroundSound.play();

        // Event-Listener für den Reset-Button
        resetButton.addEventListener('click', () => {
            this.hide();
            this.resetGameCallback();
            
        });

        homeButton.addEventListener('click', () => {
            location.reload();
            
        })

        this.gameOverShown = true;
        
    }

    hide() {
        if (!this.gameOverShown) return;

        // Zeige den Spielcontainer wieder an
        const gameContainer = document.getElementById('container');
        gameContainer.style.display = 'block';

        // Entferne das GameOver-Fenster
        this.gameOverDiv.remove();

        this.gameOverShown = false;
    }
}
