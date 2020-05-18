var config = {
    width: 790,
    height: 420,
    backgroundColor: 0xffffff,
    physics: {
        default: "arcade",
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Scene3]
};

var game = new Phaser.Game(config);