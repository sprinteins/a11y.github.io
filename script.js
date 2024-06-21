const pagesAmount = 19;

function loadPage(page) {
	document.getElementById("iframe").src = page;
}

function renderButtons(amount) {
	const container = document.getElementById("nav");

	for (let count = 0; count <= amount; count++) {
		const button = document.createElement("button");
		button.innerText = `page ${count}`;
		button.onclick = () => loadPage(`/page${count}.html`);
		container.appendChild(button);
	}
}

function fillNavigationList(amount) {
	const container = document.getElementById("menu");

	for (let count = 0; count <= amount; count++) {
		const li = document.createElement("li");
		const linkElement = document.createElement("a");
		linkElement.innerText = `page ${count}`;
		let link = `/page${count}.html`;

		if (count === 0) {
			link = `/index.html`;
		}

		linkElement.href = link;
		li.appendChild(linkElement);
		container.appendChild(li);
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

	const backFileName = getFileName(backNumber);
	const forwardFileName = getFileName(forwardNumber);

	const back = backButton(backFileName);
	const forward = forwardButton(forwardFileName);
	const wrapper = document.createElement("div");
	wrapper.classList.add("navigation-wrapper");

	if (forwardNumber !== 1) {
		wrapper.appendChild(back);
		wrapper.appendChild(document.createElement("div"));
	}
	if (forwardNumber !== 21) {
		wrapper.appendChild(document.createElement("div"));
		wrapper.appendChild(forward);
	}

	body.appendChild(wrapper);
}

function getFileName(number) {
	if (number === 0) {
		return `./index.html`;
	}
	return `./page${number}.html`;
}

function backButton(navigateToFile) {
	const el = document.createElement("a");
	el.appendChild(icon("left"));
	el.appendChild(document.createTextNode("back"));
	el.setAttribute("href", navigateToFile);
	el.classList.add("navigation-btn");
	el.classList.add("left");

	return el;
}

function forwardButton(navigateToFile) {
	const el = document.createElement("a");
	el.appendChild(document.createTextNode("forward"));
	el.appendChild(icon("right"));
	el.setAttribute("href", navigateToFile);
	el.classList.add("navigation-btn");
	el.classList.add("right");

	return el;
}

function icon(direction) {
	const el = document.createElement("img");
	el.innerText = "el";
	el.setAttribute("src", `./icons/icon_10_${direction}_carrat.svg`);
	el.setAttribute(
		"alt",
		`${direction} button image. Arrow showing to the ${direction}`
	);
	el.classList.add(direction);

	return el;
}

function onLoad() {
	this.style.height = this.contentWindow.document.body.scrollHeight + "px";
}

fetch("/navigation.html")
	.then((res) => res.text())
	.then((text) => {
		let oldelem = document.querySelector("body");
		let newelem = document.createElement("div");
		newelem.innerHTML = text;
		oldelem.prepend(newelem);
	})
	.then(() => {
		fillNavigationList(pagesAmount);
	});
