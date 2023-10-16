export default class Timer {
    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'timer';
        document.getElementById('container').appendChild(this.element);
        this.time = 0;
        this.score = 0;
        this.update();
    }

    update() {
        this.element.innerText = this.time;
    }

    increment() {
        this.time++;
        this.score = this.time * 10;
        this.update();
    }

    resetTimer() {
        this.time = 0;
        this.update();
    }
}
