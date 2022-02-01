window.addEventListener("DOMContentLoaded",init);

let hCanvas;
let ctx;

function init(){
  hCanvas=document.getElementById("mycanvas");
  ctx=hCanvas.getContext("2d");
  trace(0.8);
}

function trace(angle){
  ctx.beginPath();
  ctx.arc(50,50,20,0,angle*Math.PI,false);
  ctx.fillStyle="black";
  ctx.stroke();
}