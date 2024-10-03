import '../../pages/stylesGames.css';

export const descubrir = (event) => {
  var descubiertas;

  // Verifica la cantidad de tarjetas descubiertas antes de continuar.
  const totalDescubiertas = document.querySelectorAll('.tarjetasdescubiertas');
  if (totalDescubiertas.length > 1) {
    return;
  }

  // Añade la clase 'tarjetasdescubiertas' al elemento seleccionado.
  event.currentTarget.classList.add('tarjetasdescubiertas');

  // Actualiza la referencia a las tarjetas descubiertas.
  descubiertas = document.querySelectorAll('.tarjetasdescubiertas');

  // Verifica nuevamente la cantidad actualizada de tarjetas descubiertas.
  if (descubiertas.length < 2) {
    return;
  }
  // Muestra el contenido de las tarjetas descubiertas.
  if (descubiertas[0].textContent === descubiertas[1].textContent) {
    console.log('acierto');
  } else {
    console.log('error');
  }
};
