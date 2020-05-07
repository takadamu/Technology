var carImage;
var carPosition;

function preload() {
  carImage = loadImage('car.png');
}

// setup関数＝プログラムの先頭で一回だけ呼ばれる関数
function setup() {
  // キャンバスを画面いっぱいに指定
  createCanvas(windowWidth, windowHeight);
  background(255);
  carPosition = 200;
}

// draw関数＝いつも呼ばれ続ける関数
function draw() {
  // クルマが動いた跡（あと）を消そう（キャンバスが白だから、白で消す）
  // background(255);をdraw関数の先頭に書いて、クルマが動くたびにキャンバス全体を白くぬるコードを書こう。
  background(255);
  // 右矢印を押したら車が前進するようにする
  if( keyDown(RIGHT) ) {
  // 今の位置から10ずつ動く
    carPosition += 10;
  }
  // 左矢印キーを押したらクルマがバックするようにしよう
  // 左矢印キーを押したら、クルマの位置が左に変化するコードを書こう。
  // 頭にkeyDown(LEFT)という「左矢印キーが押された時」を判定する関数を使ったif文を書こう。
  // carPosition -= 5;を { } の間に書こう。
  if( keyDown(LEFT) ) {
    carPosition -= 5;
  } 
  Image(carImage, carPosition, 150);
}


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// いらなくなったbackground関数を消そう（消しても消さなくても問題ない、可読性のために消した）
// draw関数の中にbackground関数を足したので、いらなくなったsetup関数の中のbackground関数を消そう。
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);  これを消す
  carPosition = 200;
}