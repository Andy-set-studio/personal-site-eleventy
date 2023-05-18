module.exports = items =>
  items.sort((a, b) => {
    let aArtist = a.artist;
    let bArtist = b.artist;

    if (aArtist.startsWith('The ')) {
      aArtist = aArtist.slice(4);
    }

    if (bArtist.startsWith('The ')) {
      bArtist = bArtist.slice(4);
    }

    return aArtist < bArtist ? -1 : 1;
  });
