import { initialGame } from './index.js';
import sound from './soundboard.js';
import { getHighscores } from './highscores.js';

function initStartPage() {

    document.addEventListener('DOMContentLoaded', () => {
        // Erstelle den Startbildschirm und den Startbutton
        const container = document.getElementById('container');
        const startScreen = document.createElement('div');
        const nameInput = document.createElement('input');
        const startButton = document.createElement('button');

        // Setze die IDs und andere Attribute
        startScreen.id = 'startScreen';
        nameInput.id = 'nameInput';
        nameInput.placeholder = 'Enter your name';
        startButton.id = 'start_btn';

        startScreen.style.backgroundImage = "url('../src/img/deep_space_webb.png')";
        startButton.innerHTML = 'Start Game';

        const highscores = displayHighscores();
        highscores.id = 'highscores';


        // Füge sie dem Container hinzu
        startScreen.appendChild(nameInput);
        startScreen.appendChild(startButton);
        startScreen.appendChild(highscores);

        container.appendChild(startScreen);


        // Event-Listener für den Startbutton
        startButton.addEventListener('click', () => {
            const playerName = document.getElementById('nameInput').value;

            // Verberge den Startbildschirm
            startScreen.style.display = 'none';
            sound.backgroundSound.play();
            // Starte das Spiel
            initialGame(playerName);
        });
    });
}

function displayHighscores() {
    const highscores = getHighscores();
    const highscoreList = document.createElement('ul');
    highscoreList.id = 'highscoreList';

    highscores.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${index + 1}. ${entry.name}: ${entry.score}`;
        highscoreList.appendChild(listItem);
    });

    return highscoreList;
}

export default initStartPage;

