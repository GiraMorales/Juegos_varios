import './tresEnRaya.css';

export const initTresEnRaya = () => {
  const divContenedor = document.querySelector('#contenedor');

  const divTresEnRaya = document.createElement('div');

  divContenedor.innerHTML = `<h1>Tres en Raya</h1>`;

  divContenedor.append(divTresEnRaya);
};
