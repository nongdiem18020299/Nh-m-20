class trainRoad extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, obj) {
        super(scene, x, y, obj);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.createList(scene);
        this.setScene(scene);
    }

    create() {
        var train;
    }
    createList(scene) {
        this.train = scene.add.group();
    }

    setScene(scene) {
        this.scene = scene;
    }

    widthRoad() {
        var listTrains = this.train.getChildren();
        var sumWidth = 30;
        var l = listTrains.length;
        for (var i = 1; i <= l; i++) {
            sumWidth += 107;
        }
        return sumWidth;
    }

    maxTrain() {
        var listTrains = this.train.getChildren();
        var max = listTrains[0].getNum();
        for (var i = 1; i < listTrains.length; i++) {
            if (listTrains[i].getNum() > max) max = listTrains[i].getNum();
        }
        return max;
    }


    sort() {
        var list = this.train.getChildren();
        for (var i = 0; i < list.length; i++) {
            list[i].x = i * 107 + 30;
            list[i].y = this.y - 59;
            list[i].offMove();
        }
        if (list.length == 6) {
            for (var i = 0; i < list.length; i++) {
                list[i].setVelocityX(-280);
            }
        }


    }

    check() {
        var list = this.train.getChildren();
        if (list.length == 6) {
            if (list[0].x < -600) return true;
        }
    }

    addTrain(obj) {
        this.train.add(obj);
        this.sort();
    }
    removeTrain(obj) {
        this.train.remove(obj);
        this.sort();

    }

    reset() {
        this.train.clear(true, true);
    }

}