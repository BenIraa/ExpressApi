import express from 'express';
import userRouter from './Users/routes/user.routes.js'
import contactsRoutes from './Contacts/routes/contacts.routes.js';
const app = express();
const users = [];
const contacts = [];

app.use(express.json());
app.use(userRouter);
app.use(contactsRoutes)


app.listen(3000, () => console.log('server is running'));


// install nodemon to run everychanges