var score = 0;
var scor = 0;
var borrar = "no";
var borrarGame = "no";
var inicio = 0;
var gamestate = 0;
var final = 0;
var Control_s;
var Doctor_strange = 0;

var peso;
var pesos;
var especial;
var etiqueta;
var larry;
var merry;
var jeff;
var Tonk;
var Star;
var larrys;
var merrys;
var jeffs;
var BOOM;
var stick_man;
var Game_Over;
var Control_s;
//var GG;
var You_Win;
var Easter;

function preload() {
  Tanti_41 = loadImage("SS_papa_frita_330.png");
  BOOMxd = loadImage("Imported piskel (13).gif");
  stick_manxd = loadImage("stick_man0.png");
  Game_overxd = loadImage("Game_Over3.png");
  Control_sxd = loadImage("Box_art_SS0.png");
  //GGxd = loadImage("GG_20.png");
  You_Winxd = loadImage("You_Win3.png");
  larryxd = loadImage("larry_20.png");
  merryxd = loadImage("merry_20.png");
  jeffxd = loadImage("Jefff_30.png");
  Starxd = loadImage("SS_Estrella0.png");
  especialxd = loadImage("hello (17).gif");
  etiquetaxd = loadImage("Easter_eggxd0.png");
  pesosxd = loadImage("Easter egg_recipt_.png");

  mp4xd = loadSound("Cancion-papa-con-doble-combo.mp3");
  boom = loadSound("Tonk_BOOOOOOM.mp3");
}
function setup() {
  createCanvas(windowHeight, windowHeight);

  Stars = createGroup();
  larrys = createGroup();
  merrys = createGroup();
  jeffs = createGroup();
  Tonk = createSprite(100, 200);
  Tonk.scale = 1.5;
  Tonk.addImage("Tanti 41", Tanti_41);
  BOOM = createSprite(200, 200);
  BOOM.addImage("BOOM", BOOMxd);
  BOOM.visible = false;
  Easter = createSprite(width, random(20, 20));
  Easter.scale = 0.6;
  Easter.addImage("hello (17).gif", especialxd);
  Easter.visible = false;

  stick_man = createSprite(200, 200);
  stick_man.addImage("stick_man", stick_manxd);
  stick_man.scale = 5;
  stick_man.visible = false;

  Control_s = createSprite(width / 2, height / 2);
  Control_s.addImage("Control_s0.png", Control_sxd);
  Control_s.scale = 5.1;
  Control_s.visible = true;

  // playSpeech("Presiona w para ir arriba. presiona z para ir abajo .presiona a para ir atras. presiona s para ir enfrente .no toces los asteroides .llega a 100 puntos para ganar. ¡te recogeremos despues cadidato!", "male", "Español (LATAM)" );
  edges = createEdgeSprites();
}
function draw() {
  background("Black");
  Tonk.bounce(edges);
  console.log(borrar);
  if (inicio == 0) {
    drawSprites();
    fill("black");
    text("creado por Kail Jeremy ", 20, 25);
    if (keyDown("space")) {
      inicio = 1;
      mp4xd.loop();
      // mp4xd.play();
    }
  }

  if (inicio == 1) {
    Control_s.visible = false;
    if (gamestate == 0) {
      textSize(50);
      text("score  " + score, width - 250, 40);
      drawSprites();
      scor = scor + 0.1;
      score = Math.round(scor);
      if (score % 200 == 0 && score != 0) {
        //stick_man.visible = true;
      }

      create_Star();
      create_larry();
      create_merry();
      create_jeff();
      if (score == 70) {
        Easter.visible = true;
        Easter.velocityX = -8;
      }

      if (keyDown("w")) Tonk.y = Tonk.y - 10;

      if (keyDown("z")) Tonk.y = Tonk.y + 10;

      if (keyDown("a")) Tonk.x = Tonk.x - 4;

      if (keyDown("s")) Tonk.x = Tonk.x + 4;

      if (
        larrys.isTouching(Tonk) ||
        merrys.isTouching(Tonk) ||
        jeffs.isTouching(Tonk)
      ) {
        gamestate = 1;
        mp4xd.stop();
        boom.play();

        Game_Over = createSprite(width / 2, height / 2);
        Game_Over.addImage("Game_Over0.png", Game_overxd);
        Game_Over.scale = 5;
        
        borrarGame="si"
     
        BOOM.y = Tonk.y;
        BOOM.x = Tonk.x;
        Tonk.visible = false;

        BOOM.visible = true;
      }

      //Tonk.setAnimation("Tanti 41");

      if (score == 100) {
        gamestate = 1;
        mp4xd.stop();

       /* GG = createSprGame_Over3.pngite(width / 2, height / 4);
       // GG.addImage("GG0.png", GGxd);*/
        You_Win = createSprite(width / 2, height / 2);
        You_Win.addImage("You_Win0.png", You_Winxd);
        You_Win.scale = 5
        borrar = "GG";
      }
      if (Tonk.isTouching(Easter)) {
        gamestate = 1;
        mp4xd.stop();

        Etiqueta = createSprite(width / 2, height / 1.5);
        Etiqueta.addImage("Easter_eggxd0.png", etiquetaxd);
        Etiqueta.scale = 2.5;

        pesos = createSprite(width / 2, height / 4);
        pesos.addImage("Easter egg_recipt_.png", pesosxd);
        pesos.scale = 2;
        borrar = "ETIQUETA";
      }
    }

    if (gamestate == 1) {
      textSize(50);
      text("score  " + score, width - 250, 40);
      drawSprites();
      setTimeout(resett, 2000);

      larrys.setVelocityXEach(0);
      merrys.setVelocityXEach(0);
      jeffs.setVelocityXEach(0);
      Stars.setVelocityXEach(0);
      larrys.setLifetimeEach(-1);
      merrys.setLifetimeEach(-1);
      jeffs.setLifetimeEach(-1);
      Stars.setLifetimeEach(-1);
      if (keyDown("space")) {
        score = 0;
        scor = 0;
        gamestate = 0;
        final = 0;
        Easter.x = width;
        Easter.y = random(20,height-50);
        Easter.visible = false;
        Easter.velocityX = 0;
        Doctor_strange = 0;
        larrys.destroyEach();
        merrys.destroyEach();
        jeffs.destroyEach();
        Stars.destroyEach();
       if (borrarGame == "si") {
          Game_Over.visible = false;
        }
       
        if (borrar == "GG") {
        //  GG.visible = false;
          You_Win.visible = false;
        }
        if (borrar == "ETIQUETA") {
          pesos.visible = false;
          Etiqueta.visible = false;
        }
        Tonk.visible = true;
        Tonk.scale = 1.5;
        mp4xd.loop();
      }
    }
  }
}
function create_Star() {
  if (frameCount % 3 == 0) {
    Star = createSprite(width, random(10, height));
    Star.addImage(Starxd);
    Star.scale = 0.5;
    Star.depth = random(1, 100);
    Star.velocityX = random(-7, -5);
    Star.lifetime = 150;
    Stars.add(Star);
  }
}

function create_larry() {
  if (frameCount % 10 == 0) {
    larry = createSprite(width, random(10, height));
    larry.addImage(larryxd);
    larry.scale = 1.5;
    larry.velocityX = random(-7, -5);
    larry.lifetime = 225;
    larrys.add(larry);
  }
}
function create_merry() {
  if (frameCount % 15 == 0) {
    merry = createSprite(width, random(10, height));
    merry.addImage(merryxd);
    merry.scale = 1.5;
    merry.velocityX = random(-7, -5);
    merry.lifetime = 225;
    merrys.add(merry);
  }
}
function create_jeff() {
  if (frameCount % 95 == 0) {
    jeff = createSprite(width, random(10, height));
    jeff.addImage(jeffxd);
    jeff.scale = 2;
    jeff.velocityX = -3;
    jeff.lFifetime = 375;
    jeffs.add(jeff);
  }
}
function oido_sano() {
  BOOM.visible = true;
}

function resett() {
  BOOM.visible = false;
}
