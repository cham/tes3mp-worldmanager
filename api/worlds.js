const fs = require('fs')
const path = require('path')
const config = require('../config')

const getWorlds = () => new Promise((resolve, reject) => {
  fs.readdir(path.join(__dirname, '../', config.get('WORLD_DIR')), (err, files) => {
    if (err) {
      return reject(err)
    }
    resolve(
      files
        .filter(f => !f.match(/^\./))
        .map(f => f.replace(/\.tgz$/, ''))
    )
  })
})

exports.getWorlds = getWorlds
