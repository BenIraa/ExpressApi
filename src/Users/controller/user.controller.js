import User from '../../models/UserModel.js'

export const addUsers =  async (req, res) => { 
    try {
        const newuser = await User.create(req.body);
        res.status(201).json({
            status: "Success!", 
            data: { newuser}
        })
    } catch (error) {

        res.status(400).json({
            status: "fail", 
            data: { error}
        })
        
    }
     
}
export const getUser = async (req, res) => {
    try {
       const {id} = req.params.id;
       const user = await User.findById(id);
       res.status(200).json({
        status: "Success!", 
        data: { user}
    })

        
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: {error}
        })
    }   
}
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            status: "Success!",
            result: users.length, 
            data: { users}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: { error}
        })
        
        
    }
}
export const updateUser = async (req, res) => {
    try {
       
       const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
       res.status(200).json({
        status: "Success!", 
        data: { user}
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
        data: { }
     })
 
         
     } catch (error) {
         res.status(404).json({
             status: "fail", 
             data: { error}
         })
     }   
}

