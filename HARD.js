var el_up = document.getElementById("UP");
var el_down = document.getElementById("DOWN");
var str = "Click on button to change the background color";
          
el_up.innerHTML = str;
          
function changeColor(color) {
    document.body.style.background = color;
}
  
function red() {
    changeColor('red');
    el_down.innerHTML = "Background Color changed";
}        
function white() {
    changeColor('white');
    el_down.innerHTML = "Background Color changed";
}        
