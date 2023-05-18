module.exports = (items, path) => {
  const format = path.replace('/format/', '').replace('/', '');

  return items.filter(item => item.formats.includes(format));
};
