import '../../pages/stylesGames.css';

let ficha = 'X'; //ficha con la que empieza el jugador
let tableroEstado = ['', '', '', '', '', '', '', '', '']; // nueve casillas del tablero
let juegoActivo = true; //saber si el juego esta activo o no.

const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Filas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columnas
  [0, 4, 8],
  [2, 4, 6] // Diagonales
];

// Función para actualizar el marcador
const actualizarMarcador = (fichaGanadora, marcadorX, marcadorO) => {
  if (fichaGanadora === 'X') {
    const puntuacionX =
      parseInt(localStorage.getItem('puntuacionX') || '0') + 1;
    localStorage.setItem('puntuacionX', puntuacionX);
    marcadorX.textContent = `Jugador X: ${puntuacionX}`;
  } else {
    const puntuacionO =
      parseInt(localStorage.getItem('puntuacionO') || '0') + 1;
    localStorage.setItem('puntuacionO', puntuacionO);
    marcadorO.textContent = `Jugador O (IA): ${puntuacionO}`;
  }
};

// Lógica del juego
export const logicaTER = (celda, index, marcadorX, marcadorO) => {
  if (celda.textContent === '' && juegoActivo) {
    celda.textContent = ficha;
    tableroEstado[index] = ficha;
    verificarGanador(marcadorX, marcadorO);
    ficha = ficha === 'X' ? 'O' : 'X';

    // Si es el turno de la IA (ficha 'O'), hacer que juegue automáticamente
    if (juegoActivo && ficha === 'O') {
      setTimeout(() => jugarIA(marcadorX, marcadorO), 500);
    }
  }
};

// Función para que juegue la IA
const jugarIA = (marcadorX, marcadorO) => {
  const celdasVacias = tableroEstado
    .map((ficha, index) => (ficha === '' ? index : null))
    .filter((index) => index !== null);

  if (celdasVacias.length > 0) {
    const randomIndex =
      celdasVacias[Math.floor(Math.random() * celdasVacias.length)];
    const celda = document.querySelectorAll('.celda')[randomIndex];
    celda.textContent = 'O';
    tableroEstado[randomIndex] = 'O';
    verificarGanador(marcadorX, marcadorO);
    ficha = 'X';
  }
};

// Verificar ganador
const verificarGanador = (marcadorX, marcadorO) => {
  for (let combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (
      tableroEstado[a] &&
      tableroEstado[a] === tableroEstado[b] &&
      tableroEstado[a] === tableroEstado[c]
    ) {
      juegoActivo = false;
      actualizarMarcador(tableroEstado[a], marcadorX, marcadorO);
      alert(`¡${tableroEstado[a]} ha ganado!`);
      return;
    }
  }

  if (!tableroEstado.includes('')) {
    juegoActivo = false;
    alert('¡Es un empate!');
  }
};

// Reiniciar el juego
export const reiniciarJuego = (divTablero) => {
  tableroEstado = ['', '', '', '', '', '', '', '', ''];
  juegoActivo = true;
  ficha = 'X';

  const celdas = divTablero.querySelectorAll('.celda');
  celdas.forEach((celda) => {
    celda.textContent = '';
    celda.style.backgroundColor = '';
  });
};
