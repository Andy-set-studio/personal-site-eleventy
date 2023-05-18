module.exports = (items, path) => {
  const tag = path.replace('/tag/', '').replace('/', '');

  return items.filter(item => item.tags.includes(tag));
};
