export default class Timer {
    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'timer';
        document.getElementById('container').appendChild(this.element);
        this.time = 0;
        this.update();
        this.elementPoints = document.createElement('div');
        this.elementPoints.id = 'points';
        document.getElementById('container').appendChild(this.elementPoints);
        this.points = 0;
    }
    update() {
        this.element.innerText = this.time;
    }

    increment() {
        this.time++;
        this.update();
        
    } 
    updatePoints(){
        this.points = this.time * 10
        this.elementPoints.innerHTML = this.points;
        console.log(this.points);

    }

    resetTimer(){
        this.time = 0;
        this.update();
    }
    
}