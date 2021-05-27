const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)


// Outros
const PORT = 3333
app.listen(PORT, () => {
	console.log('Servidor Rodando... Porta ' + PORT)
})