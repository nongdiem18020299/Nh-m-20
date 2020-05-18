class Scene1 extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("road", "./img/TrainRoad.png");
        this.load.image("train1", "./img/Train1.png");
        this.load.image("car0", "./img/Train_n.png");
        this.load.image("zone", "./img/zone.png");
        this.load.image("cir1", "./img/circle_head.png");
<<<<<<< Updated upstream
        this.load.image("cir2", "./img/circle_car.png")
=======
        this.load.image("cir2", "./img/circle_car.png");
        this.load.image("ball", "./img/ball.png");
        this.load.image("progressbar", "./img/progressbar.png");
>>>>>>> Stashed changes
    }


    // UISence() {
    //     Phaser.Scene.call(this, { key: 'UIScene', active: true });

    // }
    create() {
<<<<<<< Updated upstream
=======
        this.add.image(400, 50, 'progressbar');
>>>>>>> Stashed changes
        var head = this.add.image(0, 0, 'train1');
        var cir = this.add.image(18, -45, 'cir1');
        var train1 = this.add.container(100, 340, [head, cir]);
        var road = this.add.image(400, 360, 'road');
        train1.setDepth(2);
        var car;
        for (var i = 0; i < 5; i++) {
            car = this.add.sprite(100 + 150 * i, 150, 'car0').setInteractive();
            car.setDepth(1);
            this.input.setDraggable(car);
            var zone = this.add.zone(210 + i * 100, 340, 100, 70).setDropZone();
            var ground = this.add.sprite(205 + i * 110, 360, 'zone');

            // car.inputEnabled = true;

            // car.input.enableSnap(200, 200, true, true);

            // car.event.onDragStop.add(fixLocation);
        }

<<<<<<< Updated upstream
=======
        

>>>>>>> Stashed changes
        // function fixLocation(car) {
        //     if (car, x > 140 && car.x < 280) {
        //         car.x = 140;
        //     }
        // }



        this.input.on('drag', function(pointer, gameObject, dragX, dragY, dropZone) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', function(pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.disableInteractive();
        });

<<<<<<< Updated upstream

=======
        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 4,
            setXY: {
                x: 132,
                y: 50,
                stepX: 30
            }
        });
        
>>>>>>> Stashed changes
    }


    update() {
<<<<<<< Updated upstream

=======
        var list = this.balls.getChildren();
>>>>>>> Stashed changes
    }

    onStop() {

    }
}