import '../../pages/stylesGames.css';
import './stylesAHC.css';

export const initAhorcado = () => {
  // Seleccionar el contenedor
  const divContent = document.querySelector('.content');
  // crear un titulo, botón y tablero
  const titulo = document.createElement('h1');
  const buttonJugar = document.createElement('button');
  const buttonSalir = document.createElement('button');
  const divTablero = document.createElement('div');

  //añadir texto
  titulo.textContent = 'Ahorcado';
  buttonJugar.textContent = 'JUGAR';
  buttonSalir.textContent = 'SALIR';

  //añadir clases
  divTablero.className = 'tableroAHC';
  buttonJugar.className = 'inicio';
  buttonSalir.className = 'salir';
  divContent.className = 'grid';

  //limpiar el contenido
  divContent.innerHTML = '';

  //añadir los elementos
  divContent.append(titulo, buttonJugar, divTablero, buttonSalir);
};
