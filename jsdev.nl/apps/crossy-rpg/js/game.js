'use strict'

// new scene
let gameScene = new Phaser.Scene('Game');

// initate scene parameters
gameScene.init = function () {
    //player speed
    this.playerSpeed = 3;

    //enemy speed
    this.enemyMinSpeed = 2;
    this.enemyMaxSpeed = 4.5;

    //boundaries
    this.enemyMinY = 80;
    this.enemyMaxY = 280;

    this.isTerminating = false;

    //  Inject our custom font CSS
    var element = document.createElement('style');
    document.head.appendChild(element);
    var sheet = element.sheet;
    var styles = '@font-face { font-family: "VT323"; src: url("https://fonts.googleapis.com/css?family=VT323") format("opentype"); }\n';
    sheet.insertRule(styles, 0);
}

// load assets
gameScene.preload = function () {
    // preload images
    this.load.image('background', 'assets/images/background.png');
    this.load.image('player', 'assets/images/player.png');
    this.load.image('enemy', 'assets/images/dragon.png');
    this.load.image('goal', 'assets/images/treasure.png');

    this.load.audio('hitDragon', 'assets/audio/hitDragon.mp3');
    this.load.audio('treasureChest', 'assets/audio/treasureChest.mp3');

    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
};

// create
gameScene.create = function () {
    // create bg sprite
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0); // or bg.setPosition(config.width / 2, config.height / 2);

    // create player
    this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
    this.player.setScale(0.5); // change scale

    this.goal = this.add.sprite(config.width - 80, config.height / 2, 'goal');
    this.goal.setScale(0.6);

    this.enemies = this.add.group({
        key: 'enemy',
        repeat: 4,
        setXY: {
            stepX: 90,
            x: 120,
            y: 100,
            stepY: 20
        }
    });
    // create sounds
    this.hitDragon = this.sound.add('hitDragon');
    this.treasureChest = this.sound.add('treasureChest');



    // apply scale to all group elements
    Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.4, -0.4);

    // set flipX, and speed
    Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
        enemy.flipX = true;

        let dir = Math.random() < 0.5 ? 1 : -1;
        let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
        enemy.speed = dir * speed;
    }, this);


    var add = this.add;
    var input = this.input;

    WebFont.load({
        custom: {
            families: ['VT323']
        },
        active: function () {
            add.text(32, 32, '000', {
                fontFamily: 'VT323',
                fontSize: 80,
                color: '#ff0000'
            }).setShadow(2, 2, "#333333", 2, false, true);
        }
    });
    // player.scaleX = 1;
    // player.scaleY = 1;

    // this.enemy1 = this.add.sprite(250, 180, 'enemy');
    // this.enemy2 = this.add.sprite(450, 180, 'enemy');

    // change origin of rotation
    // this.enemy1.setOrigin(0, 0);

    // rotate
    // this.enemy1.angle = 45;
    // this.enemy1.rotation = Math.PI / 4;

    // change width
    // enemy2.displayWidth = 70;

    // flip
    // enemy1.flipX = true;
};

// this is called 60 times per second
gameScene.update = function () {
    // this.enemy1.x += 1
    // this.enemy1.angle += 1;

    // if (this.enemy1.scaleX <= 2) {
    //     this.enemy1.scaleX += 0.01;
    //     this.enemy1.scaleY += 0.01;
    // }
    // Dont execute if we are terminating 
    if (this.isTerminating) return;

    //check for active input
    if (this.input.activePointer.isDown) {
        this.player.x += this.playerSpeed;
    }

    let enemies = this.enemies.getChildren();
    let numEnemies = enemies.length;

    // treasure overlap check
    let playerRect = this.player.getBounds();
    let treasureRect = this.goal.getBounds();

    if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, treasureRect)) {
        // restart Scene
        this.treasureChest.play();
        return this.gameOver();
    }

    for (let i = 0; i < numEnemies; i++) {
        // enemy movement
        enemies[i].y += enemies[i].speed;

        // check min / max Y pos
        const conditionUp = enemies[i].y < 0 || enemies[i].y <= this.enemyMinY;
        const conditionDown = enemies[i].y > 0 && enemies[i].y >= this.enemyMaxY;

        if (conditionUp || conditionDown) {
            enemies[i].speed *= -1;
        }

        // check enemy overlap
        let enemyRect = enemies[i].getBounds();

        if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)) {
            this.hitDragon.play();
            return this.gameOver();
        }
    }
};

gameScene.gameOver = function () {
    this.isTerminating = true;
    this.cameras.main.shake(500);
    this.cameras.main.on('camerashakecomplete', function (camera, effect) {
        this.cameras.main.fade(500);
        //this.scene.restart();
    }, this)
    this.cameras.main.on('camerafadeoutcomplete', function (camera, effect) {
        this.scene.restart();
    }, this)
};

// config
const config = {
    type: Phaser.AUTO, // WebGl if available, canvas fallback
    width: 640,
    height: 360,
    scene: gameScene
};

// create new game, pass the config
let game = new Phaser.Game(config);