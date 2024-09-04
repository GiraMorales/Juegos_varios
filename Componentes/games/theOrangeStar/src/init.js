//Importar la primera escena
import MenuInicio from '../src/scenes/menuinicio.js';
import Primer_Nivel from '../src/scenes/primer_nivel.js';
import Segundo_Nivel from '../src/scenes/segundo_nivel.js';
import GameOver from '../src/scenes/gameover.js';
import Bootloader from './bootloader.js';
import { Scoreboard } from '../src/gameObjects/Scoreboard.js';
import { RestartButton } from '../src/gameObjects/restart_button.js';

const config = {
  title: 'The Orange Star',
  type: Phaser.AUTO, // automatico coge webgl o canvas
  width: 880,
  height: 880,
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
  },
  funciones: {
    preload: preload,
    create: create,
    update: update
  }
};

//intstancia del juego
var game = new Phaser.Game(config);

function preload() {
  console.log('soy preload');
}

function create() {
  console.log('soy create');
}

function update(time, delta) {}
