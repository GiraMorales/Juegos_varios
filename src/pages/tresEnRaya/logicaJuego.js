import './tresEnRaya.css';

let turno = 'X'; //ficha con la que empieza el jugador
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

// Función para aplicar la lógica del juego en cada clic
export const logicaTER = (celda, index) => {
  if (celda.textContent === '' && juegoActivo) {
    celda.textContent = turno; // Colocar "X" o "O" en la celda
    tableroEstado[index] = turno; // Actualizar el estado del tablero
    verificarGanador(); // Verificar si hay un ganador
    turno = turno === 'X' ? 'O' : 'X'; // Alternar entre "X" y "O"
  }
};

//comprobar el ganador
const verificarGanador = () => {
  for (let i = 0; i < combinacionesGanadoras.length; i++) {
    const [a, b, c] = combinacionesGanadoras[i];
    if (
      tableroEstado[a] &&
      tableroEstado[a] === tableroEstado[b] &&
      tableroEstado[a] === tableroEstado[c]
    ) {
      juegoActivo = false;
      alert('¡El juegado ${tableroEstadp[a]} ha ganado!');
      return;
    }
  }

  // Comprobar si hay empate
  if (!tableroEstado.includes('')) {
    juegoActivo = false;
    alert('¡Es un empate!');
  }
};

// Función para reiniciar el juego
export const reiniciarJuego = (divTablero) => {
  turno = 'X';
  tableroEstado = ['', '', '', '', '', '', '', '', '']; // Reiniciar el estado del tablero
  juegoActivo = true;
  divTablero.querySelectorAll('.celda').forEach((celda) => {
    celda.textContent = ''; // Limpiar las celdas
  });
};
