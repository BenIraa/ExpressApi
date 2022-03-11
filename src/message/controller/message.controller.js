import message from '../../models/message.js'

export const addmessage = async (req, res) => {
    try {
        const newmess = await message.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            

        });
        res.status(201).json({
            status: "succes added",
            data: {newmess}
            
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            data: {error},
            error: error.stack
        })
        
    }
}
export const getAllMessage = async (req, res) => {
    
    try {
        const mess = await message.find()
        res.status(200).json({
            status: "Success!",
            result: mess.length, 
            data: { mess}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: { error},
            error: error.stack
        })
        
        
    }
}
export const getMessage = async (req, res) => {
    try {
        const id =  req.params.id;
        const mess = await message.findById(id);
        res.status(200).json({
        status:"success Retrieved",
        data: {mess}
    })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
            error: error.stack
            
        })
        
    }
   
}
export const updateMessage= async (req, res) => {
    try {
       
       const mess = await message.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
       res.status(200).json({
        status: "Success!", 
        data: { mess}
    })

        
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: { error}
        })
    }   
}


export const deleteMessage = async (req, res) =>{
    
    try {
        
        await message.findByIdAndDelete(req.params.id);
        res.status(204).json({
        status: "data deleted", 
        data: { },
        
     })
 
         
     } catch (error) {
         res.status(404).json({
             status: "fail", 
             data: { error},
             error: error.stack
         })
     }   
}