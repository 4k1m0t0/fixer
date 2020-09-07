// idを取得(button)
let changeColor = document.getElementById('changeColor');

// sync.setした'color'のvalueを取り出す
chrome.storage.sync.get('color', function(data) {
  // 背景色の変更
  changeColor.style.backgroundColor = data.color;
  // 要素の追加。('text-align', 'center')のように
  changeColor.setAttribute('value', data.color);
});
// 取得id要素のonclick時の関数
// jsonで規定したhtml内にonclickを記述すると動かないので注意
changeColor.onclick = function(element) {
  // sync.getで追加されているのでvalueで色が取れる
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};