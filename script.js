window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const ourGame = new Game()
    startButton.addEventListener("click", function () {
        instructions();
        // change direction to instructions, then after to start game()
    });

    const closeInstructions = document.getElementById("instructions");
    closeInstructions.addEventListener("click", function () {
        startGame();
        // change direction to instructions, then after to start game()
    });

    document.addEventListener("keydown", (event) => {
        console.log("a key was pressed", event);
        if (event.code === "ArrowRight") {
          //then we move our player to the right
          ourGame.player.element.src = './assets/Playerright.png';
          ourGame.player.directionX = 4;
        } else if (event.code === "ArrowLeft") {
          ourGame.player.element.src = './assets/Playerleft.png';
            //then we move our player to the left
          ourGame.player.directionX = -4;
        } else if (event.code === "ArrowUp") {
          //then we move our player to the up
          ourGame.player.element.src = './assets/Playerup.png';
          ourGame.player.directionY = -4;
        } else if (event.code === "ArrowDown") {
          //then we move our player to the down
          ourGame.player.element.src = './assets/Playerdown.png';
          ourGame.player.directionY = 4;
        }
        
    });

    document.addEventListener("keyup", () => {
        ourGame.player.directionX = 0;
        ourGame.player.directionY = 0;
      });
    
    function instructions() {
        console.log("read this")
        ourGame.instructions()
    }


    function startGame() {
        console.log ("start game")
        ourGame.start()

    }

    audiobutton.addEventListener("click", () => {
        this.soundTrack.play()
    });

    audiobutton. addEventListener("click", () => {
        soundTrack.muted = true;
        this.soundTrack.pause();
    });

    restartButton.addEventListener("click", () => {
     window.location.reload();
    });
};

    /*
    document.addEventListener("keydown", (event) => {
      console.log("a key was pressed", event);
      if (event.code === "ArrowRight") {
        //then we move our player to the right
        ourGame.player.directionX = 4;
      } else if (event.code === "ArrowLeft") {
        //then we move our player to the left
        ourGame.player.directionX = -4;
      } else if (event.code === "ArrowUp") {
        //then we move our player to the up
        ourGame.player.directionY = -4;
      } else if (event.code === "ArrowDown") {
        //then we move our player to the down
        ourGame.player.directionY = 4;
      }
    });
    document.addEventListener("keyup", () => {
      ourGame.player.directionX = 0;
      ourGame.player.directionY = 0;
    });
  
    function startGame() {
      console.log("start game");
      ourGame.start(); 
    } */
  


/* OLD CODE
window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const ourGame = new Game()
    startButton.addEventListener("click", function () {
        startGame();
        // change direction to instructions, then after to start game()
    });
    document.addEventListener("keydown", (event) => {
        console.log("a key was pressed", event);
        if (event.code === "ArrowRight") {
          //then we move our player to the right
          ourGame.player.directionX = 4;
        } else if (event.code === "ArrowLeft") {
          //then we move our player to the left
          ourGame.player.directionX = -4;
        } else if (event.code === "ArrowUp") {
          //then we move our player to the up
          ourGame.player.directionY = -4;
        } else if (event.code === "ArrowDown") {
          //then we move our player to the down
          ourGame.player.directionY = 4;
        }
    });

    document.addEventListener("keyup", () => {
        ourGame.player.directionX = 0;
        ourGame.player.directionY = 0;
      });

    function startGame() {
        console.log ("start game")
        ourGame.start()

    }

    audiobutton.addEventListener("click", () => {
        this.soundTrack.play()
    });
    restartButton.addEventListener("click", () => {
     window.location.reload();
    });
};*/