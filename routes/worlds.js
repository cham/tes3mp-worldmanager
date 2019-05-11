const express = require('express')

const worldsApi = require('../api/worlds')

const router = express.Router()

/* GET */
router.get('/', (req, res) => {
  worldsApi.getWorlds()
    .then(worlds => res.send(worlds))
    .catch(e => res.status(500).send({ message: e.message }))
})

module.exports = router
