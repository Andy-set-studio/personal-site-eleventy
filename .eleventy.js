const rssPlugin = require('@11ty/eleventy-plugin-rss');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const debugFilter = require('./src/filters/debug-filter.js');
const formatsFilter = require('./src/filters/formats-filter.js');
const randomFilter = require('./src/filters/random-filter.js');
const sanitizeNameFilter = require('./src/filters/sanitize-name-filter');
const sortByArtistFilter = require('./src/filters/sort-by-artist-filter.js');
const tagFilter = require('./src/filters/tag-filter.js');
const urlEncodeFilter = require('./src/filters/urlencode-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Collections
const blog = require('./src/collections/blog.js');
const music = require('./src/collections/music.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('debug', debugFilter);
  config.addFilter('formatsFilter', formatsFilter);
  config.addFilter('randomFilter', randomFilter);
  config.addFilter('sanitizeNameFilter', sanitizeNameFilter);
  config.addFilter('sortByArtistFilter', sortByArtistFilter);
  config.addFilter('tagFilter', tagFilter);
  config.addFilter('urlEncodeFilter', urlEncodeFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  config.addPlugin(rssPlugin);

  // Returns a collection of blog posts from WordPress in reverse date order
  config.addCollection('blog', blog);
  config.addCollection('music', music);

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Pass through fonts and images
  config.addPassthroughCopy('./src/fonts');
  config.addPassthroughCopy('./src/images');
  config.addPassthroughCopy('./src/js');
  config.addPassthroughCopy('./src/_redirects');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
