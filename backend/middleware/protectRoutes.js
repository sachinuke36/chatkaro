import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRoutes = async(req,res,next)=>{

    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({success:false, message:"Unauthorized - No token Provided"});
        }
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        if(!decoded){
            return res.status(401).json({success:false, message:"Unauthorized - Invalid token"})
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).json({success:false, message:"user not found"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware",error.message)
        res.status(500).json({
            error: "Internal server Error"
        })
    }
}

export default protectRoutes;