import bcrypt from 'bcryptjs'
import User from '../../models/UserModel.js'
import jwt from 'jsonwebtoken'
import {promisify} from 'util'

export const addUsers =  async (req, res) => { 
    try {
        const {password} = req.body
        console.log(password)
        const newuser = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            role: req.body.role,
            telephone: req.body.telephone,
            password: await bcrypt.hash(password, 12)
        });
        const token = jwt.sign({ id: newuser._id }, process.env.SECRETE, { expiresIn: process.env.EXPIRES })
        res.status(201).json({ 
            token,
            data: { newuser},
            message: 'success'
        })
    } catch (error) {

        res.status(400).json({
            error: 'user doesnt insert', 
            error: error.stack

        })
        
    }
     
}

export const Login = async (req, res) => {
    try {
    const {email, password} = req.body
    if(!email || !password) {
        return res.status(400).json({message: 'provide email and password'})
    }
    const user = await User.findOne({email: email})
    if(!user) {
        return res.status(401).json({message: 'user doesnt exist'})
        }
        console.log("user",user)
    bcrypt.compare(password, user.password ,(error,success) =>{
        if(error){
            return res.status(500).json({message: 'internal server error'})
        }
        if(success) {
            const token = jwt.sign({id:user._id},process.env.SECRETE, {expiresIn: process.env.EXPIRES})
           console.log("this is token",token)
           res.status(200).json({
           status: "success!",
           token,
           data: {user}
           
    })   
        }else{
            res.status(403).json({message: 'incorrect password'})
        }
    })
    
     
    } catch (error) {
        res.status(401).json({
            status: "fail",
            error
        })
        
    }
}
export const getUser = async (req, res) => {
    try {
       const id = req.params.id;
       const user = await User.findById(id);
       console.log(user)
       console.log(id)
       res.status(200).json({
        status: "Success!", 
        data: {user},
    })

        
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: {error},
            error: error.stack
        })
    }   
}
export const getAllUsers = async (req, res) => {
    console.log(req.existingUser)
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: { error},
            error: error.stack
        })
        
        
    }
}
export const updateUser = async (req, res) => {
    try {
       
       const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
       res.status(200).json({
        status: "Success!", 
        data: {user}
    })

        
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: { error}
        })
    }   
}


export const deleteUser = async (req, res) =>{
    
    try {
        
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({
        status: "Success!", 
     })
 
         
     } catch (error) {
         res.status(404).json({
             status: "fail", 
             data: { error}
         })
     }   
}

