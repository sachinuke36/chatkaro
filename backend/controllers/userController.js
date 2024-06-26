import User from "../models/userModel.js";


export const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        return res.status(200).json({success:true, data:filteredUsers});
    } catch (error) {
        console.log("Error in getUserForSidebar: ",error.message)
        return res.status(500).json({
            error:'Internal server error'
        })
    }
}