const flag = document.getElementsByClassName('flag');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click', downBlue);
btn2.addEventListener('click', downWhite);
btn3.addEventListener('click', downDotBlue);

function downBlue(){
	for (let i = 0; i < flag.length; i++) {
		if (flag[i].classList.contains('blue'))
			flag[i].classList.add('down');
	}
	setTimeout(flagUp, 1000);
}

function downWhite(){
	for (let i = 0; i < flag.length; i++) {
		if (flag[i].classList.contains('white'))
			flag[i].classList.add('down');
	}
	setTimeout(flagUp, 1000);
}

function downDotBlue(){
	for (let i = 0; i < flag.length; i++) {
		if (flag[i].classList.contains('dot') && flag[i].classList.contains('blue'))
			flag[i].classList.add('down');
	}
	setTimeout(flagUp, 1000);
}

function flagUp(){
	for (let i = 0; i < flag.length; i++) {
		if (flag[i].classList.contains('down'))
			flag[i].classList.remove('down');
	}
}