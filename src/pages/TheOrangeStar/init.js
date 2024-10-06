import '../../../style.css';
import Bootloader from './bootloader.js';
//Importar la primera escena
import MenuInicio from './scenes/menuinicio.js';
import Primer_Nivel from './scenes/primer_nivel.js';
import Segundo_Nivel from './scenes/segundo_nivel.js';
import GameOver from './scenes/gameover.js';
import { Scoreboard } from './gameObjects/Scoreboard.js';
import { RestartButton } from './gameObjects/restart_button.js';

//configuaración del juego
export const config = {
  title: 'The Orange Star',
  type: Phaser.AUTO, // automatico coge webgl o canvas
  width: 660,
  height: 660,
  parent: 'contenedor', // se asignará dinamicamente en TheOrangeStar.js
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
