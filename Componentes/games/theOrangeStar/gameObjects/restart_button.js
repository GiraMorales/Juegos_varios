export class RestartButton {
  constructor(scene) {
    this.relatedScene = scene;
  }
  // preload() {
  //   this.relatedScene.load.spritesheet(
  //     'botonju',
  //     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonJugar.png',
  //     { frameWidth: 190, frameHeight: 49 }
  //   );
  // }

  preload() {
    if (this.load) {
      this.load.image(
        'bontonju',
        'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonJugar.png'
      ),
        { frameWidth: 190, frameHeight: 49 };
    } else {
      console.error('El método load no está definido en this');
    }
  }

  create() {
    this.botonju = this.relatedScene.add
      .sprite(400, 230, 'botonju')
      .setInteractive();

    this.startButton.on('pointerover', () => {
      this.startButton.setFrame(1);
    });
    this.startButton.on('pointerout', () => {
      this.startButton.setFrame(0);
    });
    this.startButton.on('pointerdown', () => {
      this.relatedScene.scene.start('game');
    });
  }
}
