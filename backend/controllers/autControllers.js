import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    const isPassCorrect = await bcrypt.compare(password, user?.password || "");

    if (!user || !isPassCorrect) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid username or password" });
    }
     generateToken(user._id,res);
    res.status(200).json({
      success:true,
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const logout =  (req, res) => {
   try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({success:true, message:"logged out successfully"});
   } catch (error) {
    console.log("Error in logout controller",error.message);
    res.status(500).json({success:false, message:"Internal server error"})
   }
};

export const register = async (req, res) => {
    const {username, password, fullName, confirmPass, gender} = req.body;
    try {
        if(password !== confirmPass){
            return res.json({success:false, message:"Password doesn't match"});
        }
        const user = await User.findOne({username});
        if(user){
            res.status(400).json({success:false, message:"username already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password:hashedPass,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if(newUser){
            generateToken(newUser._id,res);
            await newUser.save();
           return res.status(201).json({
                success:true,
                _id: newUser._id,
                fullName: newUser.fullName,
                profilePic: newUser.profilePic
            });
        }else{
           return res.status(400).json({success:false,error:"Invalid user Data"})
        }

    } catch (error) {
    console.log("Error in register controller",error.message);
    res.status(500).json({success:false, message:"Internal server error"})
    }

};
