const request = require('request')


function curl(url, done){
  request(url, (error, res, body) => {
    if(error){
      throw error
    } else {
      done(body)
    }
  })
}

module.exports = curl;
