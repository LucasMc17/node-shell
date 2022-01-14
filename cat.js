const fs = require('fs')

function cat(filePath, done) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if(error){
      throw error;
    } else {
      done(data)
    }
  })
}

module.exports = cat;
