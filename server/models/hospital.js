import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    address: String,
    state: String,
    country: String,
    phoneNumber: String,
  },
  { timestamps: true }
);

const Hospital = mongoose.model("Hospital", HospitalSchema);
export default Hospital;
