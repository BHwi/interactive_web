var i;
var card = document.getElementsByClassName('card');
var oddArr = new Array, evenArr = new Array;
var oddButton = document.getElementById("odd-btn"), evenButton = document.getElementById("even-btn");

oddButton.addEventListener('click', clickOddButton);
evenButton.addEventListener('click', clickEvenButton);

for(i = 0; i < card.length; i++) {
	if (Number(card[i].textContent) % 2 === 0) {
		evenArr.push(card[i]);
	}
	else {
		oddArr.push(card[i]);
	}
}

function clickOddButton() {
	for(i = 0; i < card.length; i++)
		card[i].classList.remove("selected");

	for(i = 0; i < oddArr.length; i++)
		oddArr[i].classList.add("selected");
}

function clickEvenButton() {
	for(i = 0; i < card.length; i++)
		card[i].classList.remove("selected");
	
	for(i = 0; i < evenArr.length; i++)
		evenArr[i].classList.add("selected");
}