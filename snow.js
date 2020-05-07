// 画像の変数
var mountainImage;
var particleImage;

// 雪の粒を入れる配列
var particles = [];


// データのロード
function preload() {
  mountainImage = loadImage('mountain.png');
  particleImage = loadImage('snow.png');
}


// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  createCanvas(800, 550);
  noStroke();
}


// 計算と表示
function draw() {
  // 暗い背景を描く
  background(0, 0, 40, 200);

  // 山を表示
  image(mountainImage, 0, 450);

  // マウスをクリックしたら雪を発射
  if (mouseIsPressed) {
    for (var i = 0; i < 1; i++ ) {
      // マウスカーソルの場所に雪の粒を作って粒の配列に入れる
      particles.push(new Particle(mouseX, mouseY));
    }
  }

  // 雪の粒の数だけ処理する
  for (var i = 0; i < particles.length; i++) {
    // 雪の粒を移動させる
    particles[i].move();
    // 雪の粒を表示する
    particles[i].draw();

    // 雪の粒が消える時間になったら
    if (particles[i].lifetime < 0) {
      // 雪の粒を配列から消す
      particles.splice(i, 1);
    }
  }
}


// 雪の粒のクラス
class Particle {
  // 初期化（constructor＝コンストラクター＝建設者）
  constructor(x, y) {
    // 最初の位置
    this.position = createVector(x, y);

    // 雪の粒の速さ
    this.speed = random(-20, -50);

    // 雪の粒の動き
    this.velocity = createVector(0, 0);
    this.rotation = random(0, 0.1);
    this.rotateSpeed = 0;
    this.rotateSpeedAdd = 0;

    // 雪の粒の大きさ
    this.size = 15;

    // 雪の粒が表示される時間
    this.lifetime = random(30, 80);
  }

  // 移動
  move() {
    // 空気抵抗でだんだん遅くなる
    this.speed *= 1;

    // クルンと回る動きの角度の計算
    this.rotateSpeed += this.rotateSpeedAdd;
    this.rotation += this.rotateSpeed;

    // クルンと回る動きを計算する
    this.velocity.x = this.speed * cos(this.rotation);
    this.velocity.y = this.speed * sin(this.rotation);

    // 座標が変化する
    this.position.add(this.velocity);
    this.position.y += 0;

    // だんだん小さくなる
    this.size *= 0.995;

    // 残りの時間を減らす
    this.lifetime--;
  }

  // 表示
  draw() {
    // 雪の粒を表示
    image(particleImage, this.position.x, this.position.y, this.size, this.size);
  }
}
// 【参考】https://gyazo.com/64c067672f350c1c1cc5a3a9f65b67e2



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



// 雪の粒をだんだん遅くするには
  // 空気抵抗でだんだん遅くなる
  this.speed *= 0.98;

// 雪の粒を回転させる
  this.rotateSpeedAdd = 0.006;
// 【参考】https://gyazo.com/332b99dcc19c4f8edcb377d3eb66da34




// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 雪の粒ごとに回る方向とタイミングを変えた

// 画像の変数
var mountainImage;
var particleImage;

// 雪の粒を入れる配列
var particles = [];


// データのロード
function preload() {
  mountainImage = loadImage('mountain.png');
  particleImage = loadImage('snow.png');
}


// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  createCanvas(800, 550);
  noStroke();
}


// 計算と表示
function draw() {
  // 暗い背景を描く
  background(0, 0, 40, 200);

  // 山を表示
  image(mountainImage, 0, 450);

  // マウスをクリックしたら雪を発射
  if (mouseIsPressed) {
    for (var i = 0; i < 1; i++ ) {
      // マウスカーソルの場所に雪の粒を作って粒の配列に入れる
      particles.push(new Particle(mouseX, mouseY));
    }
  }

  // 雪の粒の数だけ処理する
  for (var i = 0; i < particles.length; i++) {
    // 雪の粒を移動させる
    particles[i].move();
    // 雪の粒を表示する
    particles[i].draw();

    // 雪の粒が消える時間になったら
    if (particles[i].lifetime < 0) {
      // 雪の粒を配列から消す
      particles.splice(i, 1);
    }
  }
}


// 雪の粒のクラス
class Particle {
  // 初期化（constructor＝コンストラクター＝建設者）
  constructor(x, y) {
    // 最初の位置
    this.position = createVector(x, y);

    // 雪の粒の速さ
    this.speed = random(-20, -50);

    // 雪の粒の動き
    this.velocity = createVector(0, 0);
    this.rotation = random(0, 0.1);
    this.rotateSpeed = 0;
    this.rotateSpeedAdd = random(-0.001, 0.005);

    // 雪の粒の大きさ
    this.size = 15;

    // 雪の粒が表示される時間
    this.lifetime = random(30, 80);
  }

  // 移動
  move() {
    // 空気抵抗でだんだん遅くなる
    this.speed *= 0.98;

    // クルンと回る動きの角度の計算
    this.rotateSpeed += this.rotateSpeedAdd;
    this.rotation += this.rotateSpeed;

    // クルンと回る動きを計算する
    this.velocity.x = this.speed * cos(this.rotation);
    this.velocity.y = this.speed * sin(this.rotation);

    // 座標が変化する
    this.position.add(this.velocity);
    this.position.y += 0;

    // だんだん小さくなる
    this.size *= 0.995;

    // 残りの時間を減らす
    this.lifetime--;
  }

  // 表示
  draw() {
    // 雪の粒を表示
    image(particleImage, this.position.x, this.position.y, this.size, this.size);
  }
}


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 雪の粒をふやそう
// マウスクリックしたら、雪を8回繰りかえして発射しよう
  // マウスをクリックしたら雪を発射
  if (mouseIsPressed) {
    for (var i = 0; i < 8; i++ ) {
      // マウスカーソルの場所に雪の粒を作って粒の配列に入れる
      particles.push(new Particle(mouseX, mouseY));
    }

// 雪の粒の大きさをランダムに変えよう
// this.sizeの値を5から15までのランダムな値に書きかえよう
  // 雪の粒の大きさ
  this.size = random(5, 15);

// 空気抵抗を大きくしよう
// this.speedを0.94倍にしつづけよう
  // 空気抵抗でだんだん遅くなる
  this.speed *= 0.94;

// 雪の粒が表示される時間を長くしよう
// this.lifetimeの値を30から150までのランダムな値に書きかえよう
  // 雪の粒が表示される時間
  this.lifetime = random(30, 150);

// 雪の粒に重力をつけよう
// ピンクのコードをマネして書いてみよう
  // 座標が変化する
  this.position.add(this.velocity);
  this.position.y += 1;