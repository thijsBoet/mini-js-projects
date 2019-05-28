window.onload = choosePic;

var myPix = new Array("img/rock.gif","img/paper.gif","img/scissor.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("hand").src = myPix[randomNum];
}
