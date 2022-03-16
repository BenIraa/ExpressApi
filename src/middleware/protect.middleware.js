import jwt from 'jsonwebtoken'
import {promisify} from 'util'
import User from './../models/UserModel.js'

export const protect = async (req, res, next) => {
  let token
  try {
        // Get token and Check if is there.

  if (req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1]
  }

  // console.log(token)
  
  if (!token) {
   return res.status(401).json({
       status: "fail",
       message: "User doesn't loged in Please login"
   })
  }

  //  Token verification
  const decoded = await promisify(jwt.verify)(token, process.env.SECRETE)
  console.log(decoded)
  // Check if User exist

  const currentUser = await User.findById(decoded.id)
  if (!currentUser) {
    return res.status(401).json({
        status: "fail",
        message: "No User found"
    })
  }

  req.user = currentUser

  next()
  } catch (error) {
    return res.status(401).json({
        status: "fail",
        error: error.stack
    })


      
  }


}

export const restrictTo = (...roles) => {
  return (req, res, next) => {
      console.log(roles)
      console.log(req.user.role)
    if (!roles.includes(req.user.role)) {
        return res.status(401).json({
            status: "fail",
            message: "You are not permited to do this!"
        })
    }
    next()
  }
}











