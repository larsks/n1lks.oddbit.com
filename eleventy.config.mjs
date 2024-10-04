export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./bundle.css");
  eleventyConfig.addWatchTarget("./custom.css");
  eleventyConfig.addWatchTarget("./style.css");
};

