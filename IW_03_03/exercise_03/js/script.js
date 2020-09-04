var count = 0, reach = 0;

var playlist = document.getElementsByClassName('playlist');
var topButton = document.getElementsByClassName('to-top-btn')[0];

document.addEventListener('scroll', checkFadeIn);
document.addEventListener('scroll', checkReachBottom);

function checkFadeIn(){
	for(var i = 0; i < playlist.length; i++) {
		if (isDivReach(playlist[i]) && playlist[i].style.opacity == 0) {
			fadeIn(playlist[i]);
		}
	}
}

function checkReachBottom() {
	if(isReachBottom() && isReachBottom() != reach) {
		reach = 1;
		topButton.style.display = "inline-block";
		setTimeout(fadeIn(topButton), 1000);
	} else if (!isReachBottom() && isReachBottom() != reach) {
		reach = 0;
		console.log(0);
		setTimeout(fadeOut(topButton), 1000);
	}
}

function isDivReach(div) {
	return window.pageYOffset + window.innerHeight > div.getBoundingClientRect().bottom + window.pageYOffset - div.offsetHeight / 2
}

function isReachBottom(){
	return document.scrollingElement.scrollTop + window.innerHeight > document.scrollingElement.scrollHeight;
}

function fadeIn(tmpDiv) {
	tmpDiv.style.opacity = 0;
	(function fade(){
		var val = parseFloat(tmpDiv.style.opacity);
		if ((val += .02) <= 1) {
			tmpDiv.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}

function fadeOut(tmpDiv) {
	tmpDiv.style.opacity = 1;
	(function fade(){
		if ((tmpDiv.style.opacity -= .02) < 0) {
			tmpDiv.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
}

function init() {
	checkFadeIn();
}

init();