import { initMemory } from '../../pages/memory/memory';
import { initTheOrangeStar } from '../../pages/The Orange Star/TheOrangeStar';
import { initTresEnRaya } from '../../pages/tresEnRaya/tresEnRaya';
import './header.css';

export const header = (divContenedor) => {
  //crear elementos
  const headerElement = document.createElement('header');
  const buttonTER = document.createElement('button');
  const buttonMMR = document.createElement('button');
  const buttonTOS = document.createElement('button');

  //colocar texto a los elementos
  buttonTER.textContent = 'Tres en Raya';
  buttonMMR.textContent = 'Memory';
  buttonTOS.textContent = 'The Orange Star';

  //funcionalidad del boton
  buttonTER.addEventListener('click', initTresEnRaya, '.visible');
  buttonMMR.addEventListener('click', initMemory);
  buttonTOS.addEventListener('click', initTheOrangeStar);

  // Alternar visibilidad del header
  buttonTER.addEventListener('click', () => {
    headerElement.classList.toggle('hidden');
  });

  //poner los elementos creador en el html
  headerElement.append(buttonTER);
  headerElement.append(buttonMMR);
  headerElement.append(buttonTOS);
  divContenedor.append(headerElement);
};
