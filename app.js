class Game {
    constructor({color}){

        this.height = 768,
        this.width = 1024,
        this.background = color,
        this.charakter = new Charakter,
        this.obstacles = new Obstacles
        
    }
}


class Charakter {
    constructor({}){


    }
}


class Obstacles {
    constructor({}){


    }
}

const newGame = new Game ({

    color: 'red'
})
