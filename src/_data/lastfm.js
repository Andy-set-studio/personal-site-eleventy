require('dotenv').config();

const axios = require('axios');
const {AssetCache} = require('@11ty/eleventy-fetch');

module.exports = async function () {
  const asset = new AssetCache('lastfm');

  // If saved in cache, return that instead of fetching all the data
  if (asset.isCacheValid('3m')) {
    return asset.getCachedValue();
  }

  // Loads recently played tracks
  const {data: recentTracksData} = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=andyvirus&api_key=${process.env.LAST_FM_KEY}&format=json`
  );

  const response = {
    recentTracks: recentTracksData?.recenttracks?.track
  };

  asset.save(response, 'json');
  return response;
};
