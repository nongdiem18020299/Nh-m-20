class Ruler extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, obj) {
        super(scene, x, y, obj);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.createList(scene);
        this.setScene(scene);
    }
    create(){
        var ball;
    }
    createList(scene){
        this.ball = scene.add.group();
    }
    setScene(scene) {
        this.scene = scene;
    }
    sort() {
        var list = this.ball.getChildren();
        
            for(var i=0;i<list.length;i++){
                list[i].x=list[i].getNum()*33+40;
                list[i].y=335;
                list[i].offMove();
            }
        
    }
    addsmallBall(obj){
        this.ball.add(obj);
        this.sort();
    }
    removesmallBall(obj) {
        this.ball.remove(obj);
        this.sort();
        
    }
    reset() {
        this.ball.clear(true, true);
    }
}