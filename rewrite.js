/* not use this function
function rem(){
  let items = document.getElementsByClassName("lecture-navi-link");

  while(items.length != 0){
    items[0].parentNode.removeChild(items[0]);
  }
  console.log("rem execute!");
};*/




function change(){
    // items is getting timetable element
    let items = document.getElementsByClassName("lecture-navi-link");
    for (let item of items) {
      // get lesson information
      let t = item.getAttribute("id").slice(13);
      let s = document.getElementById("lecture-"+t);
      // get href
      let ss = s.querySelector("a").getAttribute("href");
      let i = item.getAttribute("id");
      // change dom href
      document.getElementById(i).removeAttribute("href");
      document.getElementById(i).setAttribute("href", ss);
      document.getElementById(i).setAttribute("target", "_blank");
      document.getElementById(i).setAttribute("rel", "noopener noreferrer");
      document.getElementById(i).classList.add("lecture-url-link");
      // remove class: this class curse some Exception in portal.
      // shape up like pure "lecture-url-link"
      //document.getElementById(i).classList.remove("lecture-navi-link");
      document.getElementById(i).classList.remove("hpjax");
      //document.getElementById(i).insertAdjacentHTML("afterbegin", <>)
      console.log("ex");
    }
}

function addtimetotimetable(){
  let items = document.getElementsByClassName("lecture-period");
  const timetable = ["8:50-10:30", "10:45-12:25", "13:15-14:55", "15:10-16:50", "17:05-18:45"];
  // https://service.cloud.teu.ac.jp/inside2/hachiouji/computer_science/%e6%8e%88%e6%a5%ad%e9%96%a2%e9%80%a3/
  // 余裕があったらスクレイピング

  // firstSemesterで前期っていうらしいね
  let firstSemester = Array.prototype.slice.call(items, 1, 6);
  let secondSemester = Array.prototype.slice.call(items, 7, 12);
  if(flug == 1){
    for (let i=0;i<5;i++){
      let ele = document.createElement("p");
      ele.textContent=timetable[i];
      let ele2 = document.createElement("p");
      ele2.textContent=timetable[i];
      firstSemester[i].insertAdjacentElement("beforeend", ele);
      secondSemester[i].insertAdjacentElement("beforeend", ele2);
    }
    flug = 0;
  }
}

function executeFunc(arg1){
  for (let i=1; i<11; i++){
    let time = i*1000;
    setTimeout(arg1, time);
  }
}

// onloadでうまく動かないのを確認
/*
window.onload = function (){
  change();
};*/
let flug = 1;
chrome.storage.sync.get(["option"], function(data) {
  if(data.option==="on"){
    executeFunc(change);
    executeFunc(addtimetotimetable);
  }
});



