const Eleventy = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/css')

  return {
    version: Eleventy.getVersion(),
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
    dir: {
      input: 'src',
      output: '_site',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data'
    },

  }
}