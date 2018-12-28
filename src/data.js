const bodyParser = require('body-parser')
const express = require('express')
const serverless = require('serverless-http')
const data = require('../data.json')
const models = data.models
const cars = data.cars

const app = express()

const router = express.Router()
router.get('/', (req, res) => res.status(200).json({ data }))
router.get('/models', (req, res) => res.status(200).json({ models }))
router.get('/cars', (req, res) => res.status(200).json({ cars }))

app.use(bodyParser.json())
app.use('/.netlify/functions/data', router)

exports.handler = serverless(app)
