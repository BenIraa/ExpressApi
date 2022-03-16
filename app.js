import express from "express";
import bodyParser from 'body-parser'
import userRouter from './src/Users/routes/user.routes.js'
import contactRouter from './src/Contacts/routes/contacts.routes.js'
import blogsRouter from "./src/blogs/routes/blog.routes.js"
import educationRouter from './src/education/router/education.router.js'
import messageRouter from './src/message/router/message.router.js'
import commentsRouter from './src/comments/router/comments.router.js'
const app = express();


app.use(bodyParser.json());
app.use(
    express.urlencoded({
      extended: false,
    })
  );

app.get('/', (req, res) =>{
    res.status(200).json("BenIraa ExppessAPI")

})
app.use('/api/v1/users', userRouter)
app.use('/api/v1/contactUs', contactRouter )
app.use('/api/v1/blogs', blogsRouter )
app.use('/api/v1/education', educationRouter)
app.use('/api/v1/message', messageRouter)
app.use ('/api/v1/comments',commentsRouter)


export default app;