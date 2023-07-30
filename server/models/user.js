import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    emergencylastName: String,
    emergencyEmail: String,
    address2: String,
    emergencyfirstName: String,
    Name: String,
    address2: String,
    address2: String,
    location: String,
    username: String,
    country: Object,
    county: Object,
    regDate: Date,
    hireDate: Date,
    dob: Date,
    gender: String,
    relationship: String,
    martialStatus: String,
    admissionReaasons: String,
    admissionDesc: String,
    hireReaasons: String,
    hireDesc: String,
    password: String,
    confirmPassword: String,
    role: String,
    experience: String,
    age: Number,
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;