import './env'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { router } from './router'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send("You need to authenticate yourself before accessing this page");
  }
});

export { app }
