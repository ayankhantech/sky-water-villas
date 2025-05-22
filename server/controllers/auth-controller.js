const User = require("../models/user")
const Contact = require("../models/contact-model")
const bcrypt = require("bcryptjs")
const serviceModel = require("../models/service-model")

const home = async (req, res) => {
    try {
        res.status(200).send("home")
    } catch (error) {
        console.log(error)
    }
}

const register = async (req, res, next) => {
    try {
        const { username, password, email } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create user
        const newUser = await User.create({ username, password: hashedPassword, email });

        if (newUser) {
            return res.status(201).json({
                msg: "Register successful",
                Token: await newUser.generateToken(),
                userId: newUser._id.toString()
            });
        }

        // If user creation fails
        return res.status(500).json({ msg: "Failed to register user" });

    } catch (error) {
        next(error);
    }
};


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const userExist = await User.findOne({ email });
      if (!userExist) {
        return res.status(400).json({ msg: "Invalid email or password" }); // ⬅️ return added
      }
  
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid email or password" }); // ⬅️ return added
      }
  
      const token = await userExist.generateToken();
  
      return res.status(200).json({
        msg: "Login successful",
        Token: token,
        userId: userExist._id.toString()
      }); // ⬅️ successful response
  
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ msg: "Server error" }); // ⬅️ return here too
    }
  };

const contact = async (req, res) => {
    try {
        const { username, email, message } = req.body

        await Contact.create({ username, email, message })

        return res.status(200).json({ msg: "contact submitted" })


    } catch (error) {
        return res.status(400).json({ msg: "not contact submitted" })

    }
}

const userData = async(req,res)=>{
    try {
        const userData =  req.user
        console.log(userData)
        res.status(200).send({userData})
    } catch (error) {
       res.status(400).send({"msg":"error"})
    }
}

const service = async(req,res)=>{
    try {
        const serviceData = await serviceModel.find() 
        res.status(200).send({msg:serviceData})
        if(!serviceData){
            res.status(400).send({msg:"service data not found"})
        }
        console.log(serviceData)
    } catch (error) {
        console.log("service",error)
    }
}
module.exports = { home, register, login, contact ,userData ,service}