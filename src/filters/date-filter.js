const moment = require('moment');

module.exports = (value, withTime = false) => {
  const dateObject = moment(value);
  return `${dateObject.format('Do')} of ${dateObject.format('MMMM YYYY')}${
    withTime ? ` at ${dateObject.format('HH:mm')}` : ''
  }`;
};
