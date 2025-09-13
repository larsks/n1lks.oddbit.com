import markdownPlugin from "@jgarber/eleventy-plugin-markdown";
import pluginTOC from "eleventy-plugin-toc";
import anchorPlugin from "markdown-it-anchor";

// Define files that should be copied into the rendered content directory.
function setupPassthroughCopy(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("content/**/*.kmz");
	eleventyConfig.addPassthroughCopy("content/**/*.kml");
	eleventyConfig.addPassthroughCopy("content/**/*.png");
	eleventyConfig.addPassthroughCopy("content/**/*.jpg");
	eleventyConfig.addPassthroughCopy("content/**/*.pdf");
	eleventyConfig.addPassthroughCopy("content/**/*.txt");
	eleventyConfig.addPassthroughCopy("content/**/*.gpx");
}

function exposeRunMode(eleventyConfig) {
	let currentRunMode = "build";

	eleventyConfig.on("eleventy.before", ({ runMode }) => {
		currentRunMode = runMode;
	});

	// Make runMode available to templates
	eleventyConfig.addGlobalData("runMode", () => currentRunMode);
}

export default function (eleventyConfig) {
	exposeRunMode(eleventyConfig);

	eleventyConfig.addWatchTarget("./css/custom.css");
	eleventyConfig.addWatchTarget("./css/style.css");
	eleventyConfig.addPlugin(markdownPlugin, {
		options: {
			preset: "commonmark",
			typographer: false,
			breaks: false,
		},
		plugins: [anchorPlugin],
	});
	eleventyConfig.addPlugin(pluginTOC, {
		ul: true,
	});
	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
	});

	setupPassthroughCopy(eleventyConfig);

	// This shortcode is used in the copyright notice to ensure it always shows
	// the current year.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// Custom filters for post date filtering
	eleventyConfig.addFilter("post_is_future", (posts) => {
		const now = new Date();
		return posts.filter((post) => post.date > now);
	});

	eleventyConfig.addFilter("post_is_past", (posts) => {
		const now = new Date();
		return posts.filter((post) => post.date <= now);
	});

	return {
		dir: {
			input: "content",
		},
	};
}
