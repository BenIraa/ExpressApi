/*import {users} from '../controller/user.controller.js'

const signupValidator = (req, res, next) => {
    let {email, name} = req.body
    if(!email) return res.json({error: 'email missing'});
    if(!name) return res.json({error: 'name missing'});
    if(users.find(u => u.email == email)) res.json({message: `user with email ${email} exist`});
    else next();
}
export {signupValidator as default}*/