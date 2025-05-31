import mongoose from "mongoose";

const BlogModel = new mongoose.Schema(
{
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String,
  tags: [String],
  coverImage: String,
  createdAt: { type: Date, default: Date.now }
}
,
{timestamps:true}
)

export const Blog = mongoose.model('Blog', BlogModel)