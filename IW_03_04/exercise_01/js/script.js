var navtmp = 0;
var texttmp = [0, 0, 0];
var aboutBtn = document.getElementById('about-btn');
var contactBtn = document.getElementById('contact-btn');
var header = document.getElementsByClassName('header')[0];
var about = document.getElementsByClassName('about')[0];
var text = document.getElementsByClassName('vertical-center');

document.addEventListener('scroll', navbarChange);
document.addEventListener('scroll', textAnimation);
aboutBtn.addEventListener('click', toAbout);
contactBtn.addEventListener('click', toContact);

function init() {
	navbarChange();
	textAnimation();
}

function navbarChange() {
	if(navtmp != isChange()) {
		if (isChange() === 2) {
			return;
		}
		if (isChange() === 1) {
			colorChange(aboutBtn, "#4a4a4a");
			colorChange(contactBtn, "#4a4a4a");
		} 
		else {
			colorChange(aboutBtn, "white");
			colorChange(contactBtn, "white");
		}
		navtmp = isChange();
	}
}

function textAnimation() {
	if (isChange() == 0) {
		if(texttmp[0] == 0) {
			fadeIn(text[0]);
			divIncrease(text[0]);
			texttmp[0] = 1;
		}
	} else if(isChange() == 1) {
		if(texttmp[0] == 0) {
			fadeIn(text[0]);
			divIncrease(text[0]);
			texttmp[0] = 1;
		}
		if(texttmp[1] == 0) {
			fadeIn(text[1]);
			divIncrease(text[1]);
			texttmp[1] = 1;
		}
	} else if(isChange() == 2) {
		if(texttmp[0] == 0) {
			fadeIn(text[0]);
			divIncrease(text[0]);
			texttmp[0] = 1;
		}
		if(texttmp[1] == 0) {
			fadeIn(text[1]);
			divIncrease(text[1]);
			texttmp[1] = 1;
		}
		if(texttmp[2] == 0) {
			fadeIn(text[2]);
			divIncrease(text[2]);
			texttmp[2] = 1;
		}
	}
}

function colorChange(targetDiv, color) {
	targetDiv.style.color = color;
}

function isChange() {
	if (window.pageYOffset < header.offsetHeight){
		return 0;
	}
	else if (window.pageYOffset >= header.offsetHeight + about.offsetHeight){
		return 2;
	}
	else if (window.pageYOffset >= header.offsetHeight){
		return 1;
	}
}

function toAbout() {
	moveDiv(header.offsetHeight);
}

function toContact() {
	moveDiv(header.offsetHeight + about.offsetHeight);
}

function moveDiv(target) {
	var time = Date.now();
	var nowLocation = window.pageYOffset;
	var changeY = (target - nowLocation) / 50;
	console.log("now : " + nowLocation + " changeY : " + changeY + " target : " + target);

	if(nowLocation <= target){
		(function move() {
			if ((nowLocation += changeY) < target) {
				window.scrollTo(window.pageXOffset, nowLocation);
				requestAnimationFrame(move);
			} else {
				window.scrollTo(window.pageXOffset, target);
			}
		})();
	}
	else {
		(function move() {
			if ((nowLocation += changeY) > target) {
				window.scrollTo(window.pageXOffset, nowLocation);
				requestAnimationFrame(move);
			} else {
				window.scrollTo(window.pageXOffset, target);
			}
		})();
	}
}

function fadeIn(targetDiv) {
	targetDiv.style.opacity = 0;

	(function fade() {
		var value = parseFloat(targetDiv.style.opacity);
		if ((value += 0.02) <= 1) {
			targetDiv.style.opacity = value;
			requestAnimationFrame(fade);
		}
	})();
}

function divIncrease(targetDiv) {
	console.log(targetDiv.offsetHeight);
	targetDiv.style.top = '100px';
	value = 100;
	targetDiv.style.top = '0px';
	(function up() {
		if((value -= 2) > 0) {
			targetDiv.style.top = value + 'px';
			requestAnimationFrame(up);
		}
	})();
}

init();
