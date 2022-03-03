import express from 'express';
import { getContacts, addContacts} from '../Controller/contacts.controller.js';
import contactValidator from '../middleware/contacts.middleware.js'
const router = express.Router();
const contacts = [];

router.use(express.json());
router.get('/contacts', getContacts);
router.post('/contacts',contactValidator, addContacts);

export { router as default}