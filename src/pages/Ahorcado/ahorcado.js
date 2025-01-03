import '../../pages/stylesGames.css';
import './stylesAHC.css';
import { iniciarLogicaJuego, adivinarLetra } from './logicaJuegoAHC.js';

export const initAhorcado = () => {
  // Seleccionar el contenedor
  const divContent = document.querySelector('.content');

  // crear un titulo, botón y tablero
  const titulo = document.createElement('h1');
  const buttonJugar = document.createElement('button');
  const buttonSalir = document.createElement('button');
  const divTablero = document.createElement('div');
  const mensajeDisplay = document.createElement('p');
  const letrasIncorrectasDisplay = document.createElement('p');
  const intentosDisplay = document.createElement('p');
  const palabraDisplay = document.createElement('p');
  const form = document.createElement('form');
  const inputLetra = document.createElement('input');
  const canvas = document.createElement('canvas');

  // Configuración del canvas para el muñeco
  canvas.id = 'hangmanCanvas';
  canvas.width = 200;
  canvas.height = 300;

  //añadir texto
  titulo.textContent = 'Ahorcado';
  buttonJugar.textContent = 'JUGAR';
  buttonSalir.textContent = 'SALIR';
  mensajeDisplay.id = 'message';
  letrasIncorrectasDisplay.id = 'wrongLetters';
  intentosDisplay.id = 'remainingAttempts';
  palabraDisplay.id = 'word';
  inputLetra.id = 'guessInput';
  inputLetra.placeholder = 'Ingresa una letra';

  form.append(inputLetra);

  //añadir clases
  divTablero.className = 'tableroAHC';
  buttonJugar.className = 'inicio';
  buttonSalir.className = 'salir';
  divContent.className = 'grid';

  // Agregar elementos al tablero
  divTablero.append(
    canvas,
    palabraDisplay,
    mensajeDisplay,
    letrasIncorrectasDisplay,
    intentosDisplay,
    form
  );

  divContent.innerHTML = ''; // Limpiar el contenido
  divContent.append(titulo, buttonJugar, divTablero, buttonSalir);

  // Iniciar el juego automáticamente al cargar la página
  iniciarLogicaJuego();

  // Eventos de botones
  buttonSalir.addEventListener('click', () => window.location.reload());

  // Botón "REINICIAR" ahora sirve para reiniciar el juego
  buttonJugar.addEventListener('click', () => iniciarLogicaJuego());

  // Evento para el input de texto al presionar Enter
  inputLetra.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      adivinarLetra(inputLetra.value.toLowerCase());
      inputLetra.value = ''; // Limpiar el campo de entrada
    }
  });
};
