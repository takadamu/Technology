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