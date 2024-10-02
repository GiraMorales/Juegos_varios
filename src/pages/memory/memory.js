import '../../pages/stylesgames.css';
import './stylesMMR.css';

export const initMemory = () => {
  // Seleccionar el contenedor
  const divContent = document.querySelector('.content');
  // crear un titulo, botón y tablero
  const titulo = document.createElement('h1');
  const buttonRepartir = document.createElement('button');
  const buttonSalir = document.createElement('button');
  const divTablero = document.createElement('div');
  const divtarjetas = document.createElement('div');

  //añadir texto
  titulo.textContent = 'Memory';
  buttonRepartir.textContent = 'BARAJAR';
  buttonSalir.textContent = 'SALIR';

  //añadir clases
  divTablero.className = 'tablero';
  buttonRepartir.className = 'inicio';
  buttonSalir.className = 'salir';
  divContent.className = 'grid';
  divtarjetas.className = 'tarjetas';

  //limpiar el contenido
  divContent.innerHTML = '';

  //añadir los elementos
  divContent.append(titulo);
  divContent.append(buttonRepartir);
  divContent.append(divTablero);
  divContent.append(buttonSalir);
  divTablero.append(divtarjetas);

  //creación de tarjetas en el tablero
  const reparteTarjetas = (fichas) => {
    fichas.forEach((element) => {
      console.log(element);
    });
  };

  reparteTarjetas();

  // Evento para reiniciar el juego
  buttonRepartir.addEventListener('click', () => {
    reiniciarJuego(divTablero); // Reinicia el juego
  });

  //reiniciar la pantalla
  buttonSalir.addEventListener('click', () => {
    window.location.reload(); // Recarga la página
  });
};
