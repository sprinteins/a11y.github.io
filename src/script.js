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

renderButtons(pagesAmount);
