import '../../pages/stylesGames.css';

export const initTheOrangeStar = () => {
  const divContent = document.querySelector('.content');
  // crear un titulo, botón y tablero
  const titulo = document.createElement('h1');
  const buttonJugar = document.createElement('button');
  const buttonSalir = document.createElement('button');
  const divTablero = document.createElement('div');

  //añadir texto
  titulo.textContent = 'The Orange Star';
  buttonJugar.textContent = 'JUGAR';
  buttonSalir.textContent = 'SALIR';

  //añadir clases
  divTablero.className = 'tablero';
  buttonJugar.className = 'inicio';
  buttonSalir.className = 'salir';
  divContent.className = 'grid';

  //limpiar el contenido
  divContent.innerHTML = '';

  //añadir los elementos
  divContent.append(titulo);
  divContent.append(buttonJugar);
  divContent.append(divTablero);
  divContent.append(buttonSalir);

  // Evento para reiniciar el juego
  buttonJugar.addEventListener('click', () => {
    reiniciarJuego(divTablero); // Reinicia el juego
  });

  //reiniciar la pantalla
  buttonSalir.addEventListener('click', () => {
    window.location.reload(); // Recarga la página
  });
};
