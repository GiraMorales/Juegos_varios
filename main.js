import './style.css';
import './mediastyle.css';
import { header } from './src/components/header/header';
import { footer } from './src/components/footer/footer';

document.addEventListener('DOMContentLoaded', () => {
  //crear el espacio donde irá el juego
  const divContenedor = document.querySelector('#contenedor');

  //Mostrar header
  header(divContenedor);

  //crear el contenido dinámico
  const divContent = document.createElement('div');
  const portada = document.createElement('img');
  portada.src =
    'https://res.cloudinary.com/dvoady6dt/image/upload/v1731061603/assets/v2emb7b9w1pvurkxk87o.png';
  divContent.className = 'content';
  portada.className = 'portada';

  divContenedor.append(divContent);
  divContent.append(portada);

  //Mostrar footer
  footer(divContenedor);
});
