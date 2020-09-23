function loading(){
  let loader = document.createElement("div");
  let content = document.createElement("div");
  let text = document.createElement("span");
  loader.setAttribute("id", "loading");
  content.setAttribute("class", "loading-content");
  text.textContent = "Welcome to TUT portal.";
  content.appendChild(text);
  loader.appendChild(content);

  /*
  loader  <div id="loading></div>
    =>content <div class="loading-content"></div>
      =>text <span>"Welcome"</span>
  */
  let element = document.querySelector("body");
  element.insertBefore(loader, element.firstChild);
}

function removeloadanimation(){
  const load = document.getElementById("loading");
  load.setAttribute("class", "loaded");
  //load.classList.add('loaded');
}


function addtimetotimetable(){
  // https://service.cloud.teu.ac.jp/inside2/hachiouji/computer_science/%e6%8e%88%e6%a5%ad%e9%96%a2%e9%80%a3/
  // 余裕があったらスクレイピング
  let items = document.getElementsByClassName("lecture-period");
  const timetable = ["8:50-10:30", "10:45-12:25", "13:15-14:55", "15:10-16:50", "17:05-18:45"];

  // firstSemesterで前期っていうらしいね
  let firstSemester = Array.prototype.slice.call(items, 1, 6);
  let secondSemester = Array.prototype.slice.call(items, 7, 12);

  for (let i=0;i<5;i++){
    let eleF = document.createElement("p");
    let eleS = document.createElement("p");
    eleF.textContent=timetable[i];
    eleS.textContent=timetable[i];
    firstSemester[i].insertAdjacentElement("beforeend", eleF);
    secondSemester[i].insertAdjacentElement("beforeend", eleS);
  }
}

function addtoppad(){
  let div = document.createElement("div");
  div.setAttribute("id", "top-padding");
  let target = document.getElementById("contents");
  document.getElementsByTagName("body")[0].insertBefore(div, target);
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

function setDomSetting(){
  setOnclickToButton();
  //setTimeout(setOnclickToButton(), 2000);
  let target = document.getElementsByTagName("body")[0];
  console.log(document.location.pathname.slice(8));
  // addpageinfo
}


function removeIndexSectionStyle(){
  console.log("remover");
  return new Promise(resolve => {
    setTimeout(() => {
      let a = document.getElementById("panel-index");
      a.removeAttribute("style");
      let c = document.getElementById("panel-lecture");
      c.removeAttribute("style");
      let b = a.getElementsByClassName("content-part");
      //b[1].removeAttribute("style");
      for(let item of b){
        item.removeAttribute("style");//, "display: none");
      }
      addExtensionComment();
      addtimetotimetable();
      // 先頭にデフォルトから要素があるので除く
      b[0].remove();
      resolve(true);
    }, 100);
  });
}

function change(){
  // items is getting timetable element
  // this function rewrite timetable's  href tag. from lecture-card
  let items = document.getElementsByClassName("lecture-navi-link");
  for (let item of items) {
    // get lesson information
    // id example is "lecture-navi-7453"
    // follow slice is get 7453. this matches lecture-card id.

    let targetLectureId = item.getAttribute("id").slice(13);
    let containUrlElement = document.getElementById("lecture-"+targetLectureId);

    // get href
    let targetUrl = containUrlElement.querySelector("a").getAttribute("href");

    let changeObjectId = item.getAttribute("id");
    let targetElement = document.getElementById(changeObjectId);
    // change dom href

    targetElement.removeAttribute("href");
    targetElement.setAttribute("href", targetUrl);
    targetElement.setAttribute("target", "_blank");
    targetElement.setAttribute("rel", "noopener noreferrer");
    targetElement.classList.add("lecture-url-link");

    // remove class: this class curse some Exception in portal.
    // shape up like pure "lecture-url-link"
    targetElement.classList.remove("hpjax");
  }
}
/*
  function changeElementOrder(){
    return new Promise(resolve => {
      let timetable = document.getElementById("lecture-navi");
      let d = document.getElementById("panel-lecture");
      let sections = Array.from(d.getElementsByClassName("portal-section"));
      d.appendChild(timetable);
      d.appendChild(sections[0]);
      d.appendChild(sections[1]);
      d.appendChild(sections[2]);
      d.insertBefore(timetable, document.getElementById("lecture-cards"));
      resolve(true);
    })
  }
  */

function rnu(arg){
  console.log(arg);
  return new Promise(resolve => {
    setTimeout(() => {
      document.getElementById("navi-"+arg).click();
      resolve(true);
    }, 100);
  })
}

async function rnue(){
  let lecture = await rnu("lecture");
  let index = await rnu("index");
  await removeIndexSectionStyle();
  return "done";
}

// 3秒待ちがあるので時間割の中身操作系はダメ
window.onload = function (){
  console.log("window.onload!");
  // なんかうまくいく
  //setTimeout(roundNavUrl, 500);

  rnue().then(result => {
    console.log(result);
  });
  addtoppad();
  addfont();

  //addPageInfo();
  loading();
  setTimeout(removeloadanimation, 3000);
  //setDisplayPage();
};

chrome.storage.sync.get(["option"], function(data) {
  if(data.option==="on"){
    executeFunc(change);
  }
});


//executeFunc(addPageInfo,5000);
