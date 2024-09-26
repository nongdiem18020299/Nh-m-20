class Sound {
    constructor(scene, x, y, text1, text2) {
        this.clickButton = scene.add.text(x + 40, y - 30, text1, {
            font: "30px Arial",
            fill: "#000"
        });
        this.clickButton = scene.add.text(x + 170, y, text2, {
            font: "30px Arial",
            fill: "#000"
        });
        this.create(scene, x, y);
    }

    create(scene, x, y) {
        this.button = scene.add.image(x, y, 'sound')
            .setInteractive()
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState())
            .on('pointerdown', () => this.enterButtonActiveState())
        this.sound = scene.sound.add('speak');
    }

    enterButtonHoverState() {
        this.button.setFrame(1);
    }

    enterButtonRestState() {
        this.button.setFrame(0);
    }

    enterButtonActiveState() {
        this.button.setFrame(1);
        this.on();
    }

    on() {
        this.sound.play();
    }
}