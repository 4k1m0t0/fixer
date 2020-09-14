// idを取得(button)
/*let changeColor = document.getElementById('changeColor');

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
};*/



// getElementsByClassNameとByIdでとれる値が違う
let page = document.getElementById('add');

const values = ['on', 'off'];
function constructOptions(values){
  for (let item of values) {
    let input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("name", "option");
    input.setAttribute("value", item);

    input.addEventListener('click', function() {
      chrome.storage.sync.set({option: item}, function() {
        console.log('option is' + item);
      })
    });

    let text = document.createElement("span");
    text.textContent = "extension "+item;

    chrome.storage.sync.get(["option"], function(data) {
      if(data.option===item){
        input.setAttribute("checked", "checked");
      }
    });
    page.appendChild(input);
    page.appendChild(text);
    page.appendChild(document.createElement("br"));
  }
}

constructOptions(values);