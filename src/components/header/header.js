import { initMemory } from '../../pages/memory/memory';
import { initAhorcado } from '../../pages/Ahorcado/ahorcado';
import { initTresEnRaya } from '../../pages/tresEnRaya/tresEnRaya';
import './header.css';

export const header = (divContenedor) => {
  //crear elementos
  const headerElement = document.createElement('header');
  const buttonTER = document.createElement('button');
  const buttonMMR = document.createElement('button');
  const buttonAHC = document.createElement('button');

  //colocar texto a los elementos
  buttonTER.textContent = 'Tres en Raya';
  buttonMMR.textContent = 'Memory';
  buttonAHC.textContent = 'Ahorcado';

  //funcionalidad del boton
  buttonTER.addEventListener('click', initTresEnRaya, '.visible');
  buttonMMR.addEventListener('click', initMemory, '.visible');
  buttonAHC.addEventListener('click', initAhorcado, '.visible');

  // Alternar visibilidad del header
  buttonTER.addEventListener('click', () => {
    headerElement.classList.toggle('hidden');
  });
  buttonMMR.addEventListener('click', () => {
    headerElement.classList.toggle('hidden');
  });
  buttonAHC.addEventListener('click', () => {
    headerElement.classList.toggle('hidden'); // Ocultar el header al hacer clic
  });

  //poner los elementos creador en el header
  headerElement.append(buttonTER);
  headerElement.append(buttonMMR);
  headerElement.append(buttonAHC);

  //añadir el header al conetenedor principal
  divContenedor.append(headerElement);
};
