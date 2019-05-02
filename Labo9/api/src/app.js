import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { router } from './routers/expressRouter'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

export { app }
