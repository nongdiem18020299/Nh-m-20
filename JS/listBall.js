class listBall extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, obj) {
        super(scene, x, y, obj);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.createList(scene);
        this.setScene(scene);
    }
    create() {
        var ball;
    }
    createList(scene) {
        this.ball = scene.add.group();
    }
    setScene(scene) {
        this.scene = scene;
    }
    sort() {
        var list = this.ball.getChildren();
        if (list.length != 0) {
            list[0].x = 100;
            list[0].y = 180;
        }

    }
    check() {
        var list = this.ball.getChildren();
        if (list.length == 0) return true;
    }
    addBall(obj) {
        this.ball.add(obj);
        this.sort();
    }
    removeBall(obj) {
        this.ball.remove(obj);
        this.sort();

    }
    reset() {
        this.ball.clear(true, true);
    }
}