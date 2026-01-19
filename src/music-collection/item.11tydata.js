const randomFilter = require('../filters/random-filter.js');

module.exports = {
  eleventyComputed: {
    items: data => {
      return randomFilter(data.collections.music, 8);
    },
    metaTitle: data =>
      `${data.item.data.title} - ${data.item.data.artist} - Music Collection`
  }
};
