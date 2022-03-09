import education from '../../models/education.js'

export const addEducation = async (req, res) => {
    try {
        const neweduc = await education.create({
            startedYear: req.body.startedYear,
            endedYear: req.body.endedYear,
            school: req.body.school,
            courses: req.body.school

        });
        res.status(201).json({
            status: "succes added",
            data: {neweduc}
            
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            data: {error},
            error: error.stack
        })
        
    }
}
export const getAllEducation = async (req, res) => {
    
    try {
        const educ = await education.find()
        res.status(200).json({
            status: "Success!",
            result: educ.length, 
            data: { educ}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: { error},
            error: error.stack
        })
        
        
    }
}
export const getEducation = async (req, res) => {
    try {
        const {id} =  req.params.id;
        const edu = await education.findById(id);
        res.status(200).json({
        status:"success Retrieved",
        data: {edu}
    })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
            error: error.stack
            
        })
        
    }
   
}
export const updateEductaion = async (req, res) => {
    try {
       
       const educ = await education.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
       res.status(200).json({
        status: "Success!", 
        data: { educ}
    })

        
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: { error}
        })
    }   
}


export const deleteEducation = async (req, res) =>{
    
    try {
        
        await education.findByIdAndDelete(req.params.id);
        res.status(204).json({
        status: "Success!", 
        data: { },
        error: error.stack
     })
 
         
     } catch (error) {
         res.status(404).json({
             status: "fail", 
             data: { error}
         })
     }   
}