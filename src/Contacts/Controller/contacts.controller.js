const contacts = [];
const getContacts = (req, res) => res.json({message: `all contacts Retrieved`, contacts});
const getcontact = (req, res) => {
    const {id} = req.params;
    const contact = contacts.find((e) => e.id == id );
    if(contact) return res.json({message: `contact ${contact.firstname} retrieved succesfully `, contact});
    res.json({error: ` contact with id ${id} doesnt exist`}); 
}
const addContacts = (req, res) => {
    const contact = req.body;
    contact.id = contacts.length;
    contacts.push(contact);
    res.json({message: `Contact from ${contact.firstname} Succesfull Sent!`, contact});
}
const deleteContact = (req, res) => {
    const {id} = req.params;
    contacts.splice(id, 1);
    res.json({message: `contact with id ${id} succesfull deleted!`});
}
export { getContacts, addContacts, getcontact, deleteContact, contacts }