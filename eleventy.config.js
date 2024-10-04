import markdownPlugin from '@jgarber/eleventy-plugin-markdown';
import anchorPlugin from 'markdown-it-anchor';
import pluginTOC from 'eleventy-plugin-toc';

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./bundle.css");
  eleventyConfig.addWatchTarget("./custom.css");
  eleventyConfig.addWatchTarget("./style.css");
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
};

