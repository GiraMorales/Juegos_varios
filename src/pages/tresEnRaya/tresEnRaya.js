import { logicaTER, reiniciarJuego } from './logicaJuegoTER';
import '../../pages/stylesGames.css';
import './stylesTER.css';

export const initTresEnRaya = () => {
  //Seleccionar el contendor
  const divContent = document.querySelector('.content');

  //crear un titulo, boton y tablero
  const titulo = document.createElement('h1');
  const buttonNuevoJuego = document.createElement('button');
  const buttonSalir = document.createElement('button');
  const buttonReiniciarMarcador = document.createElement('button');
  const divTablero = document.createElement('div');
  const divMarcador = document.createElement('div');

  //añadir texto
  titulo.textContent = 'Tres en Raya';
  buttonNuevoJuego.textContent = 'Nuevo Juego';
  buttonSalir.textContent = 'SALIR';
  buttonReiniciarMarcador.textContent = 'Reiniciar Marcador';

  //añadir clases
  divTablero.className = 'tableroTER';
  buttonNuevoJuego.className = 'inicio';
  buttonSalir.className = 'salir';
  buttonReiniciarMarcador.className = 'Reini_Marcador';
  divMarcador.className = 'marcador';
  divContent.className = 'grid';

  // Inicializar marcador
  const marcadorX = document.createElement('p');
  const marcadorO = document.createElement('p');

  // Obtener puntuaciones de localStorage
  marcadorX.textContent = `Jugador X: ${
    localStorage.getItem('puntuacionX') || 0
  }`;
  marcadorO.textContent = `Jugador O: ${
    localStorage.getItem('puntuacionO') || 0
  }`;

  divMarcador.append(marcadorX, marcadorO);

  //limpiar el contenido
  divContent.innerHTML = '';

  //añadir los elementos
  divContent.append(titulo);
  divContent.append(divMarcador);
  divContent.append(buttonReiniciarMarcador);
  divContent.append(buttonNuevoJuego);
  divContent.append(divTablero);
  divContent.append(buttonSalir);

  //creación de celdas del tablero
  for (let i = 0; i < 9; i++) {
    const celda = document.createElement('div');
    celda.className = 'celda'; // Clase para las celdas
    // Vincular la lógica del juego a cada celda
    celda.addEventListener('click', () => {
      logicaTER(celda, i, marcadorX, marcadorO); // Lógica del juego
    });

    divTablero.appendChild(celda); // Añadir cada celda al tablero
  }
  // Evento para reiniciar el juego
  buttonNuevoJuego.addEventListener('click', () => {
    reiniciarJuego(divTablero); // Reinicia el juego
  });
  // Botón para reiniciar el marcador
  buttonReiniciarMarcador.addEventListener('click', () => {
    localStorage.setItem('puntuacionX', '0');
    localStorage.setItem('puntuacionO', '0');
    marcadorX.textContent = 'Jugador X: 0';
    marcadorO.textContent = 'Jugador O: 0';
  });
  //reiniciar la pantalla
  buttonSalir.addEventListener('click', () => {
    window.location.reload(); // Recarga la página
  });
};
