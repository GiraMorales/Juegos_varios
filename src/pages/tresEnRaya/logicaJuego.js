let turno = 'X'; //ficha con la que empieza el jugador
let tableroEstado = ['', '', '', '', '', '', '', '', '']; // nueve casillas del tablero
let juegoActivo = true; //saber si el juego esta activo o no.

//combinaciones
export const logicaTER = () => {
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
};
