import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: [true, "Enter Firstname"]
    },
    lastname: {
        type: String,
        require: [true, "Enter lastname"]
    },
    email: {
        type: String,
        require: [true, "Enter Email"]
    },
    telephone: {
        type: String,
        require: [true, "Enter Telephone"]
    },
    contactUs: {
        type: String,
        require: [true, "Please contactUs"]
    },
    
})
const contactUs = mongoose.model("ContactUs", ContactSchema)

export  default contactUs