var navtmp = 0;
var aboutBtn = document.getElementById('about-btn');
var contactBtn = document.getElementById('contact-btn');
var header = document.getElementsByClassName('header')[0];
var about = document.getElementsByClassName('about')[0];
document.addEventListener('scroll', navbarChange);
aboutBtn.addEventListener('click', toAbout);
contactBtn.addEventListener('click', toContact);

function navbarChange() {
	if(navtmp != isChange()) {
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

function colorChange(targetDiv, color) {
	targetDiv.style.color = color;
}

function isChange() {
	if (header.offsetHeight > window.pageYOffset)
		return 0;
	else 
		return 1;
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