const pa11y = require("pa11y");

const BASE_PA11Y_CONFIGURATION = {
	runners: ["axe", "htmlcs"],
	standard: "WCAG2AAA",
};

async function runPa11yTest(path) {
	try {
		const results = await pa11y(`http://localhost:5173/${path}`, {
			...BASE_PA11Y_CONFIGURATION,
		});

		console.log(results);
	} catch (error) {
		console.error(error);
	}
}

// runPa11yTest();

// Process multiple HTML files
const path = "";
const files = [
	`${path}index.html`,
	`${path}page1.html`,
	`${path}page2.html`,
	`${path}page3.html`,
	`${path}page4.html`,
	`${path}page5.html`,
	`${path}page6.html`,
	`${path}page7.html`,
	`${path}page8.html`,
	`${path}page9.html`,
	`${path}page10.html`,
	`${path}page11.html`,
	`${path}page12.html`,
	`${path}page13.html`,
	`${path}page14.html`,
	`${path}page15.html`,
	`${path}page16.html`,
	`${path}page17.html`,
	`${path}page18.html`,
	`${path}page19.html`,
	`${path}page19.html`,
]; // Add your HTML file paths here

files.forEach((file, index) => {
	runPa11yTest(file);
});
