const fs = require('fs')
const path = require('path')
const { exec } = require('shelljs')

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

const getCurrentWorld = () => new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, '../', config.get('CURRENT_WORLD_FILE')), (err, data) => {
    if (err) {
      return reject(err)
    }
    let currentWorld
    try {
      currentWorld = JSON.parse(data)
    } catch (e) {
      return reject(e)
    }
    resolve(currentWorld)
  })
})

const writeCurrentWorld = name => new Promise(function (resolve, reject) {
  const data = JSON.stringify({ name })
  fs.writeFile(path.join(__dirname, '../', config.get('CURRENT_WORLD_FILE')), data, (err) => {
    if (err) {
      return reject(err)
    }
    resolve()
  })
})

const saveWorld = name => new Promise(function (resolve, reject) {
  exec(`./${config.get('SAVE_WORLD_SCRIPT')} ${name}`, function (code, stdout, stderr) {
    if (code > 0) {
      return reject(new Error(stderr || stdout))
    }
    resolve(stdout)
  })
})

const restoreWorld = name => new Promise(function (resolve, reject) {
  exec(`./${config.get('RESTORE_WORLD_SCRIPT')} ${name}`, function (code, stdout, stderr) {
    if (code > 0) {
      return reject(new Error(stderr || stdout))
    }
    resolve(stdout)
  })
})

const resetWorld = () => new Promise((resolve, reject) => {
  exec(`./${config.get('WIPE_WORLD_SCRIPT')}`, function (code, stdout, stderr) {
    if (code > 0) {
      return reject(new Error(stderr || stdout))
    }
    resolve(stdout)
  })
})

const switchWorld = toWorldName => new Promise((resolve, reject) => {
  getCurrentWorld()
    .then((currentWorld) => {
      if (!currentWorld.name) {
        throw new Error('There is no current world')
      }
      return saveWorld(currentWorld.name)
    })
    .then(() => restoreWorld(toWorldName))
    .then(() => writeCurrentWorld(toWorldName))
    .then(resolve)
    .catch(reject)
})

const createWorld = name => new Promise((resolve, reject) => {
  resetWorld()
    .then(() => saveWorld(name))
    .then(() => writeCurrentWorld(name))
    .then(resolve)
    .catch(reject)
})

exports.getWorlds = getWorlds
exports.getCurrentWorld = getCurrentWorld
exports.createWorld = createWorld
exports.switchWorld = switchWorld
