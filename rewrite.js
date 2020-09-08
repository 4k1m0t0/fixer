console.log("bb");

function rem(){
  let items = document.getElementsByClassName("lecture-navi-link");

  while(items.length != 0){
    items[0].parentNode.removeChild(items[0]);
  }
  console.log("rem execute!");
};

console.log("bb");

/*window.onload = function() {
  console.log("loaded"); // DOM 構築後に実行したい関数の呼び出し
};*/

function seek(){
  let compose = document.getElementsByClassName("lecture-navi-link");
  //console.log(compose.length);
  if(compose.length==0){
    window.setTimeout(seek, 500);
    return;
  }

  /*let obs = new MutationObserver(rem);

  console.log(compose.length);
  obs.observe(document.getElementsByClassName("lecture-navi-link"), {
    attributes: true,
    childList: true
  });*/
}

function change(){
    let items = document.getElementsByClassName("lecture-navi-link");
    for (let item of items) {
      console.debug("item");
      let t = item.getAttribute("id").slice(13);
      let s = document.getElementById("lecture-"+t);
      // url
      let ss = s.querySelector("a").getAttribute("href");
      let i = item.getAttribute("id");
      document.getElementById(i).removeAttribute("href");
      document.getElementById(i).setAttribute("href", ss);
      console.log("ex");
    }
}


seek();


setTimeout("change()", 1000);
setTimeout("change()", 2000);
setTimeout("change()", 3000);
setTimeout("change()", 4000);
setTimeout("change()", 5000);
setTimeout("change()", 6000);
setTimeout("change()", 7000);
setTimeout("change()", 8000);
setTimeout("change()", 9000);
setTimeout("change()", 10000);

/*
for (let item of items) {
  console.debug("item");
  let t = item.getAttribute("id").slice(13);
  let s = document.getElementById("lecture-"+t);
  // url
  let ss = s.querySelector("a").getAttribute("href");
  let i = item.getAttribute("id");
  document.getElementById(i).removeAttribute("href");
  document.getElementById(i).setAttribute("href", ss);
  console.log("ex");
}*/
