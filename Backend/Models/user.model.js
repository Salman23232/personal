import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  name: String,
  title: String,
  shortDescription: String,
  email: { type: String, unique: true },
  password: String,
  profilePic: String,
  skills: [String],
  languages: [String],
  linkedinUrl: String,
  githubUrl: String,
  portfolios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' }],
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
  certifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Certification' }],
  workExperience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkExperience' }],
  education: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Education' }],
  
},{timestamps:true})

userSchema.pre('save',async function(next){
  if (!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password,10)
  next()
})
userSchema.methods.isMatched = async function(givenPassword){
  return await bcrypt.compare(givenPassword, this.password)
}

export const User = mongoose.model('User', userSchema)