import mongoose from "mongoose";

const ReserveSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        max: 50,
    },
    firstName: {
      type: String,
      required:true
    },
    lastName: {
      type: String,
      required:true
    },
    plan: {
      type: String,
      required:true
    },
    durationDate: Array,
    ward: Object,
    name: Object,

    description:{
      type: String,
      required: true
    },
    Date: Date,
  },
  { timestamps: true }
);

const Reserve = mongoose.model("Reserve", ReserveSchema);
export default Reserve;
