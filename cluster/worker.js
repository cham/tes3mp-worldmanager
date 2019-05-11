const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')

const app = express()
const port = config.get('TES3_API_SERVER_PORT')

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}))

app.listen(port, () => {
  console.log(`Worker listening on port ${port}`)
})
