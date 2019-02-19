var darkFlip = (function () {
  var counter = false;
  return function () {counter = !(counter); return counter;}
})();

function darkFunction() {
  if(darkFlip()){
    document.getElementById("darkSwitch").innerHTML = "Light Mode";
    document.body.style.backgroundColor = "rgba(20, 20, 20, 1)";
    document.getElementById("header").style.borderColor = "rgba(0, 255, 100, 1)";
    document.getElementById("header").style.backgroundColor = "rgba(20, 20, 20, 1)";
    document.getElementById("title").style.color = "white";
    document.getElementById("title").style.textShadow = "5px 2px hotpink";
    document.getElementById("navbar").style.borderColor = "rgba(0, 255, 100, 1)";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 255, 100, 1)";
    document.getElementById("content").style.backgroundColor = "rgba(30, 30, 30, 1)";
    document.getElementById("content").style.color = "white";
    document.getElementById("content").style.borderColor = "rgba(0, 255, 100, 1)";
    document.getElementById("gallery").style.borderColor = "rgba(0, 255, 100, 1)";
    document.getElementById("gallery").style.backgroundColor = "rgba(0, 255, 100, 1)";
    document.getElementById("footer").style.color = "white";
    document.getElementById("footer").style.borderColor = "rgba(0, 255, 100, 1)";
  }else{
    document.getElementById("darkSwitch").innerHTML = "Dark Mode";
    document.body.style.backgroundColor = "rgba(255, 130, 230, 0.5)";
    document.getElementById("header").style.borderColor = "rgba(70, 70, 70, 1)";
    document.getElementById("header").style.backgroundColor = "rgba(255, 130, 230, 0.5)";
    document.getElementById("title").style.color = "black";
    document.getElementById("title").style.textShadow = "5px 2px lightblue";
    document.getElementById("navbar").style.borderColor = "rgba(70, 70, 70, 1)";
    document.getElementById("navbar").style.backgroundColor = "lightgray";
    document.getElementById("content").style.backgroundColor = "rgba(230, 230, 230, 0.5)";
    document.getElementById("content").style.color = "black";
    document.getElementById("content").style.borderColor = "rgba(254, 254, 254, 0.5)";
    document.getElementById("gallery").style.borderColor = "lightgray";
    document.getElementById("gallery").style.backgroundColor = "rgba(244, 50, 130, 0.5)";
    document.getElementById("footer").style.color = "black";
    document.getElementById("footer").style.borderColor = "black";
  }
}

var sideOn = (function () {
  var counter = false;
  return function () {counter = !(counter); return counter;}
})();

function sideSwitch() {
  if(sideOn()){
    document.getElementById("sidebar-content").style.display = "block";
    document.getElementById("sidebar-content").style.display = "block";
    document.getElementById("sidebar").style.width = "25%";
    document.getElementById("sidebar").style.height = "99%";
    document.getElementById("sidebarButton").style.borderBottom = "3px solid black";
  }else{
    document.getElementById("sidebar-content").style.display = "none";
    document.getElementById("sidebar-content").style.display = "none";
    document.getElementById("sidebar").style.width = "7%";
    document.getElementById("sidebar").style.height = "auto";
    document.getElementById("sidebarButton").style.borderBottom = "none";
  }
}

var flipOn = (function () {
  var counter = false;
  return function () {counter = !(counter); return counter;}
})();

function flipFunction() {
  if(flipOn()){
    document.getElementById("notSidebar").style.transform = "scaleX(-1)";
    document.getElementById("sidebar").style.zIndex = "10";
  }else{
    document.getElementById("notSidebar").style.transform = "scaleX(1)";
    document.getElementById("sidebar").style.zIndex = "10";
  }
}

var invertOn = (function () {
  var counter = false;
  return function () {counter = !(counter); return counter;}
})();

function invertFunction() {
  if(invertOn()){
    document.getElementById("notSidebar").style.filter = "invert(100%)";
    document.getElementById("sidebar").style.zIndex = "10";
  }else{
    document.getElementById("notSidebar").style.filter = "invert(0%)";
    document.getElementById("sidebar").style.zIndex = "10";
  }
}