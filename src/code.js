var randomWord = [{english: "a", japanese: "あ"},{english: "i", japanese: "い"},{english: "u", japanese: "う"},
    {english: "e", japanese: "え"},{english: "o", japanese: "お"}]
    var myGamePiece;
    var objectOne;
    var objectTwo;
    var objectThree;
    var objectFour;
    var objectFive;
    var connectedObj = "";
    var correctAnswer;
    var points = 0;
    
    function startGame() {
        myGameArea.start();
        myGamePiece = new component(100, 100, "Avatar1.png", 290, 290, "avatar", "image");
        objectOne = new component(30, 30, "a.png", 100, 100, "a", "image");
        objectTwo= new component(30, 30, "i.png", 100, 280, "i", "image");
        objectThree= new component(30, 30, "u.png", 100, 500, "u", "image");
        objectFour= new component(30, 30, "e.png", 300, 100, "e", "image");
        objectFive= new component(30, 30, "o.png", 300, 500, "o", "image");
        var randomNumber = Math.floor(Math.random() * 5)
        correctAnswer = randomWord[randomNumber].english
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
    
    function component(width, height, color, x, y, word, type) {
        this.type = type;
        if (type == "image") {
            this.image = new Image();
            this.image.src = color;
        }
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
            if (type == "image") {
                ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            } else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
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
        if (myGameArea.key && myGameArea.key == 65) {
            myGamePiece.speedX = -2; 
            myGamePiece.image.src = "Avatar1-left.png";}
        if (myGameArea.key && myGameArea.key == 68) {
            myGamePiece.speedX = 2; 
            myGamePiece.image.src = "Avatar1-right.png";}
        if (myGameArea.key && myGameArea.key == 87) {
            myGamePiece.speedY = -2; 
            myGamePiece.image.src = "Avatar1-back.png";}
        if (myGameArea.key && myGameArea.key == 83) {
            myGamePiece.speedY = 2; 
            myGamePiece.image.src = "Avatar1.png";}
        myGamePiece.newPos();    
        myGamePiece.update();
        objectOne.update();
        objectTwo.update();
        objectThree.update();
        objectFour.update();
        objectFive.update();
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
       // document.getElementById("activate").innerHTML = connectedObj;
        if (correctAnswer == connectedObj) {
        //  alert("CORRECT!")
          var randomNumber = Math.floor(Math.random() * 5)
          correctAnswer = randomWord[randomNumber].english
          document.getElementById("search").innerHTML = "Find: " + correctAnswer;
          points++
          console.log(points)
          if (points == 2) {
                $(".waterBackground").css("top", "100px");
                $(".waterBackground").css("height", "700px");
              }
            else if(points == 4) {
                $(".waterBackground").css("top", "200px");
                $(".waterBackground").css("height", "600px");
            }
            else if(points == 6) {
                $(".waterBackground").css("top", "300px");
                $(".waterBackground").css("height", "500px");
            }
            else if(points == 8) {
                $(".waterBackground").css("top", "400px");
                $(".waterBackground").css("height", "400px");
            }
            else if(points == 10) {
                $(".waterBackground").css("top", "500px");
                $(".waterBackground").css("height", "300px");
            }
            else if(points == 12) {
                $(".waterBackground").css("top", "600px");
                $(".waterBackground").css("height", "200px");
            }
            else if(points == 14) {
                $(".waterBackground").css("top", "700px");
                $(".waterBackground").css("height", "100px");
            }
            else if(points >= 16) {
                $(".waterBackground").css("top", "800px");
                $(".waterBackground").css("height", "0px");
                $("#winScreen").css("visibility", "visible")
                document.getElementById("search").innerHTML=""
                setTimeout(triggerWin, 1000)
            }
        }
        document.getElementById("search").innerHTML = "Find: " + correctAnswer;
    }
    function triggerWin (){
        $("#winScreen").css("visibility", "visible")
    }
    $(document).ready (function(){
        startGame()
    })