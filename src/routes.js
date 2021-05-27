const express = require('express')
const routes = express.Router()


routes.get('/', (req, res) => res.json({helloWorld: 'Hello world'}))


module.exports = routes