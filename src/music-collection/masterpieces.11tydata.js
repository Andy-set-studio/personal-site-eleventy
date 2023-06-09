const randomFilter = require('../filters/random-filter.js');

module.exports = {
  eleventyComputed: {
    items: data => {
      return randomFilter(
        data.collections.music.filter(item => item.tags.includes('Masterpiece'))
      );
    }
  }
};
