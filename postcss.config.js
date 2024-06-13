module.exports = (prefix) => {
	return {
		syntax: "postcss-html",
		plugins: [
			require("postcss-prefixer")({
				prefix: `${prefix}`, // Customize your prefix here
			}),
		],
	};
};
