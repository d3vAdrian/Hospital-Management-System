import mongoose from "mongoose";

const BedSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    ward: String,

  },
  { timestamps: true }
);

const Bed = mongoose.model("Bed", BedSchema);
export default Bed;
