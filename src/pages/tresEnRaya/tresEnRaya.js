import { logicaTER } from './logicaJuego';
import './tresEnRaya.css';

export const initTresEnRaya = () => {
  //Seleccionar el contendor
  const divContent = document.querySelector('.content');

  //crear un titulo, boton y tablero
  const titulo = document.createElement('h1');
  titulo.textContent = 'Tres en Raya';
  const buttonInicio = document.createElement('button');
  buttonInicio.textContent = 'Nuevo Juego';
  const divTablero = document.createElement('div');
  divTablero.className = 'tablero';

  //limpiar el contenido
  divContent.innerHTML;

  //añadir los elementos
  divContent.append(titulo, buttonInicio, divTablero);

  // buttonInicio.addEventListener('click', () => {
  //   reiniciarJuego(divTablero);
  // });

  //creación de celdas del tablero
  for (let i = 0; i < 9; i++) {
    const celda = document.createElement('div');
    celda.className = 'celda'; // Clase para las celdas
    celda.style.width = '100px';
    celda.style.height = '100px';
    celda.style.border = '1px solid black';
    celda.style.display = 'flex';
    celda.style.justifyContent = 'center';
    celda.style.alignItems = 'center';
    celda.style.fontSize = '2rem';
    celda.style.cursor = 'pointer';

    //click de las celdas
    // celda.addEventListener('click', () => {
    //   if (celda.textContent === '') {
    //     celda.textContent = 'X'; // Aquí se puede implementar la lógica del juego más tarde
    //   }
    // });

    divTablero.appendChild(celda); // Añadir cada celda al tablero
  }
};
// Función para reiniciar el juego
const reiniciarJuego = (divTablero) => {
  const celdas = divTablero.querySelectorAll('.celda');
  celdas.forEach((celda) => {
    celda.textContent = ''; // Limpiar las celdas
  });
};

logicaTER();
