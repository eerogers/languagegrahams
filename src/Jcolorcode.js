var randomWord = [{english: "pink", japanese: "pinku"},{english: "red", japanese: "aka(i)"},{english: "orange", japanese: "orenji"},
    {english: "yellow", japanese: "kiiro(i)"},{english: "green", japanese: "midori"},{english: "blue", japanese: "ao(i)"},{english: "purple", japanese: "murasaki"}]
    var myGamePiece;
    var objectOne;
    var objectTwo;
    var objectThree;
    var objectFour;
    var objectFive;
    var connectedObj = "";
    var correctAnswer;
    
    function startGame() {
        myGameArea.start();
        myGamePiece = new component(30, 30, "black", 290, 290);
        objectOne = new component(30, 30, "pink", 100, 100, "pinku");
        objectTwo= new component(30, 30, "red", 100, 280, "aka(i)");
        objectThree= new component(30, 30, "orange", 100, 500, "orenji");
        objectFour= new component(30, 30, "yellow", 300, 100, "kiiro(i)");
        objectFive= new component(30, 30, "green", 300, 500, "midori");
        objectSix= new component(30, 30, "blue", 500, 100, "ao(i)");
        objectSeven= new component(30, 30, "purple", 500, 500, "murasaki");
        var randomNumber = Math.floor(Math.random() * 7)
        correctAnswer = randomWord[randomNumber].japanese
        console.log(correctAnswer)
    }
    
    var myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
            this.canvas.width = 600;
            this.canvas.height = 600;
            this.canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid black";
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
            window.addEventListener('keydown', function (e) {
                myGameArea.key = e.keyCode;
            })
            window.addEventListener('keyup', function (e) {
                myGameArea.key = false;
            })
        }, 
        clear : function(){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
    function component(width, height, color, x, y, word) {
        this.gamearea = myGameArea;
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;    
        this.x = x;
        this.y = y;
        this.word = word    
        this.update = function() {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;        
        }
        this.crashWith = function(otherobj) {
          var myleft = this.x;
          var myright = this.x + (this.width);
          var mytop = this.y;
          var mybottom = this.y + (this.height);
          var otherleft = otherobj.x;
          var otherright = otherobj.x + (otherobj.width);
          var othertop = otherobj.y;
          var otherbottom = otherobj.y + (otherobj.height);
          var crash = true;
          if ((mybottom < othertop) ||
          (mytop > otherbottom) ||
          (myright < otherleft) ||
          (myleft > otherright)) {
            crash = false;
          }
          return crash;
  }
    }
    
    function updateGameArea() {
        myGameArea.clear();
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;    
        if (myGameArea.key && myGameArea.key == 65) {myGamePiece.speedX = -2; }
        if (myGameArea.key && myGameArea.key == 68) {myGamePiece.speedX = 2; }
        if (myGameArea.key && myGameArea.key == 87) {myGamePiece.speedY = -2; }
        if (myGameArea.key && myGameArea.key == 83) {myGamePiece.speedY = 2; }
        myGamePiece.newPos();    
        myGamePiece.update();
        objectOne.update();
        objectTwo.update();
        objectThree.update();
        objectFour.update();
        objectFive.update();
        objectSix.update();
        objectSeven.update();
        if (myGamePiece.crashWith(objectOne)) {
        //  document.getElementById("activate").innerHTML = objectOne.word;
          connectedObj = objectOne.word
        }
        if (myGamePiece.crashWith(objectTwo)) {
        //  document.getElementById("activate").innerHTML = objectTwo.word;
          connectedObj = objectTwo.word
        }
        if (myGamePiece.crashWith(objectThree)) {
        //  document.getElementById("activate").innerHTML = objectThree.word;
          connectedObj = objectThree.word
        }
        if (myGamePiece.crashWith(objectFour)) {
        //  document.getElementById("activate").innerHTML = objectFour.word;
          connectedObj = objectFour.word
        }
        if (myGamePiece.crashWith(objectFive)) {
        //  document.getElementById("activate").innerHTML = objectFive.word;
          connectedObj = objectFive.word
        }
        if (myGamePiece.crashWith(objectSix)) {
        //  document.getElementById("activate").innerHTML = objectSix.word;
          connectedObj = objectSix.word
        }
        if (myGamePiece.crashWith(objectSeven)) {
        //  document.getElementById("activate").innerHTML = objectSeven.word;
          connectedObj = objectSeven.word
        }
       // document.getElementById("activate").innerHTML = connectedObj;
        if (correctAnswer == connectedObj) {
            var randomNumber = Math.floor(Math.random() * 7)
            correctAnswer = randomWord[randomNumber].japanese
            document.getElementById("search").innerHTML = "Find: " + correctAnswer;
        }else {
          document.getElementById("correct").innerHTML = "";
        }
       document.getElementById("search").innerHTML = "Find: " + correctAnswer;
    }
    $(document).ready (function(){
        startGame()
    })