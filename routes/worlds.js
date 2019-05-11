const express = require('express')

const worldsApi = require('../api/worlds')

const router = express.Router()

/* GET */
router.get('/', (req, res) => {
  worldsApi.getWorlds()
    .then(worlds => res.send(worlds))
    .catch(e => res.status(500).send({ message: e.message }))
})
router.get('/current', (req, res) => {
  worldsApi.getCurrentWorld()
    .then(worldData => res.send(worldData))
    .catch(e => res.status(500).send({ message: e.message }))
})

/* POST */
router.post('/switch/:worldname', (req, res) => {
  worldsApi.switchWorld(req.params.worldname)
    .then(data => res.send(data))
    .catch(e => res.status(500).send({ message: e.message }))
})

module.exports = router
