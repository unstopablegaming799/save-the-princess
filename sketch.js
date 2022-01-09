var prince,princeImg
var fireball,fireballImg,fireballGroup
var monster,monsterImg,monsterGroup
var ground
var bullet,bulletGroup
var gameState = "play"
var score = 0
var lives = 3

function setup() {
  createCanvas(windowWidth,windowHeight);
  prince = createSprite(400, 200, 50, 50);
  ground = createSprite(windowWidth/2,windowHeight-100,windowWidth,20)

  monsterGroup = new Group()
  fireballGroup = new Group()
  bulletGroup = new Group()
}

function draw() {
  background(0); 
  
  if (keyDown(RIGHT_ARROW)) {
    prince.x = prince.x + 5
  }

  if (keyDown(LEFT_ARROW)) {
    prince.x = prince.x - 5
  }

  if (keyDown("space")) {
    prince.velocityY = -10
  }
  prince.velocityY = prince.velocityY + 0.8

  if (keyDown("b")) {
    bullet=createSprite(prince.x,prince.y,10,2)
    bullet.velocityX = 15
    bulletGroup.add(bullet)
  }

  prince.collide (ground)

  spawnMonsters()
  spawnFireballs()

  drawSprites();
}

function spawnMonsters() {
  if (frameCount%120===0) {
    monster = createSprite(windowWidth+10,300,20,40)
    monster.y = random(100,windowHeight-150)
    monster.velocityX = -6
    monster.lifetime = 400
    monsterGroup.add(monster)
  }
}

function spawnFireballs() {
  if (frameCount%100===0) {
    fireball = createSprite(500,0,20,20)
    fireball.velocityY = 19
    fireball.x = random(150,windowWidth-150)
    fireball.lifetime = 100
    fireballGroup.add(fireball)
  }
}