class Player {
    constructor(gameScreen, width, height, playerImage) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;

        this.left = ((this.gameScreen.clientWidth - this.width) / 2) + 60;
        this.top = this.gameScreen.clientHeight - this.height - 10;

        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement('img');
        this.element.src = playerImage;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move(){
        this.left += this.directionX *2
        this.top += this.directionY *2
        if (this.left <= 0) {
            this.left = 0
        }
        if (this.left >= 900 - this.width) {
            this.left = 900 - this.width
        }
        if (this.top <= 50) {
            this.top = 50
        }
        if (this.top >= 202 - this.height) {
            this.top = 202 - this.height
        }
        if (this.top )
        this.updatePosition()
    }


    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
        /*    this.element.classList.add('pulsate')
            setTimeout(() => {
                this.element.classList.remove('pulsate')
            }, 1000)*/
          return true;
        } else {
          return false;
        }
      }

    didCollide(heart) {
        const playerRect = this.element.getBoundingClientRect();
        const heartRect = heart.element.getBoundingClientRect();
    
        if (
          playerRect.left < heartRect.right &&
          playerRect.right > heartRect.left &&
          playerRect.top < heartRect.bottom &&
          playerRect.bottom > heartRect.top
        ) {
            this.element.classList.add('pulsate')
            setTimeout(() => {
                this.element.classList.remove('pulsate')
            }, 1000)
          return true;
        } else {
          return false;
        }
      }
}

