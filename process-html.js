const fs = require("fs");
const postcss = require("postcss");
const syntax = require("postcss-html")();
const postcssConfig = require("./postcss.config.js");
const autoprefixer = require("html-autoprefixer");
const cheerio = require("cheerio");

// import fs from "fs";
// import postcss from "postcss";
// import syntax from "postcss-html";
// import postcssConfig from "./postcss.config.js";

function generatePrefix(fileName, index) {
	const baseName = fileName.split(".")[1].split("/")[2]; // Remove file extension
	return `${baseName}-`; // Customize your prefix format here
}

// Function to process a single HTML file
async function processHtmlFile(filePath, index) {
	const prefix = generatePrefix(filePath, index);
	const config = postcssConfig(prefix);
	const htmlContent = fs.readFileSync(filePath, "utf8");

	// Parse the HTML content
	const $ = cheerio.load(htmlContent);

	// Update class names in the HTML
	$("[class]").each((_, element) => {
		const classes = $(element).attr("class").split(" ");
		const updatedClasses = classes.map((className) => `${prefix}${className}`);
		$(element).attr("class", updatedClasses.join(" "));
	});

	// Extract the CSS from the style tags
	const styleTags = $("style");
	styleTags.each((_, styleTag) => {
		const cssContent = $(styleTag).html();
		postcss(config.plugins)
			.process(cssContent, {
				syntax: syntax,
				from: undefined,
			})
			.then((result) => {
				// Update the CSS content in the style tag
				$(styleTag).html(result.css);
			});
	});

	fs.writeFileSync(filePath, $.html());

	const htmlContent2 = fs.readFileSync(filePath, "utf8");
	const result = await postcss(config).process(htmlContent2, {
		syntax: syntax,
		from: filePath,
		to: filePath,
	});
	fs.writeFileSync(filePath, result.content);

	console.log(`Processed ${filePath}`);
}

// Process multiple HTML files
const files = [
	"./src/page0.html",
	"./src/page1.html",
	"./src/page2.html",
	"./src/page3.html",
	"./src/page4.html",
	"./src/page5.html",
	"./src/page6.html",
	"./src/page7.html",
	"./src/page8.html",
	"./src/page9.html",
	"./src/page10.html",
	"./src/page11.html",
	"./src/page12.html",
	"./src/page13.html",
	"./src/page14.html",
	"./src/page15.html",
	"./src/page16.html",
	"./src/page17.html",
	"./src/page18.html",
	"./src/page19.html",
	"./src/page20.html",
	"./src/page21.html",
]; // Add your HTML file paths here

files.forEach((file, index) => {
	processHtmlFile(file, index).catch((error) => {
		console.error(`Error processing ${file}:`, error);
	});
});
