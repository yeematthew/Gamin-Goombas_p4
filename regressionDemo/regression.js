// retrieve node in DOM via ID
var c = document.getElementById("slate");

// instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");



coordinates = []

var drawCircle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.arc(mouseX, mouseY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

	coordinates.push({x: mouseX, y: mouseY});
}

var draw = (e) => {
        return drawCircle(e);
}

var wipeCanvas = function(){
    ctx.clearRect(0, 0, 600, 600);
}

var drawRegLine = function(){
	if(coordinates.length <= 1){
		return;
	}
	var xsum = 0;
	var ysum = 0;
	for(var i = 0; i < coordinates.length; i++){
		xsum += coordinates[i].x;
		ysum += coordinates[i].y;
	}
	var xmean = xsum / coordinates.length;
	var ymean = ysum / coordinates.length;

	var num = 0;
	var den = 0;
	for(var i = 0; i < coordinates.length; i++){
		var x = coordinates[i].x;
		var y = coordinates[i].y;
		num += (x - xmean) * (y - ymean);
		den += (x - xmean) * (x - xmean);
	}
	m = num / den; // BE CAREFUL FOR WHEN ALL x's SAME
	b = ymean - m * xmean;
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.moveTo(0, b);
	ctx.lineTo(600, 600 * m + b);
	ctx.stroke();
	console.log("y" + " = " + m + "x + " + b);
}


c.addEventListener("click", draw);


var clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);

var regB = document.getElementById("buttonRegression");
regB.addEventListener("click", drawRegLine);


