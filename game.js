class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      // call div for instructions
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      
      this.player = new Player(this.gameScreen, 40, -300, './assets/Playerright.png');
      this.height = 600;
      this.width = 900;
      
      this.obstacles = [new Obstacle(this.gameScreen)];
      
      this.hearts = [new Heart(this.gameScreen)];

      this.bonuses = [new Bonus(this.gameScreen)];


      this.score = 0;
      this.bubbles = 0;
      this.lives = 10;
      this.isGameOver = false;
      this.gameIntervalId = null;
      this.gameLoopFrequency = 1000 / 60;
    }
  
    //add another method for instruction


    start() {
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
      this.startScreen.style.display = "none";
      this.gameScreen.style.display = "block";
      this.gameIntervalId = setInterval(() => {
        this.gameLoop();
      }, this.gameLoopFrequency);
    }



    gameLoop() {
      //console.log("inside the game loop");
      this.update();
      if (this.isGameOver) {
        clearInterval(this.gameIntervalId);
        this.gameOver()
      }
    }
    update() {
    
        this.player.move();

        this.obstacles.forEach((oneObstacle, oneObstacleIndex) => {
            oneObstacle.move();

                const thereWasACollisionCollision = this.player.didCollide(oneObstacle)
                if (thereWasACollisionCollision) {
                    this.obstacles.splice(oneObstacleIndex, 1);
                    oneObstacle.element.remove();
                    this.obstacles.push(new Obstacle(this.gameScreen));
                    this.lives -=1
                    if(this.lives === 0) {
                        this.isGameOver = true
                    }
                    const livesElement = document.getElementById('lives')
                    livesElement.innerText = this.lives
                    

                }
            
            if (oneObstacle.left < (0-oneObstacle.width)) {
                this.obstacles.splice(oneObstacleIndex, 1);
                oneObstacle.element.remove();
                this.score += 10;
                const scoreElement = document.getElementById('score')
                scoreElement.innerText = this.score
                this.obstacles.push(new Obstacle(this.gameScreen));
        }})

        

        this.hearts.forEach((oneHeart, oneHeartIndex) => {
            oneHeart.move();
            
            const heartAcquired = this.player.didCollide(oneHeart)
            if (heartAcquired) {
                this.hearts.splice(oneHeartIndex, 1);
                oneHeart.element.remove();
                this.hearts.push(new Heart(this.gameScreen));
                if (this.lives < 10) {
                    this.lives +=1
                } else {
                    this.lives +=0
                }
                //this.lives +=1
                const livesElement = document.getElementById('lives')
                livesElement.innerText = this.lives 

            }

            
            if (oneHeart.left < (0-oneHeart.width)) {
                this.hearts.splice(oneHeartIndex, 1);
                oneHeart.element.remove();
                this.hearts.push(new Heart(this.gameScreen));
        }})

        this.bonuses.forEach((oneBonus, oneBonusIndex) => {
            oneBonus.move();

            const bonusAcquired = this.player.didCollide(oneBonus)
            if (bonusAcquired) {
                this.bonuses.splice(oneBonusIndex, 1);
                oneBonus.element.remove();
                this.score += 50;
                const scoreElement = document.getElementById('score')
                scoreElement.innerText = this.score
                this.bonuses.push(new Bonus(this.gameScreen));
            }

        
            if (oneBonus.left < (0-oneBonus.width)) {
                this.bonuses.splice(oneBonusIndex, 1);
                oneBonus.element.remove();
                this.bonuses.push(new Bonus(this.gameScreen));
        }})
        

  /*
        //if there is a collision with the oneObstacle and our car which is our player
        const thereWasACollision = this.player.didCollide(oneObstacle);
        if (thereWasACollision) {
          //first remove the obstacle from the array and from the Dom
          this.obstacles.splice(oneObstacleIndex, 1);
          oneObstacle.element.remove();
          //then add a new red car to the this.obstacles array
          this.obstacles.push(new Obstacle(this.gameScreen));
          this.lives -= 1;
          if (this.lives === 0) {
            this.isGameOver = true;
          }
          const livesElement = document.getElementById("lives");
          livesElement.innerText = this.lives;
        }
  
        }
      });
    }
    gameOver() {
      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block"; */
    } 
    gameOver() {
        this.gameScreen.style.display = "none"
        this.gameEndScreen.style.display = "block"
    }
  }
  