export default class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {}

  create() {
    this.add.image(0, 0, 'fondo').setOrigin(0, 0);
    this.add.image(330, 300, 'gameover').setScale(0.7);

    this.startButton = this.add
      .image(200, 600, 'botonin')
      .setScale(0.4)
      .setInteractive();

    this.startButton.on('pointerover', () => {
      this.startButton.setFrame(1);
    });
    this.startButton.on('pointerout', () => {
      this.startButton.setFrame(0);
    });
    this.startButton.on('pointerdown', () => {
      this.scene.start('MenuInicio');
    });

    this.startButton = this.add
      .image(460, 600, 'botonju')
      .setScale(0.4)
      .setInteractive();

    this.startButton.on('pointerover', () => {
      this.startButton.setFrame(1);
    });
    this.startButton.on('pointerout', () => {
      this.startButton.setFrame(0);
    });
    this.startButton.on('pointerdown', () => {
      this.scene.start('Primer_Nivel');
    });
  }

  upload() {}
}
