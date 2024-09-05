import '../../../style.css';
//Importar la primera escena
import MenuInicio from './scenes/menuinicio.js';
import Primer_Nivel from './scenes/primer_nivel.js';
import Segundo_Nivel from './scenes/segundo_nivel.js';
import GameOver from './scenes/gameover.js';
import Bootloader from './bootloader.js';
import { Scoreboard } from './gameObjects/Scoreboard.js';
import { RestartButton } from './gameObjects/restart_button.js';

const config = {
  title: 'The Orange Star',
  type: Phaser.AUTO, // automatico coge webgl o canvas
  width: 800,
  height: 600,
  parent: 'contenedor',
  pixelArt: true,
  scene: [
    Bootloader,
    MenuInicio,
    Primer_Nivel,
    Segundo_Nivel,
    Scoreboard,
    RestartButton,
    GameOver
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
};

//instancia del juego
var game = new Phaser.Game(config);

// function preload() {
//   this.load.image(
//     'badgraund',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/fondo.png'
//   );
//   this.load.image(
//     'mapa',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/mapa.png'
//   );
//   this.load.image(
//     'mapa1',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/mapa1.png'
//   );
//   this.load.image(
//     'titulo',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475039/assets/titulo.png'
//   );
//   this.load.image(
//     'botonju',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonJugar.png'
//   );
//   this.load.image(
//     'botonsa',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonSalir.png'
//   );
//   this.load.image(
//     'botonin',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/botonInicio.png'
//   );
//   this.load.image(
//     'paticle',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/particle.png'
//   );
//   this.load.image(
//     'star',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475039/assets/star.png'
//   );
//   this.load.image(
//     'naranja',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/orange.png'
//   );
//   this.load.image(
//     'exprimidor',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/exprimidor.png'
//   );
//   this.load.spritesheet(
//     'player',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/jugador.png',
//     {
//       frameWidth: 32,
//       frameHeight: 32
//     }
//   );
//   this.load.image(
//     'ball',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475037/assets/bola.png'
//   );
//   this.load.image(
//     'gameover',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/gameOver.png'
//   );
//   this.load.image(
//     'win',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475307/assets/youWin.png'
//   );
//   this.load.image(
//     'fondo',
//     'https://res.cloudinary.com/dvoady6dt/image/upload/v1725475038/assets/fondo.png'
//   );
// }

// function create() {
//   console.log('soy create');
// }

// function update(time, delta) {}
