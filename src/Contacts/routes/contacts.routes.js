import express from 'express';
import { getContacts, addContacts,getcontact, deleteContact} from '../Controller/contacts.controller.js';
import contactValidator from '../middleware/contacts.middleware.js'
const router = express.Router();
const contacts = [];

router.use(express.json());
router.get('/contacts', getContacts);
router.get('/contacts/:id', getcontact);
router.post('/contacts',contactValidator, addContacts);
router.delete('/contacts/:id', deleteContact);

export { router as default}