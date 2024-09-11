import './tresEnRaya.css';

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

// Función para que juegue la IA
const jugarIA = () => {
  // Buscar celdas vacías
  const celdasVacias = tableroEstado
    .map((ficha, index) => (ficha === '' ? index : null))
    .filter((index) => index !== null);

  // Si hay celdas vacías, hacer que la IA elija una aleatoriamente
  if (celdasVacias.length > 0) {
    const randomIndex =
      celdasVacias[Math.floor(Math.random() * celdasVacias.length)];
    const celda = document.querySelectorAll('.celda')[randomIndex];
    celda.textContent = ficha; // Colocar la ficha de la IA en la celda
    tableroEstado[randomIndex] = ficha; // Actualizar el estado del tablero
    verificarGanador(); // Verificar si hay un ganador después del movimiento
    ficha = ficha === 'X' ? 'O' : 'X'; // Cambiar de turno
  }
};

// Función para aplicar la lógica del juego en cada clic
export const logicaTER = (celda, index) => {
  if (celda.textContent === '' && juegoActivo) {
    celda.textContent = ficha; // Colocar "X" o "O" en la celda
    tableroEstado[index] = ficha; // Actualizar el estado del tablero
    verificarGanador(); // Verificar si hay un ganador
    ficha = ficha === 'X' ? 'O' : 'X'; // Alternar entre "X" y "O"

    if (juegoActivo && ficha === 'O') {
      setTimeout(jugarIA, 500);
    }
  }
};

//comprobar el ganador
const verificarGanador = () => {
  for (let combinacionGanadora of combinacionesGanadoras) {
    // Cambiamos "combinacion" a "combinacionGanadora"
    const [a, b, c] = combinacionGanadora; // Posiciones en el tablero
    if (
      tableroEstado[a] &&
      tableroEstado[a] === tableroEstado[b] &&
      tableroEstado[a] === tableroEstado[c]
    ) {
      juegoActivo = false; // el juego se detiene
      resaltarCeldasGanadoras(combinacionGanadora); // Cambiar el color de las celdas ganadoras
      mostrarPopUpGanador(tableroEstado[a]); // Mostrar el pop-up
      return;
    }
  }

  // Comprobar si hay empate
  if (!tableroEstado.includes('')) {
    juegoActivo = false;
    mostrarPopUpEmpate(); // Mostrar mensaje de empate
  }
};

// Cambiar el color de las celdas ganadoras
const resaltarCeldasGanadoras = (combinacionGanadora) => {
  combinacionGanadora.forEach((index) => {
    const celdaGanadora = document.querySelectorAll('.celda')[index];
    celdaGanadora.style.backgroundColor = 'yellow'; // Cambiar el color a amarillo
  });
};

// Mostrar pop-up de ganador
const mostrarPopUpGanador = (fichaGanadora) => {
  setTimeout(() => {
    alert(`¡${fichaGanadora} has ganado el juego!`);
  }, 200); // que salga el mensaje unos segundo mas tarde de ganar
};

// Mostrar pop-up de empate
const mostrarPopUpEmpate = () => {
  setTimeout(() => {
    alert('¡Es un empate!');
  }, 200); //que salga el mensaje unos segundo mas tarde de empatar
};

// Reiniciar el juego
export const reiniciarJuego = (divTablero) => {
  tableroEstado = ['', '', '', '', '', '', '', '', '']; // Reiniciar el estado del tablero
  juegoActivo = true; // Reactivar el juego
  ficha = 'X'; // Reiniciar la ficha

  // Limpiar las celdas
  const celdas = divTablero.querySelectorAll('.celda');
  celdas.forEach((celda) => {
    celda.textContent = ''; // Limpiar el contenido de las celdas
    celda.style.backgroundColor = ''; // Restablecer el color de las celdas
  });
};
