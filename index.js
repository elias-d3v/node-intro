import express from 'express'
import 'dotenv/config'
import movieRouter from './routes/movieRouter.js'
import mongoose from 'mongoose'

const app = express()

const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(movieRouter)


const MONGO_URI = 'mongodb+srv://chojiu:GA7bixQW5gH20yji@intro-express-mongo.d0wlzee.mongodb.net/?retryWrites=true&w=majority&appName=Intro-express-mongo'

mongoose.connect(MONGO_URI)
const db = mongoose.connection
db.on('success', () => {
    console.log('Connected to the database 🟢')
})
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))