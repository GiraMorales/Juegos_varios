import './style.css';
import { header } from './src/components/header/header';
import { footer } from './src/components/footer/footer';
// import './Componentes/games/theOrangeStar/init.js';

//crear el espacio donde irá el juego
const divContenedor = document.querySelector('#contenedor');

header(divContenedor);

const divContent = document.createElement('div');

divContent.className = 'content';

divContenedor.append(divContent);

footer(divContenedor);
