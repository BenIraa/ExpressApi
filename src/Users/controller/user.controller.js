const users = [];
const homepage = (req, res) => res.json('Hello World!');
const getUsers = (req, res) => res.json({message: 'all users retrieved', users});
const addUsers =  (req, res) => {
    const user = req.body;
    user.id =users.length;
    users.push(user);
    res.json({message: `user ${user.name} succesfully created ! `, user});   
}
const getUser = (req, res) => {
    
    const {id} = req.params;
    const user = users.find((e) => e.id == id);
    if(user) return  res.json({message: `user ${user.name} succcesfull retreived`, user});
    res.json({error: `user with id ${id} doesnt exsist`});
   
}
const updateUser =  (req, res) => {
    const id = req.params.id;
    const user = users.find((e) => e.id == id); 
    const update =req.body;
    Object.assign(user, update); 
    res.json({message: `user with id ${id} succesfuly updated`, user: user});
}
const deleteUser = (req, res) =>{
    const {id} = req.params;
    users.splice(id, 1);
    res.json({message: `user with id ${id} succewsfully deleted`});
}

export{ homepage, getUsers, addUsers, getUser, updateUser, deleteUser,users}