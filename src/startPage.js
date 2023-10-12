import { initialGame } from './index.js';

function initStartPage()
{
    document.addEventListener('DOMContentLoaded', () => {
        const startButton = document.getElementById('startButton');
        const startScreen = document.getElementById('startScreen');
        const highscoreList = document.getElementById('highscoreList');
    
        startButton.id = "start_btn";
        startScreen.style.backgroundImage = "url('../img/deep_space_webb.png')";
    
        // Highscores aus dem Local Storage laden
        let highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    
        // Highscores anzeigen
        updateHighscoreList();
    
        startButton.addEventListener('click', () => {
            // Startbildschirm verbergen
            startScreen.style.display = 'none';
            
            // Spiel starten
            initialGame();
        });
    
        function updateHighscoreList() {
            highscoreList.innerHTML = '';
            highscores.forEach((score, index) => {
                const li = document.createElement('li');
                li.textContent = `${index + 1}. ${score} Sekunden`;
                highscoreList.appendChild(li);
            });
        }
    
        // Funktion zum Hinzufügen eines neuen Highscores
        // function addNewHighscore(newScore) {
        //     highscores.push(newScore);
        //     highscores.sort((a, b) => a - b);  // Sortiere die Liste aufsteigend
        //     highscores = highscores.slice(0, 5);  // Nur die besten 5 Scores behalten
        //     localStorage.setItem('highscores', JSON.stringify(highscores));  // Speichern in Local Storage
        //     updateHighscoreList();
        // }
    });


}

export default initStartPage;