import express from "express";
import userRouter from './src/Users/routes/user.routes.js'
import contactRouter from './src/Contacts/routes/contacts.routes.js'
const app = express();

app.get('/', (req, res) =>{
    res.status(200).json({message: 'Welcome! homepage'})

})
app.use('/api/v1/users', userRouter)
app.use('/api/v1/contactUs', contactRouter )
export default app;