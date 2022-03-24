import express from "express";
import bodyParser from 'body-parser'
import userRouter from './src/Users/routes/user.routes.js'
import contactRouter from './src/Contacts/routes/contacts.routes.js'
import blogsRouter from "./src/blogs/routes/blog.routes.js"
import educationRouter from './src/education/router/education.router.js'
import messageRouter from './src/message/router/message.router.js'
import commentsRouter from './src/comments/router/comments.router.js'
import subscribersRouter from "./src/subscribe/subscrible.router.js";
import cors from 'cors'



const app = express();
app.use(cors())
// allow cors headers
// app.use((req,res,next)=>{
//   res.setHeader('Acces-Control-Allow-Origin','*');
//   res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//   res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
//   next(); 
// })
app.use(bodyParser.json());
app.use(
    express.urlencoded({
      extended: false,
    })

  );


  // set header
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//for cross origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) =>{
    res.status(200).json("BenIraa ExppessAPI")


})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/contactUs', contactRouter )
app.use('/api/v1/blogs', blogsRouter )
app.use('/api/v1/education', educationRouter)
app.use('/api/v1/message', messageRouter)
app.use ('/api/v1/comments',commentsRouter)
app.use('/api/v1/subscribers', subscribersRouter)


export default app;