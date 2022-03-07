import Blog from '../../models/blogs.js'
export const addblog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json({
            status: "added",
            data: {blog}
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            data: {error}
    })
}
}
export const getBlog = async (req, res)  => {
    try {
        const {id} =  req.params.id;
        const blog = await Blog.findById(id);
        res.status(200).json({
        status:"success Retrieved",
        data: {blog}
    })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: {error}
        })
        
    }
   
}
export const getAllBlogs = async (req, res) =>{
    try {
        const blog = await Blog.find()
        res.status(200).json({
            status: "Success!",
            result: newblog.length, 
            data: {blog}
        })
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            data: {error}
        })
        
        
    }
}
export const updateBlog = async (req, res) => {
    try {
       
       const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
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
        
        await Blog.findByIdAndDelete(req.params.id);
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