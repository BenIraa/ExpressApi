import express from 'express';
import userRouter from './Users/routes/user.routes.js'

const app = express();
const users = [];

app.use(express.json());
app.use(userRouter);


app.listen(3000, () => console.log('server is running'));


// install nodemon to run everychanges