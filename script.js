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
          ourGame.player.element.src = './assets/Playerright.png';
          ourGame.player.directionX = 4;
        } else if (event.code === "ArrowLeft") {
          ourGame.player.element.src = './assets/Playerleft.png';
          ourGame.player.directionX = -4;
        } else if (event.code === "ArrowUp") {
          ourGame.player.element.src = './assets/Playerup.png';
          ourGame.player.directionY = -4;
        } else if (event.code === "ArrowDown") {
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

   