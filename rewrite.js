/* not use this function
function rem(){
  let items = document.getElementsByClassName("lecture-navi-link");

  while(items.length != 0){
    items[0].parentNode.removeChild(items[0]);
  }
  console.log("rem execute!");
};*/


function loading(){
  if (f==1){
    let loader = document.createElement("div");
    loader.setAttribute("id", "loading");
    let content = document.createElement("div");
    let text = document.createElement("span");
    content.setAttribute("class", "loading-content");
    text.textContent = "Welcome to TUT portal.";
    content.appendChild(text);
    loader.appendChild(content);



    //let element = document.getElementById("panel-lecture");
    let element = document.querySelector("body");
    element.insertBefore(loader, element.firstChild);
    f = 0;
  }
}


function change(){
    //document.querySelector("style").remove();
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
      //document.getElementById(i).classList.remove("hpjax");
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

function cssrewrite(){
  //document.getElementById("global-navi").removeAttribute("id");
}

function changeElementOrder(){
  if(fl == 1){
    let timetable = document.getElementById("lecture-navi");
    let d = document.getElementById("panel-lecture");
    let sections = Array.from(d.getElementsByClassName("portal-section"));
    d.appendChild(timetable);
    d.appendChild(sections[0]);
    d.appendChild(sections[1]);
    d.appendChild(sections[2]);
    d.insertBefore(timetable, document.getElementById("lecture-cards"));
    fl = 0;
  }
}

function addtoppad(){
  let d = document.createElement("div");
  d.setAttribute("id", "top-padding");
  document.getElementsByTagName("body")[0].insertBefore(d ,document.getElementById("contents"));
}

function changePortalSectionStructure(){
  let d = document.getElementById("panel-lecture");
  let sections = Array.from(d.getElementsByClassName("portal-section"));
  sections[0].appendChild(sections[1].getElementsByTagName("dl")[0]);
  sections[1].remove();
  sections[2].appendChild(sections[2].getElementsByTagName("a")[0]);
}

function executeFunc(arg1){
  for (let i=1; i<11; i++){
    let time = i*1000;
    setTimeout(arg1, time);
  }
}

function addfont(){
  let h = document.getElementsByTagName("header");
  let l = document.createElement("link");
  l.setAttribute("href", "https://fonts.googleapis.com/css?family=Zilla+Slab");
  l.setAttribute("rel", "stylesheet");
  let l2 = document.createElement("link");
  l2.setAttribute("href", "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400&display=swap");
  l2.setAttribute("rel", "stylesheet");

  h[0].appendChild(l);
  h[0].appendChild(l2);
}

function addExtensionComment(){
  let f = document.getElementById("global-footer");
  let text = document.createElement("p");
  text.textContent = "this page using genzai extension. extension is not official project.";
  f.appendChild(text);
}

function removeloadanimation(){
  const load = document.getElementById("loading");
  load.setAttribute("class", "loaded");
  //load.classList.add('loaded');
}

/*function addPageInfo(){
  let target = document.getElementsByTagName("body")[0];
  console.log(document.location.pathname.slice(8));
  const ob = new MutationObserver(records => {
    let l = document.location.pathname;
    target.classList.add(l.slice(8));
    //ob.disconnect();
  })
  if(document.location.pathname.slice(8) == "lecture"){
  ob.observe(target, {
    attributes: true,
    attributeFilter: ["class"]
  })
  }
}*/

/*function setOnclickToButton(){
  /*
  let a = document.getElementById("navi-lecture");
  let b = document.getElementById("navi-index");
  let c = document.getElementById("navi-calender");
  let d = document.getElementById("navi-config");
  a.setAttribute("onclick", "setDomSetting()");
  b.setAttribute("onclick", "setDomSetting()");
  c.setAttribute("onclick", "setDomSetting()");
  d.setAttribute("onclick", "setDomSetting()");

  let navi = document.getElementById("global-navi");
  navi.addEventListener('click', event => {
    setDomSetting();
    console.log("good:"+event.detail);
  });

}*/

function setDomSetting(){
  setOnclickToButton();
  //setTimeout(setOnclickToButton(), 2000);
  let target = document.getElementsByTagName("body")[0];
  console.log(document.location.pathname.slice(8));
  // addpageinfo
}

window.onbeforeunload = function() {
  console.log('beforeunload');
};


function roundNavUrl(){
  //let navis = document.getElementsByClassName("hpjax");
  let navi_ids = ["lecture", "index"];
  //document.getElementById("navi-lecture").click();
  //window.location.href = "/portal/lecture";

  for(let navi_id of navi_ids){
    console.log(document.getElementById("navi-"+navi_id));
    document.getElementById("navi-"+navi_id).click();
    if(navi_id == "index"){
      lf = 1;
    }
  }
}

function setDisplayPage(){

}

// 3秒待ちがあるので時間割の中身操作系はダメ
window.onload = function (){
  console.log("window.onload!");
  // なんかうまくいく
  setTimeout(roundNavUrl, 500);
  //addPageInfo();
  //setTimeout(removeloadanimation, 4000);
  //setDisplayPage();
};

if(lf == 1){
  change();
  //loading();
  //setOnclickToButton();
  //changeElementOrder();
  //addtimetotimetable();
  addtoppad();
  addfont();
  //changePortalSectionStructure();
  //addExtensionComment();
  promote();
}


function promote(){
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
  }

  let itemss = document.getElementsByClassName("lecture-period");
  const timetable = ["8:50-10:30", "10:45-12:25", "13:15-14:55", "15:10-16:50", "17:05-18:45"];
  // https://service.cloud.teu.ac.jp/inside2/hachiouji/computer_science/%e6%8e%88%e6%a5%ad%e9%96%a2%e9%80%a3/
  // 余裕があったらスクレイピング

  // firstSemesterで前期っていうらしいね
  let firstSemester = Array.prototype.slice.call(itemss, 1, 6);
  let secondSemester = Array.prototype.slice.call(itemss, 7, 12);

  for (let i=0;i<5;i++){
    let ele = document.createElement("p");
    ele.textContent=timetable[i];
    let ele2 = document.createElement("p");
    ele2.textContent=timetable[i];
    firstSemester[i].insertAdjacentElement("beforeend", ele);
    secondSemester[i].insertAdjacentElement("beforeend", ele2);
  }

  let d = document.getElementById("panel-lecture");
  let sections = Array.from(d.getElementsByClassName("portal-section"));
  sections[0].appendChild(sections[1].getElementsByTagName("dl")[0]);
  sections[1].remove();
  sections[2].appendChild(sections[2].getElementsByTagName("a")[0]);
}

/*
new Promise(function(resolve, reject)){
}
.then(function(){

});*/


let flug = 1;
let f = 1;
let fl = 1;
let lf = 0;
chrome.storage.sync.get(["option"], function(data) {
  if(data.option==="on"){
    /*executeFunc(loading);*/
    executeFunc(change);
    //executeFunc(addtimetotimetable);
    executeFunc(cssrewrite);
  }
});


//executeFunc(addPageInfo,5000);
