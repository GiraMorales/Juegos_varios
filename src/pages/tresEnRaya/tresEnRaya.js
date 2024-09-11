import { logicaTER, reiniciarJuego } from './logicaJuego';
import './tresEnRaya.css';

export const initTresEnRaya = () => {
  //Seleccionar el contendor
  const divContent = document.querySelector('.content');

  //crear un titulo, boton y tablero
  const titulo = document.createElement('h1');
  const buttonJugar = document.createElement('button');
  const buttonSalir = document.createElement('button');
  const divTablero = document.createElement('div');

  //añadir texto
  titulo.textContent = 'Tres en Raya';
  buttonJugar.textContent = 'Nuevo Juego';
  buttonSalir.textContent = 'SALIR';

  //añadir clases
  divTablero.className = 'tablero';
  buttonJugar.className = 'inicio';
  buttonSalir.className = 'salir';
  divContent.className = 'grid';

  //limpiar el contenido
  divContent.innerHTML = '';

  //añadir los elementos
  divContent.append(titulo);
  divContent.append(buttonJugar);
  divContent.append(divTablero);
  divContent.append(buttonSalir);

  //creación de celdas del tablero
  for (let i = 0; i < 9; i++) {
    const celda = document.createElement('div');
    celda.className = 'celda'; // Clase para las celdas
    // Vincular la lógica del juego a cada celda
    celda.addEventListener('click', () => {
      logicaTER(celda, i); // Lógica del juego
    });

    divTablero.appendChild(celda); // Añadir cada celda al tablero
  }
  // Evento para reiniciar el juego
  buttonJugar.addEventListener('click', () => {
    reiniciarJuego(divTablero); // Reinicia el juego
  });

  //reiniciar la pantalla
  buttonSalir.addEventListener('click', () => {
    window.location.reload(); // Recarga la página
  });
};
