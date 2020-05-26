class Scene2 extends Phaser.Scene {  // 13 8 4
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("ruler", "./img/ruler.png");
        this.load.image("progressbar", "./img/progressbar.png");
        this.load.image("ball", "./img/ball.png"); 
        this.load.image("ballObj", "./img/ballObj.png");
        this.load.image("ballObj2", "./img/ballObj2.png");
        this.load.image("list", "./img/listBall.png");
        this.load.image("ball1", "./img/ballObj.png");
        this.load.image("ball2", "./img/ball2.png");
        this.load.image("ball3", "./img/ball3.png");
        this.load.image("ball4", "./img/ball4.png");
        this.load.image("ball11", "./img/ball11.png");
        this.load.image("ball12", "./img/ball12.png");
        this.load.image("ball13", "./img/ball13.png");
        this.load.image("ball14", "./img/ball14.png");
        this.load.image("ball16", "./img/ball16.png");
        this.load.image("ball17", "./img/ball17.png");
        this.load.image("ball19", "./img/ball19.png");
        this.load.text("level2", "./JS/level2.json");
    }
    create() {
        this.add.image(20, 300, 'ruler').setOrigin(0, 0);
        this.add.image(400, 50, 'progressbar');

        this.listBall0 = new listBall(this, 100, 180, 'list');

        this.level = 1;
        this.data = JSON.parse(this.cache.text.get("level2")).level2;
        this.setData(this.data[this.level - 1]);

        this.input.on("gameobjectdown", this.onStart, this);
        this.input.on("gameobjectup", this.onStop, this);
        this.input.on("drag", this.onDoDrag, this);

        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 3,
            setXY: {
                x: 132,
                y: 50,
                stepX: 30
            }
        });
    }
    update() {
        var list = this.balls.getChildren();
        if (this.listBall0.check()==1) {
            if (this.level == 4) {
                this.time.addEvent({
                    delay: 500,
                    callback: () => {
                        window.location = "finish.html";
                    },
                    loop: false,
                });
            } else {
                list[list.length - this.level].x += 450;
                this.level++;
                this.reset();
                this.setData(this.data[this.level - 1]);
            }

        }
    }


    onDoDrag(pointer, gameObject, dragX, dragY) {
        if (dragX < 19) {
            gameObject.x = 19;
        } else if (dragX > 681) {
            gameObject.x = 681;
        } else {
            gameObject.x = dragX;
        }
        if (gameObject.ballTouch instanceof Object) {
            gameObject.ballTouch.x = gameObject.x;
            gameObject.ballTouch.y = 170;
        }


        gameObject.y = 170;
    }

    onStart(pointer, gameObject) {
        gameObject.touchBall(this);
    }

    onStop(pointer, gameObject) {
        gameObject.destroyBallTouch();
        var num = Math.floor(gameObject.x / dis);
        console.log(gameObject.getNum());
        if (gameObject.getNum() * 31 + 28 < gameObject.x && gameObject.getNum() * 31 + 60 > gameObject.x) {
            if (gameObject.getNum() < 10) {
                this.add.text(45 + gameObject.getNum() * 33, 335, gameObject.getNum(), {
                    font: "25px Arial",
                    fill: "#000"
                });
            } else {
                this.add.text(40 + gameObject.getNum() * 33, 335, gameObject.getNum(), {
                    font: "25px Arial",
                    fill: "#000"
                });
            }
            gameObject.setVelocityY(-250);
            this.time.addEvent({
                delay: 1000,
                callback: () => {

                    this.listBall0.removeBall(gameObject);
                    
                },
                loop: false,
            });
            

        }
        else {
            
            gameObject.setTint(0xff0000);
            //gameObject.setVelocityY(-250);
            this.time.addEvent({
                delay: 500,
                callback: () => {
                    gameObject.setVelocityY(-250);
                    
                },
                loop: false,
            });
        }
    }
    
    reset() {
        this.listBall0.reset();
    }

    setData(data) {
        this.setlistBall(data.ball);
    }
    setlistBall(data) {
        for (var i = 0; i < data.length; i++) {
            this.listBall0.addBall(this.setBall(data[i]));
        }
    }
    setBall(num) {
        switch (num) {
           
            
            case 4:
                return new Ball(this, -100, -100, 4, "ball4");
            case 11:
                return new Ball(this, -100, -100, 11, "ball11");
            case 12:
                return new Ball(this, -100, -100, 12, "ball12");
            case 13:
                return new Ball(this, -100, -100, 13, "ball13");
            case 16:
                return new Ball(this, -100, -100, 16, "ball16");
            case 17:
                return new Ball(this, -100, -100, 17, "ball17");
            case 19:
                return new Ball(this, -100, -100, 19, "ball19");
        }
    }
}