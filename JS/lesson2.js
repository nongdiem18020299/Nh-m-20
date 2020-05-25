var config = {
    width: 876,
    height: 510,
    backgroundColor: 0xffffff,
    physics: {
        default: "arcade",
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Scene2]
};

var game = new Phaser.Game(config);