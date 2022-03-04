import express from "express";
import userRouter from './src/Users/routes/user.routes.js'

const app = express();
app.get('/', (req, res) =>{
    res.status(200).json({message: 'Welcome! homepage'})

})
app.use('/api/v1/users', userRouter)
export default app;