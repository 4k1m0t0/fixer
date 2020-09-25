/*
 *
 * Loading Animation
 *
 */


function setLoadingAnimation(){
  let loader = document.createElement("div");
  let content = document.createElement("div");
  let text = document.createElement("span");
  loader.setAttribute("id", "loading");
  content.setAttribute("class", "loading-content");

  var now = new Date();

  /*
  loader  <div id="loading></div>
    =>content <div class="loading-content"></div>
      =>text <span>"Welcome"</span>
  */
  let br = document.createElement("br");
  let welcome = document.createElement("span");
  welcome.textContent = "Welcome to TUT portal.";
  let time = document.createElement("span");
  time.textContent = now.toLocaleString();

  text.appendChild(welcome);
  text.appendChild(br);
  text.appendChild(time);
  content.appendChild(text);
  loader.appendChild(content);
  var counter = 0;
  let siId = setInterval(()=>{
    counter += 1;
    var now = new Date();
    time.textContent = now.toLocaleString();
    text.appendChild(time);
    console.log(now.toLocaleString());
    if(counter>10){
      clearInterval(siId);
    }
  }, 1000);
  let element = document.querySelector("body");

  element.insertBefore(loader, element.firstChild);
}


function removeLoadingAnimation(){
  // this function need time setting setting point.
  const loadAnimationElement = document.getElementById("loading");
  loadAnimationElement.setAttribute("class", "loaded");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/*
 * Index Page
 *
 *
 */


/*
 * Lecture Page
 * Time Table Setting
 *
 */

function addTimeInfoToTimetable(){
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

function changeTimeTableUrl(){
  // items is getting timetable element
  // this function rewrite timetable's  href tag. from lecture-card
  let items = document.getElementsByClassName("lecture-navi-link");
  for (let item of items) {
    // get lesson information
    // id example is "lecture-navi-7453"
    // follow slice is get 7453. this matches lecture-card id.

    // 1. lecture-navi-link shold be change.
    let changeObjectId = item.getAttribute("id");
    let targetLectureId = changeObjectId.slice(13);
    let containUrlElement = document.getElementById("lecture-"+targetLectureId);

    // 2. get url for set on 1.
    let targetUrl = containUrlElement.querySelector("a").getAttribute("href");

    // 3. get setting place
    let targetElement = document.getElementById(changeObjectId);

    // change dom href
    targetElement.removeAttribute("href");
    targetElement.setAttribute("href", targetUrl);
    targetElement.setAttribute("target", "_blank");
    targetElement.setAttribute("rel", "noopener noreferrer");
    // below line maybe not meaning but correct class.
    targetElement.classList.add("lecture-url-link");

    // remove class: this class curse some Exception in portal.
    // shape up like pure "lecture-url-link"
    targetElement.classList.remove("hpjax");
  }
}

function changePortalSectionStructure(){
  // this function purpose change element order in panel-lecture
  // parent is basic point from "portal-section" insight.
  let timetable = document.getElementById("lecture-navi");
  let parent = document.getElementById("panel-lecture");
  let sections = Array.from(parent.getElementsByClassName("portal-section"));
  parent.appendChild(timetable);
  parent.appendChild(sections[0]);
  sections[0].appendChild(sections[1].getElementsByTagName("dl")[0]);
  parent.appendChild(sections[2]);
  let a = sections[2].querySelector("a");
  sections[2].appendChild(a);
  sections[1].remove();
  parent.insertBefore(timetable, document.getElementById("lecture-cards"));
  // document::
}

/*
 *
 * header & footer setting
 *
 */

function addTopPaddingDiv(){
  let div = document.createElement("div");
  div.setAttribute("id", "top-padding");
  let target = document.getElementById("contents");
  document.getElementsByTagName("body")[0].insertBefore(div, target);
}

function changeHeaderStructure(){
  let glhBack = document.createElement("div");
  glhBack.setAttribute("id", "glh-back");
  let glhContent = document.createElement("div");
  glhContent.setAttribute("id", "glh-content");
  let header = document.getElementById("global-header");
  let a = header.getElementsByTagName("a")[0];
  let info = header.getElementsByTagName("div")[0];

  glhContent.appendChild(a);
  glhContent.appendChild(info);

  // this will change reload.
  header.appendChild(glhBack);
  glhBack.appendChild(glhContent);
}

function addFonts(){
  let head = document.getElementsByTagName("head");
  // zilla+slab is used in Mozilla site.
  let zillaslab = document.createElement("link");
  zillaslab.setAttribute("href", "https://fonts.googleapis.com/css?family=Zilla+Slab");
  zillaslab.setAttribute("rel", "stylesheet");
  // noto sans jp is japanese character.
  let notosansjp = document.createElement("link");
  notosansjp.setAttribute("href", "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400&display=swap");
  notosansjp.setAttribute("rel", "stylesheet");

  head[0].appendChild(zillaslab);
  head[0].appendChild(notosansjp);
}

function addExtensionComment(){
  let f = document.getElementById("global-footer");
  let text = document.createElement("p");
  text.textContent = "this page using genzai extension. extension is not official project.";
  f.appendChild(text);
}

function executeFunc(arg1){
  for (let i=1; i<11; i++){
    let time = i*1000;
    setTimeout(arg1, time);
  }
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
      /*addExtensionComment();
      addTimeInfoToTimetable();
      changeHeaderStructure();
      changePortalSectionStructure();*/
      // 先頭にデフォルトから要素があるので除く
      b[0].remove();
      resolve(true);
    }, 100);
  });
}

function executeFuncForDomChange(){
  console.log("loadafter");
  return new Promise(resolve => {
    setTimeout(() => {
      addExtensionComment();
      addTimeInfoToTimetable();
      changeHeaderStructure();
      changePortalSectionStructure();

      resolve(true);
    }, 100);
  });
}


function rnu(arg){
  console.log(arg);
  return new Promise(resolve => {
    setTimeout(() => {
      document.getElementById("navi-"+arg).click();
      resolve(true);
    }, 100);
  })
}

async function initExecFunc(){
  let lecture = await rnu("lecture");
  let index = await rnu("index");
  await removeIndexSectionStyle();
  await executeFuncForDomChange();
  return "done";
}

// 3秒待ちがあるので時間割の中身操作系はダメ
window.onload = function (){
  console.log("window.onload!");
  // なんかうまくいく
  //setTimeout(roundNavUrl, 500);
  setLoadingAnimation();
  //3
  setTimeout(removeLoadingAnimation, 4000);


  initExecFunc().then(result => {
    console.log(result);
  });
  addTopPaddingDiv();
  addFonts();

  //setDisplayPage();
};

chrome.storage.sync.get(["option"], function(data) {
  if(data.option==="on"){
    executeFunc(changeTimeTableUrl);
  }
});


