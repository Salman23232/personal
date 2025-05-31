import mongoose from "mongoose";

const workExperienceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: String,
  position: String,
  location: String,
  startDate: Date,
  endDate: Date,
  description: String
},{timestamps:true})

export const Work = mongoose.model('Work', workExperienceSchema)