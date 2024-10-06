import { Scoreboard } from '../gameObjects/Scoreboard.js';

export default class Segundo_Nivel extends Phaser.Scene {
  constructor() {
    super({ key: 'Segundo_Nivel' });
  }
  init() {
    this.scoreboard = new Scoreboard(this);
  }

  create() {
    //fondo
    this.add.image(0, 0, 'badgraund').setOrigin(0, 0);
    //Game over
    this.gameoverImage = this.add.image(340, 350, 'gameover').setScale(0.7, 1);
    this.gameoverImage.visible = false;

    // marcador de puntos
    this.scoreboard.create();

    //jugador desde donde aparece en la pantalla al empezar, y el tamaño
    this.naranja = this.physics.add
      .image(350, 630, 'naranja')
      .setScale(3)
      .setImmovable();
    this.naranja.body.allowGravity = false;

    //colision contra los limites del mundo
    this.naranja.setCollideWorldBounds();

    //para que la bola caiga por el hueco y choque con las paredes
    this.physics.world.setBoundsCollision(true, true, true, false);
    //fisicas de la bola
    // this.ball = this.physics.add.image(200, 200, 'ball');

    //para que empieze pegada al muñeco
    this.ball = this.physics.add.image(350, 575, 'ball');
    this.ball.setData('glue', true);
    this.ball.setCollideWorldBounds(true);

    //para que la bola salga a un velocidad diferente cada vez
    let velocity = 100 * Phaser.Math.Between(1.3, 2);
    if (Phaser.Math.Between(0, 10) > 5) {
      velocity = 0 - velocity;
    }
    this.ball.setVelocity(velocity, 10);

    //que la bola choche con el jugador
    this.physics.add.collider(
      this.ball,
      this.naranja,
      this.naranjazo,
      null,
      this
    );
    //para que rebote con la misma fuerza que cae
    this.ball.setBounce(1);

    //chocaar la bola con los malos
    this.physics.add.collider(this.ball, this.zumos, this.hitzumos, null, this);

    //grupo de malos puesto en una regilla
    this.zumos = this.physics.add.staticGroup({
      key: ['malo', 'malo', 'malo', 'malo'],
      frameQuantity: 5,
      gridAlign: {
        width: 10,
        height: 4,
        cellHeight: 70,
        cellWidth: 55,
        x: 112,
        y: 200
      }
    });

    //motor del cursor del teclado
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    //presionar la tecla de la derecha va a la derecha
    if (this.cursors.left.isDown) {
      this.naranja.setVelocityX(-500);
      if (this.ball.setData('glue')) {
        this.ball.setVelocityX(-500);
      }
    }
    //presionar la tecla de la izquierda va a la izquierda
    else if (this.cursors.right.isDown) {
      this.naranja.setVelocityX(500);
      if (this.ball.setData('glue')) {
        this.ball.setVelocityX(500);
      }
    }
    //si no se toca nada no se mueve
    else {
      this.naranja.setVelocityX(0);
      if (this.ball.setData('glue')) {
        this.ball.setVelocityX(0);
      }
    }

    //cuando la bola caiga fuer de la pantalla salga mensaje game over
    if (this.ball.y > 680) {
      this.gameoverImage.visible = true;
      this.scene.pause();
    }

    if (this.cursors.up.isDown) {
      this.ball.setVelocity(-75, -300);
      this.ball.setData('glue', false);
    }
  }
  hitzumos(_ball, _malo) {
    this.scoreboard.incrementPoints(10);
    //this.score++;
    // this.scoreText.setText ('PUNTOS: ' + this.score);
  }
  // que la bola vaya a un lado o a otro segun en la parte del muñeco que toque mas a la derecha o más a la izquierda
  naranjazo(_ball, _naranja) {
    let relativeImpact = this.ball.x - this.naranja.x;
    console.log(relativeImpact);
  }
}
