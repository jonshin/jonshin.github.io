function showIt() {
	document.getElementById("chorus").style.display = "block";
} 
function hideIt() {
	document.getElementById("chorus").style.display = "none";
	document.getElementById("vid").play();
} 
function showvid() {
	document.getElementById("vid").style.display = "block";
	document.getElementById("vid").play()
} 
function hidevid() {
	document.getElementById("vid").style.display = "none";
} 

function showedits() {
	document.getElementById("edits").style.display = "block";
	document.getElementById("edits").play()
} 

function workit() {
	document.getElementById("button").style.display = "none";

	setTimeout("showIt()", 24500); // after 24.5 sec 24500	// 7 sec
	setTimeout("hideIt()", 31500); // after 31.5 sec	// 4.5 sec
	setTimeout("showvid()", 29000); // after 29 sec		// 8 sec
	setTimeout("hidevid()", 32500); // after 32.5 sec

	setTimeout("showIt()", 36700); 
	setTimeout("hideIt()", 43700); 
	setTimeout("showvid()", 41200);
	setTimeout("hidevid()", 44700);

	setTimeout("showIt()", 48900); 
	setTimeout("hideIt()", 55900); 
	setTimeout("showvid()", 53400);
	setTimeout("hidevid()", 56900);

	setTimeout("showIt()", 61100); 
	setTimeout("hideIt()", 68100); 
	setTimeout("showvid()", 65600);
	setTimeout("hidevid()", 69100);

	setTimeout("showIt()", 73300); 
	setTimeout("hideIt()", 80300); 
	setTimeout("showvid()", 77800);
	setTimeout("hidevid()", 81300);

	setTimeout("showIt()", 85500); 
	setTimeout("hideIt()", 92500); 
	setTimeout("showvid()", 90000);
	setTimeout("hidevid()", 93500);

	setTimeout("showIt()", 97700); 
	setTimeout("hideIt()", 104700); 
	setTimeout("showvid()", 102200);
	setTimeout("hidevid()", 105700);

	setTimeout("showIt()", 109900); 
	setTimeout("hideIt()", 116900); 
	setTimeout("showvid()", 114400);
	setTimeout("hidevid()", 117900);

	setTimeout("showedits()", 128500);
}



var iframeElement   = document.querySelector('iframe');
var widget1         = SC.Widget(iframeElement);

function playMusic(){
   widget1.play();
}
