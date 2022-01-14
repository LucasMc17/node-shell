const done = require("./bash");

function getDate(done) {
  done(String(new Date()));
}

module.exports = getDate;
