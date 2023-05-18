module.exports = function urlEncodeFilter(url) {
  return url.replace(/\//, '%2F').replace(/ /, '%20');
};
