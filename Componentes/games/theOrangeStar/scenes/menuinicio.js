// import { BlendModes } from 'phaser';

export default class MenuInicio extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuInicio', active: true });
  }
  preload() {
    this.load.on('complete', () => {
      console.log('carga completa');
      // Puedes mover el inicio de otra escena aquí si es necesario
      // this.scene.start('OtraEscena'); // Solo si necesitas iniciar una escena diferente al completar la carga
      // this.scene.start(MenuInicio);
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
      'particle',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/particle.png'
    );
  }

  create() {
    this.add.image(0, 0, 'badgraund').setOrigin(0, 0);
    this.titulo = this.add.image(330, 250, 'titulo').setScale(0.3);

    this.tweens.add({
      targets: this.titulo,
      duration: 1000,
      y: 300,
      repeat: 4,
      yoyo: true
    });

    this.startButton = this.add.sprite
      .image(200, 600, 'botonju')
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

    this.startButtonExit = this.add
      .image(460, 600, 'botonsa')
      .setScale(0.4)
      .setInteractive();

    this.startButtonExit.on('pointerover', () => {
      this.startButtonExit.setFrame(1);
    });
    this.startButtonExit.on('pointerout', () => {
      this.startButtonExit.setFrame(0);
    });
    this.startButtonExit.on('pointerdown', () => {
      this.scene.start('GameOver');
    });

    // particulas
    const p = this.add.particles('particle');
    const emitter = p.createEmitter();
    emitter.setPosition(340, 300);
    emitter.setSpeed(300);
    emitter.setBlendModes(Phaser.BlendModes.ADD);
  }
}
