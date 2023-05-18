const {AssetCache} = require('@11ty/eleventy-fetch');

const apiKey = process.env.NOTION_TOKEN;

// This is the first part of the URL: https://www.notion.so/75aacb32823a4295a345213c63555d6a?v=3be29744fa6f45c493a4b9774119a447
// You also need to share it with the integration: on the database page, click share and the integration will show up like users do

// https://www.notion.so/my-integrations/internal/6624fb8c938d48d38532dbde4402cceb
const databaseID = process.env.NOTION_DB_ID;

const {Client} = require('@notionhq/client');

// Initializing a client
const notion = new Client({
  auth: apiKey
});

let items = [];

// Either grabs the first set of results or a paginated version
const getDB = async function (cursor = null) {
  let db = null;
  if (cursor) {
    db = await notion.databases.query({
      database_id: databaseID,
      start_cursor: cursor
    });
  } else {
    db = await notion.databases.query({
      database_id: databaseID
    });
  }

  return db;
};

module.exports = async function () {
  // A bit of low-level caching going on
  if (items.length) {
    return items;
  }

  let asset = new AssetCache('music');

  // If saved in cache, return that instead of fetching all the data
  if (asset.isCacheValid('8h')) {
    return asset.getCachedValue();
  }

  let db = await getDB();

  items = [...items, ...db.results];

  // While there are more pages, grab more results
  while (db.has_more) {
    db = await getDB(db.next_cursor);

    items = [...items, ...db.results];
  }

  const response = items.map(result => {
    let coverImage = result.properties.Cover.rich_text[0].plain_text;

    coverImage = coverImage.replace('https://music.andy-bell.co.uk', '');
    coverImage = `https://music-catalogue-covers.imgix.net${coverImage}?auto=format&w=500&height=500`;

    return {
      name: result.properties.Name.title[0].plain_text,
      artist: result.properties.Artist.select.name,
      cover: coverImage,
      formats: result.properties.Formats.multi_select.map(item => item.name),
      tags: result.properties.Tags.multi_select.map(item => item.name)
    };
  });

  // Stick in cache for later
  asset.save(response, 'json');
  return response;
};
