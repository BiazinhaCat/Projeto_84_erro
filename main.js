canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

	window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))

		alfabetokey();
		document.getElementById("d1").innerHTML = "Você está pressionando a tecla alfabeto";
		console.log(alfabetokey);

		numerokey();
		document.getElementById("d2").innerHTML = "Você está pressionando a tecla número";
		console.log(numerokey);

		direcionalkey();
		document.getElementById("d3").innerHTML = "Você está pressionando a tecla direcional";
		console.log(direcionalkey);

		especialkey();
		document.getElementById("d4").innerHTML = "Você está pressionando a tecla especial";
		console.log(especialkey);

		outrakey();
		document.getElementById("d5").innerHTML = "Você está pressionando outra tecla ";
		console.log(outrakey);
		
	}

function alfabetokey()
{
	img_image = "alfabeto.png";
	document.getElementById("d1").value;
	add();

}
function numerokey()
{
	img_image = "numero.png";
	document.getElementById("d2").value;
	add();
}
function direcionalkey()
{
	img_image = "direcional.png";
	document.getElementById("d3").value;
	add();
}
function especialkey()
{
	img_image = "especial.png";
	document.getElementById("d4").value;
	add();	
}
function outrakey()
{
	img_image="outraskey.png";
	document.getElementById("d5").value;
	add();
}
	
