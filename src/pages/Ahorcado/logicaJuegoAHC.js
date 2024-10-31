import '../../pages/stylesGames.css';

const palabras = [
  'Estudiante',
  'Adivinanza',
  'Transformar',
  'Dificultad',
  'Oportuno',
  'Afiladora',
  'Mariposas',
  'Juguetes',
  'Generador',
  'Alabanza',
  'Calabazas',
  'Empoderar',
  'Frustrante',
  'Caracteres',
  'Conectar',
  'Análisis',
  'Divertido',
  'Arrepentir',
  'Sensación',
  'Balançoire',
  'Adolescente',
  'Descubrir',
  'Aguijones',
  'Pararrayos',
  'Abandonar',
  'Asombroso',
  'Libertad',
  'Repetible',
  'Aprovechar'
];

let palabraSeleccionada;
let palabraOculta;
let intentosRestantes;
let letrasFallidas = [];

// Inicializa el juego
export const iniciarLogicaJuego = () => {
  palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
  palabraOculta = Array(palabraSeleccionada.length).fill('_');
  intentosRestantes = 8;
  letrasFallidas = [];

  // Limpiar canvas y mostrar estado inicial
  limpiarCanvas();
  // Mostrar estado inicial
  document.getElementById('word').textContent = palabraOculta.join(' ');
  document.getElementById(
    'remainingAttempts'
  ).textContent = `Intentos restantes: ${intentosRestantes}`;
  document.getElementById('wrongLetters').textContent = '';
  document.getElementById('message').textContent = '¡Comienza el juego!';
  document.getElementById('guessInput').disabled = false;
};

// Función para manejar adivinanza
export const adivinarLetra = (letra) => {
  const palabraDisplay = document.getElementById('word');
  const mensajeDisplay = document.getElementById('message');
  const letrasIncorrectasDisplay = document.getElementById('wrongLetters');
  const intentosDisplay = document.getElementById('remainingAttempts');

  if (!letra || letra.length !== 1 || !/^[a-zñ]$/i.test(letra)) {
    mensajeDisplay.textContent = 'Por favor, ingresa una letra válida.';
    return;
  }

  if (palabraSeleccionada.includes(letra)) {
    for (let i = 0; i < palabraSeleccionada.length; i++) {
      if (palabraSeleccionada[i] === letra) {
        palabraOculta[i] = letra;
      }
    }
    palabraDisplay.textContent = palabraOculta.join(' ');
    mensajeDisplay.textContent = '¡Letra correcta!';

    if (!palabraOculta.includes('_')) {
      mensajeDisplay.textContent = '¡Felicidades, ganaste!';
      document.getElementById('guessInput').disabled = true;
    }
  } else {
    if (!letrasFallidas.includes(letra)) {
      letrasFallidas.push(letra);
      letrasIncorrectasDisplay.textContent = letrasFallidas.join(', ');
      intentosRestantes--;
      intentosDisplay.textContent = `Intentos restantes: ${intentosRestantes}`;
      mensajeDisplay.textContent = 'Letra incorrecta.';

      // Llamada a dibujarAhorcado con el número de intentos fallidos
      dibujarAhorcado(8 - intentosRestantes);

      if (intentosRestantes === 0) {
        mensajeDisplay.textContent = `Perdiste. La palabra era "${palabraSeleccionada}".`;
        document.getElementById('guessInput').disabled = true;
      }
    } else {
      mensajeDisplay.textContent = 'Ya adivinaste esa letra.';
    }
  }
};
// Función para dibujar el ahorcado en el canvas
function dibujarAhorcado(intentos) {
  const canvas = document.getElementById('hangmanCanvas');
  const ctx = canvas.getContext('2d');

  ctx.lineWidth = 2;
  ctx.strokeStyle = '#333';

  switch (intentos) {
    case 1: // Base
      ctx.moveTo(10, 290);
      ctx.lineTo(190, 290);
      ctx.stroke();
      break;
    case 2: // Poste vertical
      ctx.moveTo(50, 290);
      ctx.lineTo(50, 10);
      ctx.stroke();
      break;
    case 3: // Soporte superior
      ctx.moveTo(50, 10);
      ctx.lineTo(150, 10);
      ctx.stroke();
      break;
    case 4: // Cuerda
      ctx.moveTo(150, 10);
      ctx.lineTo(150, 50);
      ctx.stroke();
      break;
    case 5: // Cabeza
      ctx.beginPath();
      ctx.arc(150, 80, 30, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case 6: // Cuerpo
      ctx.moveTo(150, 110);
      ctx.lineTo(150, 200);
      ctx.stroke();
      break;
    case 7: // Brazo izquierdo
      ctx.moveTo(150, 140);
      ctx.lineTo(120, 180);
      ctx.stroke();
      break;
    case 8: // Brazo derecho
      ctx.moveTo(150, 140);
      ctx.lineTo(180, 180);
      ctx.stroke();
      break;
    case 9: // Pierna izquierda
      ctx.moveTo(150, 200);
      ctx.lineTo(120, 250);
      ctx.stroke();
      break;
    case 10: // Pierna derecha
      ctx.moveTo(150, 200);
      ctx.lineTo(180, 250);
      ctx.stroke();
      break;
  }
}

// Función para limpiar el canvas (para reiniciar el juego)
function limpiarCanvas() {
  const canvas = document.getElementById('hangmanCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
