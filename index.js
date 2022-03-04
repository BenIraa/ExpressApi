import mongoose from 'mongoose'
import dotenv from 'dotenv'
import app from './app.js'
dotenv.config({path: "./config.env"})

const PORT = process.env.PORT || 3000
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD)
mongoose.connect(DB).then(() => console.log('DB connected succesfully!')) 
app.listen(PORT, () => console.log('server is running'));


