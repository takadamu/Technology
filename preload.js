// サウンド追加
var mySound;
function preload() {
  mySound = loadSound('mysound.mp3');
}

function setup() {
  createCanvas(600, 600);
  background(255);

  mySound.play();
}

// サウンドをloopさせる
mySound.loop();

// マウスクリックで音の再生をポーズしよう（この記述のみだと一度ポーズしたら永遠にポーズ）
// mouseClicked関数の中で mySound.pause(); を書こう。
function mouseClicked() {
  mySound.pause();
}

// サウンドが再生中の時を判定しよう（この記述のみだとサウンドが鳴っている時に一度ポーズさせられる→永遠ポーズ）
// mySound.isPlaying()で再生中だった場合だけポーズになるように判定（はんてい）しよう。
function mouseClicked() {
  if(mySound.isPlaying()) {
    mySound.pause();
  }
}

// サウンドが再生されていない時を判定しよう（クリックでポーズと再生が可能）
// elseのカッコの中でmySound.play();を使おう。
function mouseClicked() {  // マウスがクリックされた時に呼ばれる
  if (mySound.isPlaying()) { // サウンドが再生されている時
    // ポーズする
    mySound.pause();
  }
  else { // サウンドが再生されていない時
    mySound.play();
  }  
}