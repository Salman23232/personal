import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  img: String,
  codeLink:String,
  liveLink:String,
  techStack: [String],
  createdAt: { type: Date, default: Date.now }

},{timestamps:true})

export const Portfolio = mongoose.model('Portfolio', portfolioSchema)