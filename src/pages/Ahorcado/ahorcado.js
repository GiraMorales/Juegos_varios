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
  const submitButton = document.createElement('button');
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
  submitButton.textContent = 'Adivinar';

  form.append(inputLetra, submitButton);

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

  // Eventos de botones
  buttonSalir.addEventListener('click', () => window.location.reload());
  buttonJugar.addEventListener('click', iniciarLogicaJuego);

  // Evento para el formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    adivinarLetra(inputLetra.value.toLowerCase());
    inputLetra.value = ''; // Limpiar el campo de entrada
  });
};
