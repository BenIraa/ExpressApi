import express from 'express';
import {addContacts, getAllContacts,deleteContact, getContacts, updateContact} from '../Controller/contacts.controller.js';
const router = express.Router();

router.use(express.json());
router.route('/').get(getAllContacts).post(addContacts);
router.route('/:id').get(getContacts).patch(updateContact).delete(deleteContact)

export { router as default}