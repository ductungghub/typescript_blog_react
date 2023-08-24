import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import routes from './routes/index'

//Middlew
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'DELETE'],
  })
);
app.use(morgan('dev'))
app.use(cookieParser())


//Routes
app.use('/api', routes.authRouter)

//Database
import './config/database'


//server listenning
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Server is running on the port', PORT)
} )
