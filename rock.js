var pianoImage;
var pianoSound;
var guitarImage;
var guitarSound;
var saxImage;
var saxSound;

function preload() {
  pianoImage = loadImage('piano.png');
  pianoSound = loadSound('piano.mp3');
  guitarImage = loadImage('guitar.png');
  guitarSound = loadSound('guitar.mp3');
  saxImage = loadImage('sax.png');
  saxSound = loadSound('sax.mp3');
}

function setup() {
  createCanvas(600, 600);
  // 連打してもピアノの音が重ならないようにしよう
  pianoSound.playMode('restart');
  saxSound.playMode('restart');
  guitarSound.playMode('restart');  
}

function draw() {
  // 動きがあるものを作るので背景はdrawにした
  // https://gyazo.com/3582ba1bf85a022aeb2faf73c8d54603
  background(0);
  image(pianoImage, 0, 200);
  image(saxImage, 200, 200);
  image(guitarImage, 400, 200);
}

// クリックした時にサウンドが再生される
function mouseClicked() {
  if (mouseX < 200) {
    pianoSound.play();
  }
  else if (mouseX < 400) {
    saxSound.play();
  }
  else {
    guitarSound.play();
  }
}









// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 「キャンバスの左側」を判定しよう
// if文で「キャンバスの左側」を判定しよう。

// キャンバスの大きさはヨコ 600なので、半分の位置は300
// マウスのヨコの位置はmouseX

// 「mouseXが300より小さい時」という条件は if ( mouseX < 300 ) と書くことができます。

if (A) {
// Aの場合
}


function mouseClicked() {
  if ( mouseX < 300 ) {
    pianoSound.play();
  }
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 音楽がなってるときと鳴ってないときで画像が変わるパターン

var pianoImage;
var pianoPlayingImage;
var pianoSound;

var guitarImage;
var guitarPlayingImage;
var guitarSound;

var saxImage;
var saxPlayingImage;
var saxSound;

function preload() {
  pianoImage = loadImage('piano.png');
  pianoPlayingImage = loadImage('piano_playing.png');
  pianoSound = loadSound('piano.mp3');

  guitarImage = loadImage('guitar.png');
  guitarPlayingImage = loadImage('guitar_playing.png');
  guitarSound = loadSound('guitar.mp3');

  saxImage = loadImage('sax.png');
  saxPlayingImage = loadImage('sax_playing.png');
  saxSound = loadSound('sax.mp3');
  // BGM追加
  bgmSound = loadSound('bgm.mp3');
}

function setup() {
  createCanvas(600, 600);
  pianoSound.playMode('restart');
  saxSound.playMode('restart');
  guitarSound.playMode('restart');
  // BGMのみループ
  bgmSound.loop();
}

function draw() {
  background(0);

  if (pianoSound.isPlaying()) {
    image(pianoPlayingImage, 0, 200);
  }
  else {
    image(pianoImage, 0, 200);
  }

  if (saxSound.isPlaying()) {
    image(saxPlayingImage, 200, 200);
  }
  else {
    image(saxImage, 200, 200);
  }

  if (guitarSound.isPlaying()) {
    image(guitarPlayingImage, 400, 200);
  }
  else {
    image(guitarImage, 400, 200);
  }
}

function mouseClicked() {
  if (mouseX < 200) {
    pianoSound.play();
  }
  else if (mouseX < 400) {
    saxSound.play();
  }
  else {
    guitarSound.play();
  }
}