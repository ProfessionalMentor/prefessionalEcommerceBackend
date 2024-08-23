import User from "../models/userRegister-model.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  const { fullName, username, email, password, phone } = req.body;

  const userExist = await User.findOne({ email });
  if(userExist){
    return res.status(400).json({
      success: false,
      message: "User already exist",
    });
  }

  bcrypt.genSalt(10, (err, salt) =>{
    bcrypt.hash(password, salt, async (err, hash) =>{
          
        const user = await User.create({
            fullName,
            username,
            email,
            password:hash,
            phone,
        }) 
           
       if (user){
        return res.status(201).json({
            success: true,
            message: "User created sucessfully"
        });
       }
        else{
            return res.status(201).json({
                success: false,
                message: "User not created"
        })
       }
     })
      })
     };

const login =async(req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({ email });
  if (!user){
    return res.status(400).json({
      success: false,
      message: "user not found",
    })
    
  }

  bcrypt.compare(password, user.password , (err, result) => {
    if (result){
      return res.status(200).json({
        success: true,
        message: "login sucessfully",
        user:{
          id: user._id,
          username: user.username,
          email: user.email,
          phone: user.phone,
          password: user.password,
        }
      });
    }
      else {
        return res.status(400).json({
          success: false,
          message: "invalid credentials",
        
      })
    }
    })
  
  }

   





export default register;