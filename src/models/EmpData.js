import mongoose from "mongoose";

const { Schema } = mongoose;

const empSchema = new Schema(
  {
    empid: {
      type: String,
      required: true,
    },
    empname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


export default mongoose.models.EmpData || mongoose.model("EmpData", empSchema);
