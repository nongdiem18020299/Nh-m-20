class Train extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, num, obj) {
        super(scene, x, y, obj);
        this.setNum(num);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.setInteractive();
        this.setDepth(1);
        scene.input.setDraggable(this);
    }

    create() {
        let num = 1;
        var speed = 5;
    }

    offMove() {
        this.disableInteractive();
    }

    onMove() {
        this.setInteractive();
    }

    setNum(num) {
        this.num = num;
    }
    getNum() {
        return this.num;
    }

}