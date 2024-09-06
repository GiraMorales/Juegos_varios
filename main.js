import './style.css';
import { header } from './Componentes/header/header.js';
import { footer } from './Componentes/footer/footer.js';

// import './Componentes/games/theOrangeStar/init.js';

//crear el espacio donde irá el juego
const divContenedor = document.querySelector('#contenedor');
header(divContenedor);

footer(divContenedor);
