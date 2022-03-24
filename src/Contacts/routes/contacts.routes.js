import express from 'express';
import {addContacts, getAllContacts,deleteContact, getContacts, updateContact} from '../Controller/contacts.controller.js';
import {protect, restrictTo} from '../../middleware/protect.middleware.js'
const router = express.Router();

router.use(express.json());
router.route('/').get(protect, restrictTo("admin"),getAllContacts).post(addContacts);
router.route('/:id').get(protect, restrictTo("admin"),getContacts).patch(protect, restrictTo("admin"),updateContact).delete(protect, restrictTo("admin"),deleteContact)

export { router as default}