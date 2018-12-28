const bodyParser = require('body-parser')
const express = require('express')
const serverless = require('serverless-http')

const app = express()

const router = express.Router()
router.get('/', (req, res) => res.status(200).json({ body: 'Hello, World' }))

app.use(bodyParser.json())
app.use('/.netlify/functions/hello', router)

exports.handler = serverless(app)
