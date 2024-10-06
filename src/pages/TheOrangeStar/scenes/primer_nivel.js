// import { Scoreboard } from '../gameObjects/Scoreboard.js';
import '../init.js';
import '../bootloader.js';

export default class Primer_Nivel extends Phaser.Scene {
  constructor() {
    super({ key: 'Primer_Nivel' });
  }

  init() {
    // Marcador de puntos
    this.score = 0;
    this.liveCounter = 3;
  }

  preload() {
    // Cargar todos los recursos, incluyendo los audios
    this.load.audio('ambiente', '../audio/OzzedGettingStarted.mp3');
    this.load.audio('caer', '../audio/woosh.mp3');
    this.load.audio('perder', '../audio/flame.mp3');
    this.load.audio('punto', '../audio/beepsBonksBoinks.mp3');
  }

  create() {
    // El fondo
    this.add.image(0, 0, 'mapa').setOrigin(0, 0);

    // Plataformas
    this.platform = this.physics.add.staticGroup();
    this.platform.create(80, 660, 'ground').setScale(4.5, 1).refreshBody();
    this.platform.create(285, 660, 'ground').setScale(2.5, 1).refreshBody();
    this.platform.create(544, 660, 'ground').setScale(8, 1).refreshBody();
    this.platform.create(52, 550, 'ground').setScale(2.5, 0.5).refreshBody();
    this.platform.create(285, 505, 'ground').setScale(12.5, 1.5).refreshBody();
    this.platform.create(468, 545, 'ground').setScale(2, 1).refreshBody();
    this.platform.create(472, 300, 'ground').setScale(10, 1.5).refreshBody();
    this.platform.create(257, 320, 'ground').setScale(3, 0.5).refreshBody();
    this.platform.create(655, 390, 'ground').setScale(1, 15).refreshBody();
    this.platform.create(185, 170, 'ground').setScale(7, 1.5).refreshBody();
    this.platform.create(405, 170, 'ground').setScale(2, 1.5).refreshBody();
    this.platform.create(620, 105, 'ground').setScale(3, 1.5).refreshBody();
    this.platform.create(34, 150, 'ground').setScale(2, 2.5).refreshBody();

    // Tapas las plataformas
    this.add.image(0, 1, 'mapa1').setOrigin(0, 0);

    // Jugador
    this.player = this.physics.add.sprite(40, 580, 'player').setScale(1.3);
    this.player.setBounce(0.3);
    this.player.setCollideWorldBounds(true);

    // Para que se caiga por el hueco
    this.physics.world.setBoundsCollision(true, true, true, false);

    // Física y colisión con la plataforma
    this.physics.add.collider(this.player, this.platform);

    // Animaciones del jugador
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 9 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'player', frame: 0 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 4 }),
      frameRate: 10,
      repeat: -1
    });

    // Contador de vidas y puntuación
    this.liveCounterText = this.add.text(
      300,
      16,
      'vidas: ' + this.liveCounter,
      {
        fontSize: '25px',
        fill: '#000'
      }
    );

    this.scoreText = this.add.text(300, 40, 'score: 0', {
      fontSize: '25px',
      fill: '#000'
    });

    // Estrellas
    this.stars = this.physics.add.staticGroup();
    this.stars.create(410, 110, 'star');
    this.stars.create(210, 440, 'star');
    this.stars.create(620, 40, 'star');
    this.stars.create(450, 440, 'star');
    this.stars.create(300, 610, 'star');

    // Enemigos
    this.malos = this.physics.add.staticGroup();
    this.malos.create(520, 237, 'malo').setScale(2);
    this.malos.create(315, 445, 'malo').setScale(1.5);
    this.malos.create(602, 605, 'malo').setScale(2);

    // Colisiones
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar,
      null,
      this
    );
    this.physics.add.collider(
      this.player,
      this.malos,
      this.hitMalo,
      null,
      this
    );

    // Música
    const music = this.sound.add('ambiente', { loop: true });
    music.play();

    // Sonidos
    this.caerSound = this.sound.add('caer');
    this.perderSound = this.sound.add('perder');
    this.puntoSound = this.sound.add('punto');

    // Motor del cursor del teclado
    this.cursors = this.input.keyboard.createCursorKeys();

    // Listener para prevenir el desplazamiento de la pantalla
    this.input.keyboard.on('keydown', (event) => {
      if (
        event.key === 'ArrowRight' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowUp'
      ) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del navegador
      }
    });

    // Game over
    this.gameoverImage = this.add.image(340, 350, 'gameover').setScale(0.7, 1);
    this.gameoverImage.visible = false;
  }

  update() {
    const { left, right, down, up } = this.cursors;
    // Movimiento del jugador
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-130);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(130);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    // Saltar
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330); // Velocidad del salto
    }
  }

  collectStar(_player, star) {
    // Para puntuar cada vez que coje una estrella
    star.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText('score: ' + this.score);
    this.puntoSound.play();

    if (this.stars.countActive(true) === 0) {
      this.endGame(true); // Cambiar de nivel cuando se recojan todas las estrellas
    }
  }

  hitMalo(_player, malo) {
    malo.disableBody(true, true);
    this.perderSound.play();
    this.liveCounter -= 1; // Restar una vida
    this.liveCounterText.setText('vidas: ' + this.liveCounter);

    if (this.liveCounter <= 0) {
      this.endGame(); // Termina el juego si las vidas llegan a 0
    }
  }

  endGame(completed = false) {
    if (!completed) {
      this.gameoverImage.visible = true;
      this.physics.pause();
      this.time.delayedCall(3000, () => {
        this.scene.start('GameOver'); // Ir a Game Over después de 3 segundos
      });
    } else {
      this.scene.start('Segundo_Nivel'); // Cambiar de escena al segundo nivel
    }
  }
}
