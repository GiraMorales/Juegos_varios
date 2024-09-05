import { BlendModes } from 'phaser';

export default class MenuInicio extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuInicio', active: true });
  }
  preload() {
    this.load.on('complete', () => {
      this.scene.start(MenuInicio);
    });
    this.load.image(
      'badgraund',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/fondo.png'
    );
    this.load.image(
      'titulo',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475039/assets/titulo.png'
    );
    this.load.image(
      'botonju',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonJugar.png'
    );
    this.load.image(
      'botonsa',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonSalir.png'
    );
    this.load.image(
      'paticle',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/particle.png'
    );
  }

  create() {
    this.add.image(0, 0, 'paisaje').setOrigin(0, 0);
    this.titulo = this.add.image(330, 250, 'titulo').setScale(0.3);

    this.tweens.add({
      targets: this.titulo,
      duration: 1000,
      y: 300,
      repeat: 4,
      yoyo: true
    });

    this.startButton = this.add
      .image(200, 600, 'botonju')
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

    this.startButton = this.add
      .image(460, 600, 'botonsa')
      .setScale(0.4)
      .setInteractive();

    this.startButton.on('pointerover', () => {
      this.startButton.setFrame(1);
    });
    this.startButton.on('pointerout', () => {
      this.startButton.setFrame(0);
    });
    this.startButton.on('pointerdown', () => {
      this.scene.start('GameOver');
    });

    // particulas
    // const p = this.add.particles('particle');
    // const emitter = p.createEmitter();
    // emitter.setPosition(340, 300);
    // emitter.setSpeed(300);
    // emitter.setBlendMode(Phaser.BlendModes.ADD);
  }
}
