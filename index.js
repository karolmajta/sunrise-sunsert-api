var moment = require('moment');

module.exports = function getSunsriseSunsetData(params) {
  var lat = params.lat || 0;
  var lng = params.lng || 0;
  var date = params.date || moment().format('YYYY-MM-DD');
  var formatted = params.formatted || 0;

  var url = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + '&date=' + date + '&formatted=' + formatted;

  return fetch(url)
    .then(function(r) { return r.json(); });
};
