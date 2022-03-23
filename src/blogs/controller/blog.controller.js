import blogs from '../../models/blogs.js';
import blogRoutes from '../routes/blog.routes.js';

export const addblog = async (req, res) => {
    try {
       
        const blog = await blogs.create(req.body);
        console.log(blog)
        console.log(req.body)
        res.status(201).json({
            status: "added",
            data: blog
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            data: {error},
            error: error.stack
    })
}
}
export const getBlog = async (req, res)  => {
    try {
        const id =  req.params.id;
        const blog = await blogs.findById(id);
        res.status(200).json({
        status:"success Retrieved",
        data: {blog}
    })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: {error},
            error: error.stack
        })
        
    }
   
}
export const getAllBlogs = async (req, res) =>{
    try {
        const blog = await blogs.find()
        res.status(200).json({
            status: "Success!",
            result: blogRoutes.length, 
            data: {blog}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: {error},
            error: error.stack
        })
        
        
    }
}
export const updateBlog = async (req, res) => {
    try {
       
       const blog = await blogs.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
       res.status(200).json({
        status: "Success!", 
        data: { blog}
    })

        
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: { error}
        })
    }   
}
export const deleteBlog = async (req, res) =>{
    
    try {
        
        await blogs.findByIdAndDelete(req.params.id);
        res.status(204).json({
        status: "Success!", 
        data: { }
     })
 
         
     } catch (error) {
         res.status(404).json({
             status: "fail", 
             data: { error},
             error: error.stack
         })
     }   
}
// end