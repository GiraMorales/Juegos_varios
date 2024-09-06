import './header.css';

export const header = (divContenedor) => {
  //crear elementos
  const header = document.createElement('header');
  const buttonTER = document.createElement('button');
  const buttonMMR = document.createElement('button');
  const buttonTOS = document.createElement('button');

  //colocar texto a los elementos
  buttonTER.textContent = 'Tres en Raya';
  buttonMMR.textContent = 'Memory';
  buttonTOS.textContent = 'The Orange Star';

  //poner los elementos creador en el html
  header.append(buttonTER);
  header.append(buttonMMR);
  header.append(buttonTOS);
  divContenedor.append(header);
};
