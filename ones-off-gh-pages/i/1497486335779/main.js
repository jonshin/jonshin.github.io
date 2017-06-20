(function () {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var colors = [
		'#F5A22F',
		'#2F3CF5',
		'#08852F',
		'#000',
		'#F22727',
		'#FFF'
	];

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var sine = function (yOffset, k, t, s, fill, ball, ballFill, index) {
		var x = 0;
		var y = yOffset + k * Math.sin(t + x * (s * rands[index]));
		var period = (s * rands[index]) * canvas.width;

		ctx.moveTo(x,y);
		ctx.beginPath();

		var resolution = 50;

		for (var i = 0 ; i < canvas.width + resolution; i += resolution) {
			x = i;
			y = yOffset + k * Math.sin(t + x * (s * rands[index] + 0.02));
			ctx.lineTo(x,y);
		}

		ctx.lineTo(canvas.width, canvas.height);
		ctx.lineTo(0, canvas.height);

		ctx.fillStyle = fill;
		ctx.fill();

	}

	var numLines =90;

	var draw = function () {
		var t = new Date().getTime();

		for (var i = 0; i < numLines; i++) {
			sine(i * ((canvas.height + 180) / numLines) - 120, (canvas.height + 180 ) / numLines / 2 + (rands[i] * 30), t / (((i % 5 + 1) * 200 * rands[i]) + 300), 0.01, colors[Math.round(i % colors.length)], false, colors[Math.round(i % colors.length)], i);
		}

		window.requestAnimationFrame(draw);
	}

	var rands = (function () {
		var arr = [];
		for (var i = 0; i < numLines; i++) {
			arr.push(Math.random());
		}
		return arr;
	})();

	draw();

})();

/*Jon Shin ripple effect*/

var canvas = document.getElementById('canvas2');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw(e) {
    var pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;
    ctx.beginPath();
    ctx.arc(posx, posy, 100, 0, 2*Math.PI);
    ctx.strokeStyle = "#FFF";
    ctx.stroke();
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function play(){
	var audio = document.getElementById("audio");
	audio.play();
}

draw();




