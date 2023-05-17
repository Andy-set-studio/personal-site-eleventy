const axios = require('axios');
const {AssetCache} = require('@11ty/eleventy-fetch');
const xml2js = require('xml2js');
const moment = require('moment');

module.exports = async function () {
  const bskyURL = 'https://rss.firesky.tv/?filter=@andy-bell.co.uk';
  const mastoURL = 'https://bell.bz/@andy.rss';
  let items = [];

  try {
    const {data: bskyXMLString} = await axios.get(bskyURL);
    const {data: mastoXMLString} = await axios.get(mastoURL);

    const bsky = await xml2js.parseStringPromise(bskyXMLString);
    const masto = await xml2js.parseStringPromise(mastoXMLString);

    const bskyChannel = bsky?.rss?.channel[0] || null;
    const bskyItems = bskyChannel?.item || [];

    if (bskyItems.length) {
      bskyItems.forEach(item => {
        items.push({
          network: 'Bluesky',
          content: `<p>${item.description[0]}</p>`,
          date: new Date(item.pubDate[0].replace(' GMT', '')),
          link: item.link[0].replace('staging.bsky', 'psky')
        });
      });
    }

    const mastoChannel = masto?.rss?.channel[0] || null;
    const mastoItems = mastoChannel?.item || [];

    if (mastoItems.length) {
      mastoItems.forEach(item => {
        items.push({
          network: 'Mastodon',
          content: item.description[0],
          date: new Date(item.pubDate[0]),
          link: item.link[0]
        });
      });
    }
  } catch (ex) {
    console.error(ex);
    return items;
  }

  if (items.length) {
    items = items.filter(item => moment(item.date).isSame(new Date(), 'day'));
    items = items.sort((a, b) => {
      a.date.getTime() - b.date.getTime();
    });
  }

  return items;
};
