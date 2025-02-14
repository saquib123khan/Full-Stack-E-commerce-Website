import jwt from 'jsonwebtoken'
import AppError from '../utils/error.utils.js'

const userAuth = async(req,res,next) => {

    const {token} = req.headers

    if(!token){
        return res.status(401).json({
            success:false,
            message:'Not authorized login again'
        })
    }

    try {
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()

    } catch (error) {
        return next(new AppError(error.message, 500));
    }
}


export default userAuth