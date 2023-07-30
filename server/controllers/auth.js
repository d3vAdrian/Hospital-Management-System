import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import mongoose from "mongoose";

// register
export const signup = async (req, res)=>{
    try {
        const {
            firstName,
            lastName,
            username,
            gender,
            country,
            email,
            password,
            confirmPassword,
          } = req.body;

          const salt = await bcrypt.genSalt();
          const passwordHash = await bcrypt.hash(password, salt);

          const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password: passwordHash,
            gender,
            country,
            confirmPassword:passwordHash
          });
          const savedUser = await newUser.save();
          res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
// login
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      delete user.password;
      res.status(200).json({ token, user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
// register patient
export const regPatient = async (req, res)=>{
  try {
      const {
          firstName,
          lastName,
          username,
          email,
          emergencyfirstName,
          emergencylastName,
          middleName,
          occupation,
          country,
          county,
          gender,
          emergencyEmail,
          address,
          address2,
          admissionReaasons,
          admissionDesc,
          martialStatus,
          relationship,
          dob,
          regDate
        } = req.body;


        const newUser = new User({
          _id: new mongoose.Types.ObjectId(), 
          firstName,
          lastName,
          username,
          email,
          emergencyfirstName,
          emergencylastName,
          middleName,
          occupation,
          country,
          county,
          gender,
          emergencyEmail,
          address,
          address2,
          admissionReaasons,
          admissionDesc,
          martialStatus,
          relationship,
          dob,
          regDate
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}
// register employeee
export const regEmployee = async (req, res)=>{
  try {
      const {
          firstName,
          lastName,
          username,
          email,
          emergencyfirstName,
          emergencylastName,
          middleName,
          occupation,
          country,
          county,
          gender,
          emergencyEmail,
          address,
          address2,
          hireReaasons,
          hireDesc,
          martialStatus,
          relationship,
          dob,
          role,
          experience,
          hireDate
        } = req.body;


        const newUser = new User({
          _id: new mongoose.Types.ObjectId(),
          firstName,
          lastName,
          username,
          email,
          emergencyfirstName,
          emergencylastName,
          middleName,
          occupation,
          country,
          county,
          gender,
          emergencyEmail,
          address,
          address2,
          hireReaasons,
          hireDesc,
          martialStatus,
          relationship,
          dob,
          hireDate,
          role,
          experience
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}
export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
