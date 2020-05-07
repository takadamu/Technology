// キャンバスを作ろう（画面のセットアップ）
// createCanvas関数を使って絵を描く画面のセットアップをしよう。
// 画面のサイズはヨコ 600,タテ 600。setup関数の中にコードを書こう。
function setup() {
  createCanvas(600, 600);
  background(255);
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// マウスをクリックした時に描かれる
function draw() {
  if (mouseIsPressed) {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 100);
  }
}

// 画像の表示する位置をずらそう
// imageMode(CENTER);を使って画像の表示位置（ひょうじいち）の基準（きじゅん）をずらそう。
imageMode(CENTER);
image(appleImage, 300, 300);

// りんごの画像サイズを小さくしよう
// image関数に大きさの数字を追加しよう。大きさは ヨコ 150, タテ 150 にしてみよう。
image(appleImage, 300, 300, 150, 150);


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// appleImageの関数定義
var appleImage;

function preload() {
  appleImage = loadImage('apple.png');
}

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  imageMode(CENTER);
  image(appleImage, 300, 300, 150, 150);
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// grapeImageの変数追加
var appleImage;
var grapeImage;

function preload() {
  appleImage = loadImage('apple.png');
  grapeImage = loadImage('grape.png');
}

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  imageMode(CENTER);
  image(appleImage, 300, 300, 150, 150);
  image(grapeImage, 500, 300, 150, 150);
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// pearImageの変数追加
var appleImage;
var grapeImage;
var pearImage;

function preload() {
  appleImage = loadImage('apple.png');
  grapeImage = loadImage('grape.png');
  pearImage = loadImage('pear.png');
}

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  imageMode(CENTER);
  image(appleImage, 300, 300, 150, 150);
  image(grapeImage, 500, 300, 150, 150);
  image(pearImage, 100, 300, 150, 150);
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// それぞれ画像下にtext追加
var appleImage;
var grapeImage;
var pearImage;

function preload() {
  appleImage = loadImage('apple.png');
  grapeImage = loadImage('grape.png');
  pearImage = loadImage('pear.png');
}

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  imageMode(CENTER);
  image(appleImage, 300, 300, 150, 150);
  image(grapeImage, 500, 300, 150, 150);
  image(pearImage, 100, 300, 150, 150);

  textSize(35);
  textAlign(CENTER);
  text('apple', 300, 400);
  text('grape', 500, 400);
  text('pear', 100, 400);
}