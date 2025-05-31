import mongoose from "mongoose";

const educationModel = new mongoose.Schema(
    {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  institution: String,
  degree: String,
  fieldOfStudy: String,
  startDate: Date,
  endDate: Date,
  grade: String,
  description: String
},
{timestamps:true}
)

export const Education = mongoose.model('Education', educationModel)