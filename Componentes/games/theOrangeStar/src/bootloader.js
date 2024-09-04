export default class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: 'Bootloader' });
  }
  preload() {
    //cargar la primer cuando este cargado todo
    // this.load.on("complete", () => {
    // this.scene.start(Primer_Nivel);
    // })

    // console.log('Bootloader');
    // this.load.setPath('./assets/');

    //imagenes
    this.load.image(
      'mapa',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/mapa.png'
    );
    this.load.image(
      'mapa1',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/mapa1.png'
    );
    this.load.image(
      'star',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475039/assets/star.png'
    );
    this.load.image(
      'malo',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/exprimidor.png'
    );
    this.load.spritesheet(
      'player',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/jugador.png',
      {
        frameWidth: 32,
        frameHeight: 32
      }
    );
    this.load.image(
      'gameover',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/gameOver.png'
    );
    this.load.image(
      'fondo',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/fondo.png'
    );
    this.load.image(
      'win',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475307/assets/youWin.png'
    );
    this.load.image(
      'ball',
      'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/bola.png'
    );

    //sonidos
    this.load.audio('punto', ['./audio/beepsBonksBoinks.mp3']);
    this.load.audio('perder', ['audio/flame.mp3']);
    this.load.audio('caer', ['audio/woosh.mp3']);
    this.load.audio('ambiente', ['audio/OzzedGettingStarted.mp3']);
    this.load.audio('ganar', ['audio/electroBeepAccentEC.mp3']);

    this.load.on('complete', () => {
      console.log('Load complete');
    });
  }
}
