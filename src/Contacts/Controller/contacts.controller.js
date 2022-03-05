import contactUs from '../../models/ContactModel.js'

export const addContacts = async (req, res) => {
    try {
        const newcontact = await contactUs.create(req.body);
        res.status(201).json({
            status: "Added",
            data: { newcontact}
        }) 
    } catch (error) {
        res.status(400).json({
            status: "fail",
            data: {error}
        })
        
    }

}
export const getContacts = async (req, res)  => {
    try {
        const {id} =  req.params.id;
        const contact = await contactUs.findById(id);
        res.status(200).json({
        status:"success Retrieved",
        data: {contact}
    })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: {error}
        })
        
    }
   
}
export const getAllContacts = async (req, res) =>{
    try {
        const contacts = await contactUs.find()
        res.status(200).json({
            status: "Success!",
            result: contacts.length, 
            data: {contacts}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: {error}
        })
        
        
    }
}
export const updateContact =  async (req, res) => {
    try {
        const contact = await contactUs.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        res.status|(200).json({
            status: "Success",
            data: { contact}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: { error}
        })
        
    }
}
export const deleteContact = async (req, res) => {
    try {
        await contactUs.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: {}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: {error}
        })
        
    }
}