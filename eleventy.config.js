import markdownPlugin from '@jgarber/eleventy-plugin-markdown';
import anchorPlugin from 'markdown-it-anchor';
import pluginTOC from 'eleventy-plugin-toc';

export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./css/custom.css");
  eleventyConfig.addWatchTarget("./css/style.css");
  eleventyConfig.addPlugin(markdownPlugin, {
    options: {
      preset: "commonmark",
      typographer: false,
      breaks: false
    },
    plugins: [anchorPlugin]
  });
  eleventyConfig.addPlugin(pluginTOC, {
    ul: true
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
  eleventyConfig.addCollection('weightedItems', function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.tags && item.data.tags.includes("page")) // Filter for specific items if needed
      .sort((a, b) => a.data.weight - b.data.weight);
  });

  return {
    dir: {
      input: "content"
    }
  }

};

