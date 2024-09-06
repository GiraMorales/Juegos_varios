import './footer.css';

export const footer = (divContenedor) => {
  const footer = document.createElement('footer');
  footer.innerHTML = `<h3>By Gira Morales Revelles</h3>`;

  divContenedor.append(footer);
};
