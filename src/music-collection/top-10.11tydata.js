const sortByArtistFilter = require('../filters/sort-by-artist-filter.js');

module.exports = {
  eleventyComputed: {
    items: data => {
      return [...data.collections.music]
        .filter(x => x.data.tags.includes('Top 10'))
        .sort((a, b) => {
          return a.data.topTenOrder - b.data.topTenOrder;
        });
    }
  }
};
