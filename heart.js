class Heart {
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.height = 35
        this.width = 35
        this.left = 4300

        this.topArr = [50, 100, 150, 200, 250, 300, 350, 400, 450, 515]
        this.randomIndex = Math.floor(Math.random() * this.topArr.length)
        this.top = this.topArr[this.randomIndex]

        this.element = document.createElement('img');
        this.element.src = './assets/Heart.png';
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
    }
    move(){
        this.left -= 4
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }

}