var canvas=document.getElementById('canvas');

var ctx=canvas.getContext('2d');

ctx.fillStyle="white";

var height=170;

drawPad(height);

function drawPad(y){

  ctx.fillRect(30,y,10,60);
}




window.onkeydown = movepad;

// function to move pad up and down
function movepad(e){


  if(e.keyCode == '38'){                       // there are various keycodes to detect the keys pressed
  if(height > 0 && height <=340){
          height-=10;
          console.log(height);

      }
      ctx.clearRect(0,0,600,400);

      drawPad(height);

  }
  else if(e.keyCode=='40'){
    if(height >= 0 && height <340){
        height+=10;
        console.log(height);

    }
    ctx.clearRect(0,0,600,400);              // clears canvas,if not used trail is left

    drawPad(height);
  }
}

drawBall();


var x=300;
var y=200;

function drawBall(){

  ctx.arc(x,y,8,0,2*Math.PI,false);
  ctx.fillStyle='white';
  ctx.fill();
}


function moveBall(x,y){


}

drawBall();

moveBall(x,y);
