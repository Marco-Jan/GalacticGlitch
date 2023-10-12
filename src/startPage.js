import { initialGame } from './index.js';

function initStartPage() {
    document.addEventListener('DOMContentLoaded', () => {
        const startButton = document.getElementById('startButton');
        const startScreen = document.getElementById('startScreen');


        startButton.id = "start_btn";
        startScreen.style.backgroundImage = "url('../img/deep_space_webb.png')";

        // Highscores 


        // Highscores 


        startButton.addEventListener('click', () => {
            // Startbildschirm verbergen
            startScreen.style.display = 'none';
            const audioElement = document.getElementById('backgroundMusic');
            audioElement.play();

            // Spiel starten
            initialGame();
        });


    });


}

export default initStartPage;