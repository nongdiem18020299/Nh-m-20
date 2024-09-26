var config = {
    width: 800,
    height: 500,
    backgroundColor: 0xffffff,
    physics: {
        default: "arcade",
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Scene1]
};

var game = new Phaser.Game(config);