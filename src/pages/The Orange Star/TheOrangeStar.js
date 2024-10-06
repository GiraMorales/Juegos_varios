import '../../pages/stylesGames.css';
import { config } from './init.js';
import '../../../style.css';

export const initTheOrangeStar = () => {
  const divContent = document.querySelector('.content');
  // crear un titulo, botón y tablero
  const titulo = document.createElement('h1');
  const buttonJugar = document.createElement('button');
  const buttonSalir = document.createElement('button');
  const divTablero = document.createElement('div');

  //añadir texto
  titulo.textContent = 'The Orange Star';
  buttonJugar.textContent = 'JUGAR';
  buttonSalir.textContent = 'SALIR';

  //añadir clases
  divTablero.className = 'tablero';
  buttonJugar.className = 'inicio';
  buttonSalir.className = 'salir';
  divContent.className = 'grid';

  //limpiar el contenido
  divContent.innerHTML = '';

  //añadir los elementos al Dom
  divContent.append(titulo);
  divContent.append(buttonJugar);
  divContent.append(divTablero);
  divContent.append(buttonSalir);

  //variable para instanciar el juego
  let game = null;

  // Evento para iniciar el juego cuando se presiona el botón "JUGAR"
  buttonJugar.addEventListener('click', () => {
    if (!game) {
      // Asignar el contenedor dinámicamente para que Phaser se renderice ahí
      config.parent = divTablero;
      game = new Phaser.Game(config); // Iniciar el juego solo si aún no existe
    } else {
      game.scene.start('Primer_Nivel'); // Reiniciar la escena si ya existe el juego
    }
  });

  //reiniciar la pantalla
  buttonSalir.addEventListener('click', () => {
    window.location.reload(); // Recarga la página
  });
};

// //instancia del juego
// var game = new Phaser.Game(config);
