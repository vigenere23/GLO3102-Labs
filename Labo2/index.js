const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const open = require('open')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.use('/static', express.static(__dirname + '/static'))

app.use('/', router)

let port = process.env.port || 3000
app.listen(port)

console.log("Opening browser...")
open("http://localhost:" + port)