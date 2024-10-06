export default class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {}

  create() {
    this.add.image(0, 0, 'fondo').setOrigin(0, 0);
    this.add.image(330, 300, 'gameover').setScale(0.7);

    this.startButtonMenu = this.add
      .image(200, 600, 'botonin')
      .setScale(0.4)
      .setInteractive();

    this.startButtonMenu.on('pointerover', () => {
      this.startButtonMenu.setFrame(1);
    });
    this.startButtonMenu.on('pointerout', () => {
      this.startButtonMenu.setFrame(0);
    });
    this.startButtonMenu.on('pointerdown', () => {
      this.scene.start('MenuInicio');
    });

    this.startButtonPlay = this.add
      .image(460, 600, 'botonju')
      .setScale(0.4)
      .setInteractive();

    this.startButtonPlay.on('pointerover', () => {
      this.startButtonPlay.setFrame(1);
    });
    this.startButtonPlay.on('pointerout', () => {
      this.startButtonPlay.setFrame(0);
    });
    this.startButtonPlay.on('pointerdown', () => {
      this.scene.start('Primer_Nivel');
    });
  }

  upload() {}
}
