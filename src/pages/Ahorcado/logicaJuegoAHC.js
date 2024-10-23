import '../../pages/stylesGames.css';

const palabras = [
  'Estudiante',
  'Adivinanza',
  'Transformar',
  'Dificultad',
  'Oportuno',
  'Afiladora',
  'Mariposas',
  'Juguetes',
  'Generador',
  'Alabanza',
  'Calabazas',
  'Empoderar',
  'Frustrante',
  'Caracteres',
  'Conectar',
  'Análisis',
  'Divertido',
  'Arrepentir',
  'Sensación',
  'Balançoire',
  'Adolescente',
  'Descubrir',
  'Aguijones',
  'Pararrayos',
  'Abandonar',
  'Asombroso',
  'Libertad',
  'Repetible',
  'Aprovechar'
];

// Seleccionar una palabra aleatoria
const palabraSeleccionada =
  palabras[Math.floor(Math.random() * palabras.length)];

// Variables del juego
let palabraOculta = Array(palabraSeleccionada.length).fill('_');
let intentosRestantes = 8;
let letrasFallidas = [];
