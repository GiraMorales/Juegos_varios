import './style.css';
import './mediastyle.css';
import { header } from './src/components/header/header';
import { footer } from './src/components/footer/footer';
// import { initMemory } from './games/memoryGame'; // Importa el segundo juego
// import { initTheOrangeStar } from './games/theOrangeStar/TheOrangeStar'; // Importa The Orange Star

document.addEventListener('DOMContentLoaded', () => {
  //crear el espacio donde irá el juego
  const divContenedor = document.querySelector('#contenedor');

  //Mostrar header
  header(divContenedor);

  //crear el contenido dinámico
  const divContent = document.createElement('div');
  const portada = document.createElement('img');
  portada.src =
    'https://res.cloudinary.com/dvoady6dt/image/upload/v1728226096/assets/an8qxq0wmzq8esejqx88.png';
  divContent.className = 'content';
  portada.className = 'portada';

  divContenedor.append(divContent);
  divContent.append(portada);

  //Mostrar footer
  footer(divContenedor);
});
