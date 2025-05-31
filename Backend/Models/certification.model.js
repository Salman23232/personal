import mongoose from "mongoose";

const CertificationModel = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  issuingOrganization: String,
  issueDate: Date,
  expirationDate: Date,
  certificateUrl: String
},{timestamps:true}
)

export const Certification = mongoose.model('Certification', CertificationModel)