import markdownPlugin from "@jgarber/eleventy-plugin-markdown";
import pluginTOC from "eleventy-plugin-toc";
import anchorPlugin from "markdown-it-anchor";

const shouldHide = ({ date, draft }) => {
	if (process.env.BUILD_DRAFTS) {
		return false;
	}
	const isDraft = draft;
	const isPageFromFuture = date && date.getTime() > Date.now();
	return isDraft || isPageFromFuture;
};

export default function (eleventyConfig) {
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

	// Files that should be copied into the rendered content directory.
	eleventyConfig.addPassthroughCopy("content/**/*.kmz");
	eleventyConfig.addPassthroughCopy("content/**/*.png");
	eleventyConfig.addPassthroughCopy("content/**/*.jpg");
	eleventyConfig.addPassthroughCopy("content/**/*.pdf");
	eleventyConfig.addPassthroughCopy("content/**/*.txt");
	eleventyConfig.addPassthroughCopy("content/**/*.gpx");

	// This shortcode is used in the copyright notice to ensure it always shows
	// the current year.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// The weightedItems collection returns a list of pages sorted by their
	// weight property. This is used to generate the top-of-page navigation and
	// the menu on the home page.
	eleventyConfig.addCollection("weightedItems", (collectionApi) => {
		return collectionApi
			.getAll()
			.filter((item) => item.data?.tags?.includes("page"))
			.sort((a, b) => a.data.weight - b.data.weight);
	});

	// When `permalink` is false, the file is not written to disk
	eleventyConfig.addGlobalData("eleventyComputed.permalink", () => {
		return (data) => {
			// Always skip during non-watch/serve builds
			if (shouldHide(data)) {
				return false;
			}

			return data.permalink;
		};
	});

	// When `eleventyExcludeFromCollections` is true, the file is not included in any collections
	eleventyConfig.addGlobalData(
		"eleventyComputed.eleventyExcludeFromCollections",
		() => {
			return (data) => {
				// Always exclude from non-watch/serve builds
				if (shouldHide(data)) {
					return true;
				}

				return data.eleventyExcludeFromCollections;
			};
		},
	);

	eleventyConfig.on("eleventy.before", ({ runMode }) => {
		// Set the environment variable
		if (runMode === "serve" || runMode === "watch") {
			process.env.BUILD_DRAFTS = true;
		}
	});

	return {
		dir: {
			input: "content",
		},
	};
}
