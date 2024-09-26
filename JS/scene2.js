class Scene2 extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("ruler", "./img/ruler.png"); // load hinh anh game
        this.load.image("progressbar", "./img/progressbar.png");
        this.load.image("ball", "./img/ball.png");
        this.load.image("b4", "./img/b4.png");
        this.load.image("b11", "./img/b11.png");
        this.load.image("b12", "./img/b12.png");
        this.load.image("b14", "./img/b14.png");
        this.load.image("b16", "./img/b16.png");
        this.load.image("b17", "./img/b17.png");
        this.load.image("b19", "./img/b19.png");
        this.load.image("b13", "./img/b13.png");
        this.load.image("ballObj2", "./img/ballObj2.png");
        this.load.image("list", "./img/listBall.png");
        this.load.image("ball4", "./img/ball4.png");
        this.load.image("ball11", "./img/ball11.png");
        this.load.image("ball12", "./img/ball12.png");
        this.load.image("ball13", "./img/ball13.png");
        this.load.image("ball14", "./img/ball14.png");
        this.load.image("ball16", "./img/ball16.png");
        this.load.image("ball17", "./img/ball17.png");
        this.load.image("ball19", "./img/ball19.png");
        this.load.text("level2", "./JS/level2.json");
        this.load.spritesheet("sound", "./img/sound.png", {
            frameWidth: 50,
            frameHeight: 50,
        });
        this.load.audio("click", "./audio/click.mp3");
        this.load.audio("wrong", "./audio/wrong.mp3");
        this.load.audio("speak", "./audio/speak2.mp3");
    }
    create() {
        //this.add.image(20, 300, 'ruler').setOrigin(0, 0);       // dat cac hinh ảnh vao game

        this.add.image(400, 20, 'progressbar');
        this.ruler = new Ruler(this, 20, 300, 'ruler');

        this.listBall0 = new listBall(this, 100, 180, 'list');
        this.music1 = new Sound(this, 145, 70, 'Place the ball on the number line', '');
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
                y: 20,
                stepX: 30
            }
        });
    }
    update() {
        var list = this.balls.getChildren();
        if (this.listBall0.check()) {
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
            gameObject.ballTouch.x = gameObject.x + 12;
            gameObject.ballTouch.y = 170;
        }


        gameObject.y = 170;
        if (gameObject.getNum() * 32.5 + 10 < gameObject.x && gameObject.getNum() * 32.5 + 45 > gameObject.x) {
            gameObject.setTint(0x00ff00);
        } else gameObject.setTint(0xffffff);
    }

    onStart(pointer, gameObject) {
        gameObject.touchBall(this);
    }

    onStop(pointer, gameObject) {
        gameObject.destroyBallTouch();
        this.sound.play("click");
        //var num = Math.floor(gameObject.x / dis);
        console.log(gameObject.getNum());
        if (gameObject.getNum() * 32.5 + 10 < gameObject.x && gameObject.getNum() * 32.5 + 45 > gameObject.x) {

            if (gameObject.getNum() < 10) {
                gameObject.setVelocityY(250);
                this.time.addEvent({
                    delay: 500,
                    callback: () => {
                        this.listBall0.removeBall(gameObject);
                        gameObject.destroy();
                        this.ruler.addsmallBall(this.setSmallBall(gameObject.getNum()));
                    },
                    loop: false,
                });

            } else {
                gameObject.setVelocityY(250);
                this.time.addEvent({
                    delay: 500,
                    callback: () => {
                        this.listBall0.removeBall(gameObject);
                        this.ruler.addsmallBall(this.setSmallBall(gameObject.getNum()));
                        gameObject.destroy();

                    },
                    loop: false,
                });

            }


        } else {

            gameObject.setTint(0xff0000);
            gameObject.setVelocityY(-250);
            this.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.reset();
                    this.setData(this.data[this.level - 1]);
                },
                loop: false,
            });
            this.sound.play("wrong");
        }
    }

    reset() {
        this.listBall0.reset();
        this.ruler.reset();

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
            case 14:
                return new Ball(this, -100, -100, 14, "ball14");
            case 16:
                return new Ball(this, -100, -100, 16, "ball16");
            case 17:
                return new Ball(this, -100, -100, 17, "ball17");
            case 19:
                return new Ball(this, -100, -100, 19, "ball19");
        }
    }
    setSmallBall(num) {
        switch (num) {
            case 4:
                return new Ball(this, 0, 0, 4, "b4");
            case 11:
                return new Ball(this, 0, 0, 11, "b11");
            case 12:
                return new Ball(this, 0, 0, 12, "b12");
            case 13:
                return new Ball(this, 0, 0, 13, "b13");
            case 14:
                return new Ball(this, 0, 0, 14, "b14");
            case 16:
                return new Ball(this, 0, 0, 16, "b16");
            case 17:
                return new Ball(this, 0, 0, 17, "b17");
            case 19:
                return new Ball(this, 0, 0, 19, "b19");
        }
    }
}