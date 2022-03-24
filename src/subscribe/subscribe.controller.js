import Subscribe from '../models/subscribe.js'

export const addSubscriber = async (req, res) => {
    try {
        const sub = await Subscribe.create(req.body);
        res.status(201).json({
            status: "Added",
            data: { sub}
        }) 
    } catch (error) {
        res.status(400).json({
            status: "fail",
            data: {error}
        })
        
    }

}
export const getSubscriber = async (req, res)  => {
    try {
        const id =  req.params.id;
        const sub = await Subscribe.findById(id);
        res.status(200).json({
        status:"success Retrieved",
        data: {sub}
    })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
            error: error.stack
            
        })
        
    }
   
}
export const getAllSubscriber = async (req, res) =>{
    try {
        const sub = await Subscribe.find()
        res.status(200).json({
            status: "Success!",
            result: sub.length, 
            data: {sub}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: {error}
        })
        
        
    }
}
export const updateSubscriber =  async (req, res) => {
    try {
        const contact = await Subscribe.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
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
export const deleteSubscriber = async (req, res) => {
    try {
        await Subscribe.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: { }
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: {error}
        })
        
    }
}