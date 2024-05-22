class Obstacle {
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.heightArr = [70, 140, 210, 280, 350, 420]
        this.randomIndex = Math.floor(Math.random() * this.heightArr.length)
        this.height = this.heightArr[this.randomIndex]
        
        this.widthArr = [50, 100, 150, 200]
        this.randomIndex = Math.floor(Math.random() * this.widthArr.length)
        this.width = this.widthArr[this.randomIndex]

        this.topArr = [((this.height-this.height) + 50), (550 - this.height)]
        this.randomIndex = Math.floor(Math.random() * this.topArr.length)
        this.top = this.topArr[this.randomIndex]

        this.left = 900

        this.element = document.createElement('img');
        this.element.src = '../assets/Rock1.png';
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
    }
    move(){
        this.left -= 8
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }

}