class Train extends Phaser.GameObject.Sprite {
    constructor(scene, x, y, num, obj) {
        super(scene, x, y, obj);
        this.setNum(num);
        scene.add.existing(this).setOrigin(0, 0);
        this.setInteractive();
        scene.input.setDraggable(this);
        scene.input.on("drag", this.onDoDrag);
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

    doOnDrag(pointer, GameObject, dragX, dragY) {
        if (dragX + gameObject.width > config.width) {
            gameObject.y = dragY;
        } else if (dragX < 0) {
            gameObject.x = 0;
        } else {
            gameObject.x = dragX;
        }

        if (dragY < 0) {
            gameObject.y = 0;
        } else if (dragY + gameObject.height > config.height) {
            gameObject.y = config.height - gameObject.height;
        } else {
            gameObject.y = dragY;
        }
    }
}