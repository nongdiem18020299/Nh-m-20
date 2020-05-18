class Scene2 extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("ruler", "./img/ruler.png");
        this.load.image("progressbar", "./img/progressbar.png");
        this.load.image("ball", "./img/ball.png");
    }
    create() {
        this.add.image(400, 300, 'ruler');
        this.add.image(400, 50, 'progressbar');
        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 4,
            setXY: {
                x: 132,
                y: 50,
                stepX: 30
            }
        });
    }
    update() {
        var list = this.balls.getChildren();
    }
}