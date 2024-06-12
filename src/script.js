const pagesAmount = 21;

function loadPage(page) {
	document.getElementById("iframe").src = page;
}

function renderButtons(amount) {
	const container = document.getElementById("nav");

	for (let count = 0; count <= amount; count++) {
		const button = document.createElement("button");
		button.innerText = `page ${count}`;
		button.onclick = () => loadPage(`./src/page${count}.html`);
		container.appendChild(button);
	}
}
function renderIFrames(amount) {
	const container = document.getElementById("container");

	for (let count = 0; count <= amount; count++) {
		const el = document.createElement("iframe");
		el.innerText = `page ${count}`;
		el.src = `./src/page${count}.html`;
		el.onLoad = onLoad.bind(el);
		container.appendChild(el);
	}
}

function onLoad() {
	this.style.height = this.contentWindow.document.body.scrollHeight + "px";
}

// renderIFrames(pagesAmount);
