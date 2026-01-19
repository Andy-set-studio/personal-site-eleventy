const sortByArtistFilter = require('../filters/sort-by-artist-filter.js');

module.exports = {
  eleventyComputed: {
    items: data => {
      return sortByArtistFilter(
        data.collections.music.filter(x => x.data.formats.includes(data?.format))
      );
    }
  }
};
