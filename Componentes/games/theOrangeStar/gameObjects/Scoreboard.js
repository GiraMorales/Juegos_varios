export class Scoreboard {
  constructor(scene) {
    this.relatedScene = scene;
    this.score = 0; //Inicializa puntuación
  }

  create() {
    // Crear el marcador de puntos
    this.scoreText = this.relatedScene.add.text(20, 20, 'PUNTOS: 0', {
      fontSize: '20px',
      fill: '#fff',
      fontFamily: 'verdana, arial, sans-serif'
    });

    // Verificamos que el texto se haya creado correctamente
    if (!this.scoreText) {
      console.error('Error: No se pudo crear el marcador de puntos.');
    }
  }

  incrementPoints(points) {
    // Incrementar la puntuación solo si el marcador existe
    if (this.scoreText) {
      this.score += points;
      this.scoreText.setText('PUNTOS: ' + this.score);
    } else {
      console.error('Error: El marcador de puntos no está disponible.');
    }
  }
}
