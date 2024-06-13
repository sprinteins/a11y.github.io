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

function renderNavigationButton(current) {
	const backNumber = Math.max(0, current - 1);
	const forwardNumber = Math.min(21, current + 1);
	const body = document.getElementsByTagName("body")[0];
	const back = document.createElement("a");
	back.innerText = "back";
	back.setAttribute("href", `./page${backNumber}.html`);
	back.classList.add("navigation-btn");
	const forward = document.createElement("a");
	forward.innerText = "forward";
	forward.setAttribute("href", `./page${forwardNumber}.html`);
	back.classList.add("navigation-btn");

	const wrapper = document.createElement("div");
	wrapper.classList.add("navigation-wrapper");

	wrapper.appendChild(back);
	wrapper.appendChild(forward);
	body.appendChild(wrapper);
}

function onLoad() {
	this.style.height = this.contentWindow.document.body.scrollHeight + "px";
}

// renderIFrames(pagesAmount);
