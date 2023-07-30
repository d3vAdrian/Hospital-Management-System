import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    doctor: {
      type:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
      required: true,
    },
    patient: {
      type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    priority: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    session: {
      type: String,
      required: true,
      min: 1,
      max: 50,
    },
    task: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    description: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    date: Date,
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);
export default Appointment;
