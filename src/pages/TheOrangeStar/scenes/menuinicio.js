export default class MenuInicio extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuInicio', active: true });
  }
  preload() {
    this.load.on('complete', () => {
      console.log('carga completa');
    });

    //cargar recursos
    this.load.image(
      'background',
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
    //añadir fondo
    this.add.image(0, 0, 'background').setOrigin(0, 0);

    //añadir titulo
    this.titulo = this.add.image(330, 250, 'titulo').setScale(0.3);
    // animación del titulo
    this.tweens.add({
      targets: this.titulo,
      duration: 1000,
      y: 300,
      repeat: 4,
      yoyo: true
    });

    //botón de jugar
    this.startButtonPlay = this.add
      .image(200, 600, 'botonju')
      .setScale(0.4)
      .setInteractive();
    this.startButtonPlay.on('pointerover', () => {
      this.startButtonPlay.setTint(0xffcc00); // Cambia el color del botón al pasar el mouse
    });
    this.startButtonPlay.on('pointerout', () => {
      this.startButtonPlay.clearTint(); // Vuelve al color original
    });
    this.startButtonPlay.on('pointerdown', () => {
      this.scene.start('Primer_Nivel'); // Iniciar la escena del primer nivel
    });

    //botón de salir
    this.startButtonExit = this.add
      .image(460, 600, 'botonsa')
      .setScale(0.4)
      .setInteractive();
    this.startButtonExit.on('pointerover', () => {
      this.startButtonExit.setTint(0xffcc00); // Cambia el color del botón al pasar el mouse
    });
    this.startButtonExit.on('pointerout', () => {
      this.startButtonExit.clearTint(); // Vuelve al color original
    });
    this.startButtonExit.on('pointerdown', () => {
      this.scene.start('GameOver'); // Iniciar la escena de Game Over (o cerrar el juego si se aplica)
    });
  }
}
