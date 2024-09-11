import './style.css';
import { header } from './src/components/header/header';
import { footer } from './src/components/footer/footer';

// import './Componentes/games/theOrangeStar/init.js';

//crear el espacio donde irá el juego
const divContenedor = document.querySelector('#contenedor');

header(divContenedor);

const divContent = document.createElement('div');
const portada = document.createElement('img');
portada.src =
  'https://res.cloudinary.com/dvoady6dt/image/upload/v1725898643/assets/nkuxyn2yrixprzoxqfv2.png';

divContent.className = 'content';
portada.className = 'portada';

divContenedor.append(divContent);
divContent.append(portada);

footer(divContenedor);
