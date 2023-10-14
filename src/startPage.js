import { initialGame } from './index.js';

function initStartPage() {
    document.addEventListener('DOMContentLoaded', () => {
        // Erstelle den Startbildschirm und den Startbutton
        const container = document.getElementById('container');
        const startScreen = document.createElement('div');
        const startButton = document.createElement('button');

        // Setze die IDs und andere Attribute
        startScreen.id = 'startScreen';
        startButton.id = 'start_btn';
        startScreen.style.backgroundImage = "url('../src/img/deep_space_webb.png')";
        startButton.innerHTML = 'Start Game';

        // Füge sie dem Container hinzu
        startScreen.appendChild(startButton);
        container.appendChild(startScreen);

        // Event-Listener für den Startbutton
        startButton.addEventListener('click', () => {
            // Verberge den Startbildschirm
            startScreen.style.display = 'none';
            const audioElement = document.getElementById('backgroundMusic');
            if (audioElement) {
                audioElement.play();
            }

            // Starte das Spiel
            initialGame();
        });
    });
}

export default initStartPage;

