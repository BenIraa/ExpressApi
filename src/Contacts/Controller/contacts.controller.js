const contacts = [];
const getContacts = (req, res) => res.json({message: `all contacts Retrieved`, contacts});
const addContacts = (req, res) => {
    const contact = req.body;
    contact.id = contacts.length;
    contacts.push(contact);
    res.json({message: `Contact ${contact.firstname} Succesfull Sent!`, contact});
}
export { getContacts, addContacts, contacts }