import User from '../../models/UserModel.js'
import jwt from 'jsonwebtoken'
import {promisify} from 'util'
import { Console } from 'console'

export const protectMiddleware = async (req, res , next) => {
    let token 
    try {
        
        if( req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(" ")[1]
            //console.log(token)
        }
        if(!token){
            return res.status(401).json({
                status: "fail",
                message: "you are not loged in"
            })
        }
        const decodedToken = await promisify(jwt.verify)(token, process.env.SECRETE)
        console.log(decodedToken)
        const existingUser = await User.findById(decodedToken.id)
        //console.log(existingUser)
        req.existingUser = existingUser
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: error,
            // error: error.stack

        })

        
    }
    next()

} 