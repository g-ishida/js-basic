'use strict'

{
while (true) {

  let a = window.prompt('日本の首都は?');

  if (a === '東京') {
    window.alert('正解!');
    break;//正解が出たら強制終了
  } else {
    window.alert('不正解!');//正解になるまで無限ループ
  }
}
}
