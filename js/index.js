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
      gravity: { y: 0 },
      debug: false
    }
  },
};
var platforms;
var game = new Phaser.Game(config);

function preload() {

  this.load.atlas("hitman", "assets/Spritesheet/hitman.png", "assets/Spritesheet/hitman.json");
  this.load.image("sky", "assets/PNG/sky.png");
}

function create() {
  cursors = this.input.keyboard.createCursorKeys();
  this.add.sprite(400, 300, 'sky');
  player = this.physics.add.sprite(100, 450, 'hitman');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('hitman', { start: 'hitman1_hold', end: 'hitman_hold' }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'hitman', frame: 'hitman1_gun' }],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('hitman', { start: 'hitman1_stand', end: 'hitman_hold' }),
    frameRate: 10,
    repeat: -1
  });
}

function update() {
  if (cursors.left.isDown)
{
    player.setVelocityX(-160);

    player.anims.play('left', true);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);

    player.anims.play('right', true);
}
else
{
    player.setVelocityX(0);

    player.anims.play('turn');
}
}