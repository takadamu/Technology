// draw関数　絵を描いたり動かしたりする時に使用
function draw() {
  ellipse(100, 100, 100);
}

// マウスを動かすと同時に円が描かれる（円とマウスの動きを組み合わせる）
function draw() {
  ellipse(mouseX, mouseY, 100);
}
// 【参考】https://gyazo.com/cc1f1c6742e4bfec56f1bdc3b0674609


// 円の色を半透明にする（10の部分）
function draw() {
  fill(255, 0, 0, 10);
  ellipse(mouseX, mouseY, 100);
}

// 円を画面の中心に位置させる
function draw() {
  ellipse(width/2, height/2, 200);
}

// 背景黒、円の輪郭無し、画面の中心に200の大きさの円を置く
function draw() {
  background(0, 0, 0);
  noStroke();
  ellipse(width/2, height/2, 200);
}

// ミッキーの形が作れる
function draw() {
  background(0, 0, 0);
  noStroke();
  ellipse(width/2, height/2, 200);
  ellipse(width/2 + 100, height/2 - 110, 120);
  ellipse(width/2 - 100, height/2 - 110, 120);
}

// ミッキーとマウスの動きを連動させる
function draw() {
  background(0, 0, 0);
  noStroke();
  ellipse(mouseX, mouseY, 200);
  ellipse(mouseX + 100, mouseY - 110, 120);
  ellipse(mouseX - 100, mouseY - 110, 120);
}
// 【参考】https://gyazo.com/9c1951442a0056a39c57104c6eefd1d8

// マウスの位置によって色が変わる
function draw() {
  background(0, 0, 0);
  noStroke();
  fill(255, mouseX/4, mouseY/4);
  ellipse(mouseX + 100, mouseY - 110, 120);
  ellipse(mouseX - 100, mouseY - 110, 120);
  ellipse(mouseX, mouseY, 200);
}
// 【参考】https://gyazo.com/1dc8bf7adc74d94a534f5ecd3e180f50

// 半透明にしてマウスを動かすと残像の様になる
function draw() {
  background(0, 0, 0, 20);
  noStroke();
  fill(255, mouseX/4, mouseY/4);
  ellipse(mouseX + 100, mouseY - 110, 120);
  ellipse(mouseX - 100, mouseY - 110, 120);
  ellipse(mouseX, mouseY, 200);
}
// 【参考】https://gyazo.com/f9715be556fa2279297df9087c8d3775