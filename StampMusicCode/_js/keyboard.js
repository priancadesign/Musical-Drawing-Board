window.addEventListener('load', init);

//initializes our program
function init(){
	//listen for keyboard events
	window.addEventListener('keypress', respondToKeypress);	
}


var x;
var y;


function respondToKeypress(ev){

	var x = Math.floor((Math.random() * 1450) + 140);
	var y = Math.floor((Math.random() * 720) + 150);

	var	rainbow;
	var cupcake;
	var lion;
	var candy;
	var elephant;
	var ball;
	var star;	

	var ltr = String.fromCodePoint(ev.keyCode);//ASCII keycode

	switch(ltr.toLowerCase()){
		case 'r':
			document.getElementById("rainbow").style.background = "url('images/stamp5.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			rainbow	= document.createElement('div');
			rainbow.className = 'rainbow';
			rainbow.style.top = (y-100) + 'px';
			rainbow.style.left = (x-50) + 'px';
			document.getElementById("sketch").appendChild(rainbow);
			document.getElementById('rainbowMusic').play();
			break;

		case 'l':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			lion = document.createElement('div');
			lion.className = 'lion';
			lion.style.top = (y-100) + 'px';
			lion.style.left = (x-50) + 'px';
			document.getElementById("sketch").appendChild(lion);
			document.getElementById('lionMusic').play();
			break;

		case 'c':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			candy = document.createElement('div');
			candy.className = 'candy';
			candy.style.top = (y - 100) + 'px';
			candy.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(candy);
			document.getElementById('candyMusic').play();
			break;

		case 'e':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			elephant = document.createElement('div');
			elephant.className = 'elephant';
			elephant.style.top = (y - 100) + 'px';
			elephant.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(elephant);
			document.getElementById('elephantMusic').play();
			break;

		case 'k':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			cupcake = document.createElement('div');
			cupcake.className = 'cupcake';
			cupcake.style.top = (y - 100) + 'px';
			cupcake.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(cupcake);
			document.getElementById('cupcakeMusic').play();
			break;

		case 'b':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			ball = document.createElement('div');
			ball.className = 'ball';
			ball.style.top = (y - 100) + 'px';
			ball.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(ball);
			document.getElementById('ballMusic').play();
			break;

		case 's':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			star = document.createElement('div');
			star.className = 'star';
			star.style.top = (y - 100) + 'px';
			star.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(star);
			document.getElementById('starMusic').play();
			break;
	}

}


