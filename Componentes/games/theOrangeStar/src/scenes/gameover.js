export default class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {
    this.load.image(
      'fondo',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/fondo.png'
    );
    this.load.image(
      'gameover',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/gameOver.png'
    );
    this.load.image(
      'botonin',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonInicio.png'
    );
    this.load.image(
      'botonju',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonJugar.png'
    );
  }

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
