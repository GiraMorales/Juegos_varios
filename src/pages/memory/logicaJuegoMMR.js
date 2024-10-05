import '../../pages/stylesGames.css';

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

//barrajar tarjetas
export function barajarTarjetas() {
  return totalFichas.sort(() => 0.5 - Math.random());
}

export const descubrir = (event) => {
  var descubiertas;

  // Verifica la cantidad de tarjetas descubiertas antes de continuar.
  const totalDescubiertas = document.querySelectorAll(
    '.descubierta:not(.acertada)'
  );
  if (totalDescubiertas.length > 1) {
    return;
  }

  // Añade la clase 'descubierta' al elemento seleccionado.
  event.currentTarget.classList.add('descubierta');

  // Actualiza la referencia a las tarjetas descubiertas.
  descubiertas = document.querySelectorAll('.descubierta:not(.acertada)');

  // Verifica nuevamente la cantidad actualizada de tarjetas descubiertas.
  if (descubiertas.length < 2) {
    return;
  }
  comparar(descubiertas);
};

export const comparar = (tarjetasaComparar) => {
  // Muestra el contenido de las tarjetas descubiertas.
  if (tarjetasaComparar[0].textContent === tarjetasaComparar[1].textContent) {
    acierto(tarjetasaComparar);
  } else {
    error(tarjetasaComparar); // Ahora pasas tarjetasaComparar a error.
  }
};

export const acierto = (tarjetasaComparar) => {
  tarjetasaComparar.forEach((element) => {
    //cambia la clase para ocultar las tarjetas acertadas
    element.classList.add('acertada');
  });
};

export const error = (tarjetasaComparar) => {
  tarjetasaComparar.forEach((element) => {
    //cambia la clase que tenga su animacion y ver las tarjetas antes de que le cambie la clase las gire
    element.classList.add('error');
  });

  //le pongo un tiempo para que no me las gire de inmediato
  setTimeout(function () {
    tarjetasaComparar.forEach((element) => {
      //quita las clases para girar las tarjetas descubiertas
      element.classList.remove('descubierta');
      element.classList.remove('error');
    });
  }, 1000);
};
