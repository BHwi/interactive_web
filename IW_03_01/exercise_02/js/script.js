const sendBtn = document.getElementById("send");
const chatBox = document.getElementsByClassName("chatbox")[0];

sendBtn.addEventListener('click', clickButton);

function clickButton(event) {
	const textArea = document.getElementsByTagName("textarea")[0];

	if (textArea.value) {
		var sendDiv = document.createElement('div');
		var text = document.createTextNode(textArea.value);
		sendDiv.classList.add('my-bubble');
		sendDiv.classList.add('bubble');
		sendDiv.appendChild(text);

		chatBox.appendChild(sendDiv);
		textArea.value = "";
	}
}