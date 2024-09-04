export class Scoreboard {
  constructor(scene) {
    this.relatedScene = scene;
    this.score = 0;
  }

  create() {
    // marcador de puntos
    this.scoreText = this.relatedScene.add.text(20, 20, 'PUNTOS: 0', {
      fontSize: '20px',
      fill: '#fffFF',
      fontFamily: 'vedana, arial, sans-serif'
    });
  }

  incrementPoints(points) {
    this.score += points;
    this.scoreText.setText('PUNTOS: ' + this.score);
  }
}
