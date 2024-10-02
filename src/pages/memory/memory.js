import '../../pages/stylesgames.css';
import './stylesMMR.css';

const fichas = [
  '👾',
  '👽',
  '👻',
  '🤖',
  '🐱‍👤',
  '🕸',
  '✨',
  '🎯',
  '🧩',
  '🎹',
  '🎪',
  '🧶',
  '🎈',
  '🎪',
  '🥽'
];

const totalFichas = fichas.concat(fichas);

export const initMemory = () => {
  // Seleccionar el contenedor
  const divContent = document.querySelector('.content');
  // crear un titulo, botón y tablero
  const titulo = document.createElement('h1');
  const buttonRepartir = document.createElement('button');
  const buttonSalir = document.createElement('button');
  const divTablero = document.createElement('div');

  //añadir texto
  titulo.textContent = 'Memory';
  buttonRepartir.textContent = 'BARAJAR';
  buttonSalir.textContent = 'SALIR';

  //añadir clases
  divTablero.className = 'tableroMMR';
  buttonRepartir.className = 'inicio';
  buttonSalir.className = 'salir';
  divContent.className = 'grid';

  //limpiar el contenido
  divContent.innerHTML = '';

  //añadir los elementos
  divContent.append(titulo);
  divContent.append(buttonRepartir);
  divContent.append(divTablero);
  divContent.append(buttonSalir);

  //barrajar tarjetas
  function barajarTarjetas() {
    var barajada;
    barajada = totalFichas.sort(function () {
      return 0.5 - Math.random();
    });
    return barajada;
  }

  //creación de tarjetas en el tablero
  const reparteTarjetas = () => {
    const tarjetasBarajadas = barajarTarjetas();
    //seleccionar el tablero
    const divtablero = document.querySelector('.tableroMMR');
    divtablero.innerHTML = ''; //para que lo limpie antes de repartir las tarjetas

    tarjetasBarajadas.forEach((element) => {
      //crear una tarjeta para cada ficha
      const divtarjeta = document.createElement('div');
      divtarjeta.className = 'tarjetas'; // Añadir la clase para el estilo
      //parte frontal de la tarjeta
      const frontFace = document.createElement('div');
      frontFace.className = 'front-face';
      // parte trasera de la tarjeta
      const backFace = document.createElement('div');
      backFace.className = 'back-face';

      // Añadir el símbolo a la parte trasera
      backFace.innerHTML = element;

      // Añadir las dos caras a la tarjeta
      divtarjeta.appendChild(frontFace);
      divtarjeta.appendChild(backFace);
      // Añadir la tarjeta al tablero
      divtablero.appendChild(divtarjeta);
    });
  };

  const descubrir = (event) => {
    event.currentTarget.classList.add('tarjetasdescubiertas');
  };

  reparteTarjetas();

  document.querySelectorAll('.tarjetas').forEach(function (element) {
    element.addEventListener('click', descubrir);
  });

  // Evento para reiniciar el juego
  buttonRepartir.addEventListener('click', () => {
    reiniciarJuego(divTablero); // Reinicia el juego
  });

  //reiniciar la pantalla
  buttonSalir.addEventListener('click', () => {
    window.location.reload(); // Recarga la página
  });
};
