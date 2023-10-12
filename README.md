# Bird-Crash Game

## Überblick

Bird-Crash ist ein einfaches Browser-Spiel, in dem der Spieler ein Raumschiff steuert und Hindernissen ausweichen muss. Das Spiel wurde mit Vanilla JavaScript und CSS entwickelt.

## Installation

1. Klone das Repository oder lade den Code herunter.
2. Öffne die index.html-Datei in deinem Browser.

## Dateistruktur

- index.html: Haupt-HTML-Datei, die die Spielstruktur definiert.
- style.css: Enthält alle Styles für das Spiel.
- main.js: Einstiegspunkt, initialisiert das Spiel.
- game.js: Definiert die Hauptlogik des Spiels.
- character.js: Definiert die Charakterklasse, die für die Bewegung und Kollisionen verantwortlich ist.
- obstacles.js: Verwaltet die Erstellung und Bewegung der Hindernisse.
- timer.js: Verwaltet die Timer-Logik.
- startPage.js: Verwaltet den Startbildschirm und die Initialisierung des Spiels.

## Features

- Raumschiff-Steuerung
  - W: Nach oben bewegen
  - A: Nach links bewegen
  - S: Nach unten bewegen
  - D: Nach rechts bewegen
- Hindernisse
  - Das Spiel generiert zwei Arten von Hindernissen:
    - Asteroiden
    - Raumschiffe
- Timer
  - Ein Timer zählt die Zeit, die der Spieler im Spiel verbracht hat.
- Highscore
  - Die Highscores werden im Local Storage gespeichert und können auf dem Startbildschirm eingesehen werden.
- Sounds
  - Hintergrundmusik startet, wenn das Spiel beginnt.
  - Ein Raketengeräusch ertönt, wenn der Spieler "W" drückt.

## Verbesserungsmöglichkeiten

- Einführung weiterer Level
- Erweiterung der Highscore-Funktionalität