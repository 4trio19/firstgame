var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
},
};
var platforms;
var game = new Phaser.Game(config);

function preload() {

  this.load.atlas("hitman", "assets/Spritesheet/hitman.png", "assets/Spritesheet/hitman.json");
}

function create() {
  this.add.sprite(100, 100, 'hitman', 'hitman1_stand.png');
}

function update() {}